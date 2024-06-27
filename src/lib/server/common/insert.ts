import { db } from '@/server/db/index';
import { baskets } from '@/server/db/schema';

export type Values = {
	title: string;
	content: string;
};

export async function paste(values: Values) {
	await db.insert(baskets).values({
		title: values.title,
		content: values.content
	});
}
