<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { formSchema, type FormSchema } from '@/forms/search';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance class="flex w-full justify-center gap-2">
	<Form.Field {form} name="title">
		<Form.Control let:attrs>
			<Input {...attrs} bind:value={$formData.title} placeholder="Search..." />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Search</Form.Button>
</form>
