<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { Textarea } from '@/components/ui/textarea';
	import { toast } from 'svelte-sonner';
	import { formSchema, type FormSchema } from '@/forms/paste';
	import {
		type SuperValidated,
		type Infer,
		superForm,
		type FormResult
	} from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Button } from '@/components/ui/button';
	import type { ActionData } from './$types';
	import { goto } from '$app/navigation';
	import { ClipboardPaste } from 'lucide-svelte';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		onUpdate: ({ form: f, result: r }) => {
			const action = r.data as FormResult<ActionData>;

			if (f.valid && action.id) {
				toast.success('Your basket was successfully pasted.');
				setTimeout(() => goto(`/basket/${action.id}`), 1000);
			} else {
				toast.error('Something went wrong pasting your basket.');
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="title">
		<Form.Control let:attrs>
			<Input {...attrs} bind:value={$formData.title} id="title_input" placeholder="Title" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="content">
		<Form.Control let:attrs>
			<Textarea {...attrs} bind:value={$formData.content} />
		</Form.Control>
		<Form.Description
			>By pasting this basket you agree to the <a href="/legal/content"
				><Button size="sm" variant="link" class="m-0 p-0 font-bold">content policy</Button></a
			>
			and the
			<a href="/legal/privacy"
				><Button size="sm" variant="link" class="m-0 p-0 font-bold">privacy policy</Button></a
			>.</Form.Description
		>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button class="flex gap-2"><ClipboardPaste size="16px" />Paste</Form.Button>
</form>
