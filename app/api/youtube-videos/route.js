// frontend/app/api/youtube-videos/route.js
import { NextResponse } from 'next/server';
import { getLatestChannelVideo } from '@/lib/youtube'; // Importa tu función existente

export async function GET() {
  try {
    // Llama a la función que ya tienes, que ahora usa la clave de API segura (sin NEXT_PUBLIC_)
    const latestVideo = await getLatestChannelVideo();

    if (latestVideo) {
      return NextResponse.json(latestVideo);
    } else {
      return NextResponse.json({ message: 'No se encontraron videos recientes.' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error en la API Route /api/youtube-videos:', error);
    return NextResponse.json({ error: 'Fallo interno al procesar la solicitud de YouTube.' }, { status: 500 });
  }
}