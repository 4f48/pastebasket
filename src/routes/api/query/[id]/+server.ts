import type { RequestHandler } from '../$types';
import { db } from '@/server/db/index';
import { baskets } from '@/server/db/schema';
import { eq } from 'drizzle-orm';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const response = await db.query.baskets.findFirst({
		where: eq(baskets.id, params.id)
	});

	return json(response);
};
