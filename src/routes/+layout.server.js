/*import cookie from "cookie";*/

export const load = async ({ request, setHeaders }) => {
    /*const cookies = cookie.parse(request.headers.get("cookie") || '');*/

    const currentlyPlaying = await fetch("https://api.nightmarebot.tk/spotify/playing").then((res) => res.json());

    return {
        currentlyPlaying: currentlyPlaying
    };
};
