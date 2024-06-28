<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="w-full flex flex-col gap-1 items-center justify-center">
    <h1 class="text-xl font-bold">{$page.status}</h1>
    <h2>{$page.error?.message}</h2>
</div>
