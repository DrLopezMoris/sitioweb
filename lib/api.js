// frontend/lib/api.js



// Importa los datos de los casos de galería desde el archivo JSON local
import galleryCasesData from '../data/gallery-cases.json';
import reviewsData from '../data/reviews.json';
import multimediaItemsData from '../data/multimedia-items.json';
import webinarFlyersData from '../data/webinar-flyers.json';
// Si tienes datos para otras secciones (ej. multimedia), los importarías aquí también:
// import multimediaItemsData from '../data/multimedia-items.json';

/**
 * @description Obtiene todos los casos de galería desde el archivo JSON estático.
 * @returns {Promise<Array>} Un array de objetos de casos de galería.
 */
export async function getAllGalleryCases() {
  // En un entorno de producción estático, esto ya es una operación instantánea.
  // Usamos Promise.resolve para mantener la consistencia con las funciones asíncronas.
  return Promise.resolve(galleryCasesData);
}

/**
 * @description Obtiene el caso de galería marcado como destacado desde el archivo JSON estático.
 * @returns {Promise<Object|null>} El objeto del caso destacado o null si no se encuentra.
 */
export async function getFeaturedGalleryCase() {
  // Encuentra el primer caso que tenga is_featured en true
  const featured = galleryCasesData.find(caseItem => caseItem.is_featured);
  return Promise.resolve(featured || null); // Devuelve el caso destacado o null si no hay
}

//* ************* Reviews de google ****************** */

/**
 * @description Obtiene todas las reseñas desde el archivo JSON estático.
 * Las ordena por fecha de reseña (más reciente primero).
 * @returns {Promise<Array>} Un array de objetos de reseñas.
 */
export async function getAllReviews() {
  // Opcional: filtrar solo las reseñas activas si tu JSON incluye inactivas
  const activeReviews = reviewsData.filter(review => review.is_active);

  // Ordenar por review_date, las más recientes primero, igual que tu Meta.ordering en Django
  activeReviews.sort((a, b) => new Date(b.review_date) - new Date(a.review_date));

  return Promise.resolve(activeReviews);
}


//* ********************************** Multimedia ***********************************************
/**
 * @description Extrae el ID de video de una URL de YouTube.
 * @param {string} url - La URL completa de YouTube.
 * @returns {string|null} El ID del video de YouTube o null si no se encuentra.
 */
const getYouTubeId = (url) => {
  if (!url) return null;
  const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

/**
 * @description Obtiene todos los ítems multimedia desde el archivo JSON estático.
 * Añade `youtubeId` para videos y `thumbnail` para videos de YouTube.
 * Los ordena por fecha de subida (más reciente primero).
 * @returns {Promise<Array>} Un array de objetos de ítems multimedia.
 */
export async function getMultimediaItems() {
  const processedItems = multimediaItemsData.map(item => {
    if (item.multimedia_type === 'video' && item.youtube_url) {
      const youtubeId = getYouTubeId(item.youtube_url);
      return {
        ...item,
        youtubeId: youtubeId, // Añade el ID de YouTube
        // Puedes generar una URL de thumbnail por defecto si no la tienes en el JSON
        thumbnail: youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : null
      };
    }
    return item; // Devuelve el ítem tal cual si no es un video de YouTube
  });

  // Ordenar por upload_date, los más recientes primero
  processedItems.sort((a, b) => new Date(b.upload_date) - new Date(a.upload_date));

  return Promise.resolve(processedItems);
}


// ********************************** RHINOSCOPY SECTION ***********************************************

/**
 * @description Obtiene todos los flyers de webinars desde el archivo JSON estático.
 * Los ordena por fecha de evento (más recientes primero).
 * @returns {Promise<Array>} Un array de objetos de flyers de webinars.
 */
export async function getAllWebinarFlyers() {
  // Filtra los activos y ordena por fecha de evento (más próximos primero, como en el Meta de Django)
  const activeFlyers = webinarFlyersData.filter(flyer => flyer.is_active);
  activeFlyers.sort((a, b) => new Date(a.event_date) - new Date(b.event_date)); // Orden ascendente por fecha del evento

  return Promise.resolve(activeFlyers);
}

/**
 * @description Obtiene el último video de YouTube del canal a través de la API Route de Next.js.
 * @returns {Promise<Object|null>} El objeto del video o null si hay un error o no se encuentra.
 */
export async function getLatestYouTubeVideo() {
  try {
    const response = await fetch('/api/youtube-videos', { cache: 'no-store' }); // Llama a tu API Route interna
    // Nota: 'no-store' es para asegurar que siempre se haga la petición, ajusta según tu estrategia de cache.
    // Si quieres revalidación periódica, usa { next: { revalidate: 3600 } } en la API Route directamente.

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error fetching latest YouTube video from API Route:', errorData);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fallo al obtener el último video de YouTube:', error);
    return null;
  }
}