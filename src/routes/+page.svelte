<script lang="ts">
	import type { PageData } from './$types.js';
	import Form from '../components/forms/paste.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Search, ClipboardPaste } from 'lucide-svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>Pastebasket</title>
	<meta name="description" content="New basket on Pastebasket" />
</svelte:head>

<section class="flex justify-evenly">
	<div class="w-[50%] self-center">
		<h1 class="text-3xl font-bold">Easy and reliable text sharing</h1>
		<p class="mb-2 w-[60%] text-justify">
			Share your stuff with other people <b class="font-semibold"
				>all around the world effortlessly, for free</b
			>. No account required. A public API is also available for developers to
			<b class="font-semibold">paste programmatically</b>.
		</p>
		<div class="flex gap-2">
			<a href="/search"><Button class="flex gap-2"><Search size="16px" />Search baskets</Button></a>
			<Button
				variant="secondary"
				class="flex gap-2"
				on:click={() => {
					document.getElementById('title_input')?.focus();
				}}><ClipboardPaste size="16px" />Try pasting</Button
			>
		</div>
	</div>
	<div class="w-[50%]">
		<h2 class="mb-3 text-xl font-bold">Don't believe me? Try it!</h2>
		<Form data={data.form} />
	</div>
</section>
