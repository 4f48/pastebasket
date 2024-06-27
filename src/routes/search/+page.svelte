<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import Search from '../../components/forms/search.svelte';

	export let data: PageData;
	export let form: ActionData;
</script>

<Search data={data.form} />

{#if form?.results}
	{#each form.results as result}
		<div class="flex list-none gap-5">
			<li>{result.id}</li>
			<li>{result.title}</li>
			<li>{result.timestamp}</li>
		</div>
	{/each}
{/if}
