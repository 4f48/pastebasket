import { z } from 'zod';

export const formSchema = z.object({
	title: z.string().min(1).max(50)
});

export type FormSchema = typeof formSchema;
