export function redirectUrlToSpotifyForLogin() {
	const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
	const REDIRECT_URI =
		process.env.NODE_ENV === 'production'
			? process.env.REACT_APP_SPOTIFY_PRODUCTION_REDIRECT_URI
			: process.env.REACT_APP_SPOTIFY_DEVELOPMENT_REDIRECT_URI;
	const scopes = [
		'user-read-private',
		'user-modify-playback-state',
		'playlist-modify-public'
	];
	return (
		'https://accounts.spotify.com/authorize?client_id=' +
		CLIENT_ID +
		'&redirect_uri=' +
		encodeURIComponent(REDIRECT_URI) +
		'&scope=' +
		encodeURIComponent(scopes.join(' ')) +
		'&response_type=token'
	);
}

export function checkUrlForSpotifyAccessToken() {
	const params = getHashParams();
	const accessToken = params.access_token;
	if (!accessToken) {
		return false;
	} else {
		return accessToken;
	}
}

export function getHashParams() {
	//helper function to parse the query string that Spotify sends back when you log in
	let hashParams = {};
	let e,
		r = /([^&;=]+)=?([^&;]*)/g,
		q = window.location.hash.substring(1);
	while ((e = r.exec(q))) {
		hashParams[e[1]] = decodeURIComponent(e[2]);
	}
	return hashParams;
}
