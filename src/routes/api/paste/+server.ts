import { paste, type Values } from '@/server/common/insert';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	let req: Values;
	try {
		req = await request.json();
	} catch (error) {
		return json({
			error: 'malformatted json body'
		});
	}

	if (!req.title || !req.content) {
		return json({
			error: 'missing field(s)',
			example_body: {
				title: 'foo',
				content: 'bar'
			}
		});
	}

	await paste({
		title: req.title,
		content: req.content
	});

	return json({ success: 'Successfully pasted your basket!' });
};
