<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col gap-2">
	<h1 class="text-xl ml-2 font-bold">{data.response?.title}</h1>
	<div class="p-2 rounded-lg bg-muted">
		<span>{data.response?.content}</span>
	</div>
</div>


