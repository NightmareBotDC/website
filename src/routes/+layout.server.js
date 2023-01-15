import cookie from 'cookie';

export const load = async ({ request, setHeaders }) => {
	const cookies = cookie.parse(request.headers.get('cookie') || '');

	const currentlyPlaying = await fetch('https://api.nightmarebot.tk/api/spotify/playing').then(
		(res) => res.json()
	);

	if (cookies.token) {
		const userData = await fetch(
			`https://api.nightmarebot.tk/api/users/getwithtoken?token=${cookies.token}`
		)
			.then((res) => res.json())
			.catch((err) => {
				throw new Error(err);
			});

		if (userData.error)
			return {
				user: null,
				currentlyPlaying: currentlyPlaying
			};
		else
			return {
				user: userData,
				currentlyPlaying: currentlyPlaying
			};
	} else
		return {
			user: null,
			currentlyPlaying: currentlyPlaying
		};
};
