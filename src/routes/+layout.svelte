<script>
	import '../app.css';
	import { Toaster } from '$lib/components/ui/sonner';

	import Header from '../components/header.svelte';
</script>

<Toaster />

<Header />
<slot />

<style></style>
