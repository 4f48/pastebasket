<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { Textarea } from '@/components/ui/textarea';
	import { toast } from 'svelte-sonner';
	import { formSchema, type FormSchema } from '@/forms/paste';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Button } from '@/components/ui/button';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		onUpdated: ({ form: f }) => {
			if (f.valid) {
				toast.success('Your basket was successfully pasted.');
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
			<Form.Label class="text-xl">New basket</Form.Label>
			<Input {...attrs} bind:value={$formData.title} placeholder="Title" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="content">
		<Form.Control let:attrs>
			<Textarea {...attrs} bind:value={$formData.content} />
		</Form.Control>
		<Form.Description
			>By pasting this basket you agree to the <a href="/legal/content"
				><Button size="sm" variant="link" class="m-0 p-0">content policy</Button></a
			>
			and the
			<a href="/legal/privacy"
				><Button size="sm" variant="link" class="m-0 p-0">privacy policy</Button></a
			>.</Form.Description
		>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Paste</Form.Button>
</form>
