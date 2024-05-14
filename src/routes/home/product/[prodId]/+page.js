import { error } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */ export function load({ params }) {
	if (params.prodId) {
		return { title: 'Hello world!', content: params.prodId };
	}
	error(404, 'Not found');
}
