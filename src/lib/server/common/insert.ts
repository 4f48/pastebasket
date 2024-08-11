import { db } from '@/server/db/index';
import { baskets } from '@/server/db/schema';

export type Values = {
	title: string;
	content: string;
};

export async function paste(values: Values): Promise<number> {
	const id = await db
		.insert(baskets)
		.values({
			title: values.title,
			content: values.content
		})
		.returning({ insertedId: baskets.id });

	return id[0].insertedId;
}
