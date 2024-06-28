<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';

	import Header from '../components/header.svelte';
</script>

<ModeWatcher />
<Toaster />

<Header />
<div class="mx-5 mt-3">
	<slot />
</div>

<style></style>
