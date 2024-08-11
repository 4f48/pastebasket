<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import Search from '../../components/forms/search.svelte';

	import * as Table from '$lib/components/ui/table';
	import { goto } from '$app/navigation';

	export let data: PageData;
	export let form: ActionData;
</script>

<svelte:head>
	<title>Search on Pastebasket</title>
	<meta name="description" content="Search for baskets on Pastebasket" />
</svelte:head>

<Search data={data.form} />

{#if form?.results}
	{#if form.results.length != 0}
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-10">Id</Table.Head>
					<Table.Head>Title</Table.Head>
					<Table.Head class="text-right">Pasted at</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each form.results as result}
					{#if result.listed}
						<Table.Row
							class="cursor-pointer"
							role="link"
							aria-label="open this basket"
							on:click={() => {
								goto(`/basket/${result.id}`);
							}}
						>
							<Table.Cell class="w-10">{result.id}</Table.Cell>
							<Table.Cell>{result.title}</Table.Cell>
							<Table.Cell class="text-right font-mono"
								>{result.timestamp.toLocaleDateString()}
								{result.timestamp.toLocaleTimeString([], {
									hour: '2-digit',
									minute: '2-digit'
								})}</Table.Cell
							>
						</Table.Row>
					{/if}
				{/each}
			</Table.Body>
		</Table.Root>
	{:else}
		<h1 class="mt-3 text-center text-lg font-bold">No baskets match this search.</h1>
	{/if}
{/if}
