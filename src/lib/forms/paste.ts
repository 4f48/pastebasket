import { z } from 'zod';

export const formSchema = z.object({
	title: z.string().min(1).max(50),
	content: z.string().min(1).max(10000)
});

export type FormSchema = typeof formSchema;
