// frontend/lib/youtube.js

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';

// Función para obtener el último video subido de un canal (usado en la Home)
export async function getLatestChannelVideo() {
    if (!YOUTUBE_API_KEY || !YOUTUBE_CHANNEL_ID) {
        console.error('YouTube API Key o Channel ID no configurados en .env.local');
        return null;
    }

    try {
        const response = await fetch(
            `${YOUTUBE_BASE_URL}/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet&order=date&maxResults=1&type=video`
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error al obtener el último video de YouTube:', errorData);
            throw new Error(`Error de YouTube API: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
            const latestVideo = data.items[0];
            return {
                id: latestVideo.id.videoId,
                title: latestVideo.snippet.title,
                description: latestVideo.snippet.description,
                thumbnail: latestVideo.snippet.thumbnails.high.url,
                publishedAt: latestVideo.snippet.publishedAt,
            };
        } else {
            console.warn('No se encontró el último video para el canal de YouTube especificado.');
            return null;
        }
    } catch (error) {
        console.error('Error al consumir la API de YouTube para el último video:', error);
        return null;
    }
}

// NUEVA FUNCIÓN: Obtiene una lista de videos de un canal, con paginación
export async function getChannelVideos(maxResults = 50, pageToken = '') {
    if (!YOUTUBE_API_KEY || !YOUTUBE_CHANNEL_ID) {
        console.error('YouTube API Key o Channel ID no configurados en .env.local');
        return { videos: [], nextPageToken: null };
    }

    try {
        // Construye la URL de la API con los parámetros necesarios
        const url = new URL(`${YOUTUBE_BASE_URL}/search`);
        url.searchParams.append('key', YOUTUBE_API_KEY);
        url.searchParams.append('channelId', YOUTUBE_CHANNEL_ID);
        url.searchParams.append('part', 'snippet'); // Queremos el snippet (título, descripción, miniaturas)
        url.searchParams.append('order', 'date'); // Ordenar por fecha de publicación (más reciente primero)
        url.searchParams.append('maxResults', maxResults); // Número de videos a obtener por petición
        url.searchParams.append('type', 'video'); // Asegurarse de que solo se traigan videos

        // Si se proporciona un pageToken, lo añadimos para la paginación
        if (pageToken) {
            url.searchParams.append('pageToken', pageToken);
        }

        const response = await fetch(url.toString());

        if (!response.ok) {
            const errorData = await response.json();
            console.error(`Error al obtener videos del canal de YouTube: ${response.status} ${response.statusText}`, errorData);
            throw new Error(`Error de YouTube API: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Mapea los resultados para extraer solo la información relevante
        const videos = data.items
            .filter(item => item.id.videoId) // Asegurarse de que sea un video válido
            .map(item => ({
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.high.url,
                publishedAt: item.snippet.publishedAt,
            }));

        // Retorna los videos y el token para la siguiente página (si existe)
        return {
            videos,
            nextPageToken: data.nextPageToken || null,
        };
    } catch (error) {
        console.error('Error al consumir la API de YouTube para videos del canal:', error);
        return { videos: [], nextPageToken: null };
    }
}