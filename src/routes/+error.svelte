<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex w-full flex-col items-center justify-center gap-1">
	<h1 class="text-xl font-bold">{$page.status}</h1>
	<h2>{$page.error?.message}</h2>
</div>
