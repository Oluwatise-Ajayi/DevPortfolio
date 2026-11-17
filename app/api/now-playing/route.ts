import { getNowPlaying } from '../../../lib/spotify';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const result = await getNowPlaying();

    if (result.status === 204 || !result.data) {
      return NextResponse.json(
        {
          isPlaying: false,
          hasTrack: false,
          ...(result.error ? { error: result.error, status: result.status } : {}),
        },
        {
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate',
          },
        }
      );
    }

    const song = result.data;

    if (!song.item) {
      return NextResponse.json(
        { isPlaying: false, hasTrack: false },
        {
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate',
          },
        }
      );
    }

    const isPlaying = Boolean(song.is_playing);
    const isRecent = Boolean(result.isRecentFallback);
    const title = song.item.name;
    const artist = Array.isArray(song.item.artists)
      ? song.item.artists.map((_artist: any) => _artist.name).join(', ')
      : 'Spotify';
    const album = song.item.album?.name || '';
    const albumImageUrl = song.item.album?.images?.[0]?.url || '';
    const songUrl = song.item.external_urls?.spotify || '';
    const previewUrl = song.item.preview_url || null;

    return NextResponse.json(
      {
        album,
        albumImageUrl,
        artist,
        isPlaying,
        isRecent,
        hasTrack: true,
        songUrl,
        title,
        previewUrl,
      },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        isPlaying: false,
        hasTrack: false,
        error: err?.message || 'Unexpected error fetching Spotify status',
      },
      { status: 200 }
    );
  }
}
