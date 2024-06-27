import type { PageServerLoad } from './$types';
import { db } from '@/server/db';
import { baskets } from '@/server/db/schema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ params }) => {
	const response = await db.query.baskets.findFirst({
		where: eq(baskets.id, Number(params.id))
	});

	return { response };
};
