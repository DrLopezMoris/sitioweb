/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // ¡Añade esta sección para la configuración de imágenes!
  images: {
    remotePatterns: [
      {
        protocol: 'http',// O 'https' si tu backend Django usa HTTPS en producción
        hostname: 'localhost', // El dominio de tu servidor de Django
        port: '8080', // El puerto de tu servidor de Django
        pathname: '/media/**', // La ruta donde se almacenan tus imágenes en Django (generalmente '/media/**')
      },

      // AÑADE ESTO: Configuración para las miniaturas de YouTube
      {
        protocol: 'https', // Las miniaturas de YouTube siempre se sirven vía HTTPS
        hostname: 'i.ytimg.com', // El dominio específico de las miniaturas de YouTube
        port: '', // No es necesario especificar un puerto, ya que usa los puertos estándar (80/443)
        pathname: '/vi/**', // Opcional pero recomendado para mayor especificidad. El path para miniaturas de video es /vi/
      },
      // Si en el futuro despliegas tu backend a un dominio como 'api.tudominio.com',
      // también deberías añadirlo aquí:
      // {
      //   protocol: 'https',
      //   hostname: 'api.tudominio.com',
      //   port: '', // Vacío si es el puerto estándar (80 o 443)
      //   pathname: '/media/**',
      // },
    ],
  },
  // Otras configuraciones existentes
};

export default nextConfig;