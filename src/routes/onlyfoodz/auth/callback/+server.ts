/** @type {import('./$types').PageLoad} */
export async function load({ request, cookies, url }) {
        const token = url.searchParams.get('token') || null;

	if (!token) throw error(400, 'No authentication token was passed with this request.');

	return {
           dcToken: token
        };
}
