<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { Textarea } from '@/components/ui/textarea';
	import { toast } from 'svelte-sonner';
	import { formSchema, type FormSchema } from '@/forms/paste';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

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
			<Form.Label>Title</Form.Label>
			<Input {...attrs} bind:value={$formData.title} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="content">
		<Form.Control let:attrs>
			<Form.Label>Content</Form.Label>
			<Textarea {...attrs} bind:value={$formData.content} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>
