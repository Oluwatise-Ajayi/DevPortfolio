const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

const getAccessToken = async () => {
  if (!client_id || !client_secret || !refresh_token) {
    return { error: 'Missing Spotify environment variables' };
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }).toString(),
    cache: 'no-store',
  });

  const data = await response.json();
  if (!response.ok) {
    return { error: data?.error_description || data?.error || `Token HTTP ${response.status}` };
  }

  return data;
};

export const getNowPlaying = async () => {
  const tokenData = await getAccessToken();
  if (tokenData.error || !tokenData.access_token) {
    return { error: tokenData.error || 'Failed to obtain access token', status: 401 };
  }

  const { access_token } = tokenData;

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: 'no-store',
  });

  // If 204 (nothing currently active), try falling back to recently played if scope permits
  if (response.status === 204) {
    const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-store',
    });

    if (recentRes.ok) {
      const recentData = await recentRes.json();
      const recentTrack = recentData?.items?.[0]?.track;
      if (recentTrack) {
        return {
          status: 200,
          isRecentFallback: true,
          data: {
            is_playing: false,
            item: recentTrack,
          },
        };
      }
    }

    return { status: 204 };
  }

  if (!response.ok) {
    const errorText = await response.text().catch(() => '');
    return {
      status: response.status,
      error: errorText || `Spotify API returned HTTP ${response.status}`,
    };
  }

  const data = await response.json();
  return { status: 200, data };
};
