<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>{data.response?.title}</h1>
<span>{data.response?.content}</span>
