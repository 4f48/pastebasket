<script lang="ts">
	import type { ActionData, PageData } from './$types.js';
	import Form from '../components/forms/paste.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>Pastebasket</title>
	<meta name="description" content="New basket on Pastebasket" />
</svelte:head>

<Form data={data.form} />
