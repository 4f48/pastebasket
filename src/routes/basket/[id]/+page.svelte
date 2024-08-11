<script lang="ts">
	import type { PageData } from './$types';
	import { Link } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.response?.title} on Pastebasket</title>
	<meta name="description" content="Learn more about {data.response?.title} on Pastebasket" />
</svelte:head>

<div class="flex flex-col gap-2">
	<div class="flex items-center gap-3">
		<h1 class="ml-2 text-xl font-bold">{data.response?.title}</h1>
		<button
			title="Copy link"
			class="cursor-pointer"
			on:click={() => {
				navigator.clipboard.writeText(window.location.href);
				toast.info('Copied link to clipboard.');
			}}
			><Link
				size="16px"
				class="text-[#458588] duration-500 hover:text-[#076678] dark:text-[#458588] dark:hover:text-[#83a598]"
			/></button
		>
	</div>
	<div class="rounded-lg bg-muted p-2">
		<span>{data.response?.content}</span>
	</div>
</div>
