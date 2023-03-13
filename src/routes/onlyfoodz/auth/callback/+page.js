/** @type {import('./$types').PageLoad} */
export async function load({ request, cookies, url }) {
        const token = url.searchParams.get('token') || null;

	if (!token) return {
           dcToken: null
        };

	return {
           dcToken: token
        };
}
