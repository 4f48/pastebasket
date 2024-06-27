import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from '@/forms/search';

import { db } from '@/server/db';
import { eq } from 'drizzle-orm';
import { baskets } from '@/server/db/schema';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		// implement search later
		const results = await db.query.baskets.findMany({
			limit: 20,
			where: eq(baskets.listed, true)
		});

		return { form, results };
	}
};