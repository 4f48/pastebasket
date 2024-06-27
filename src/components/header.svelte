<script lang="ts">
	import { Button } from "@/components/ui/button";
	import { Search, ShoppingBasket } from "lucide-svelte";
</script>

<header class="flex w-full gap-4 bg-muted items-center">
	<a href="/"><Button size="lg" variant="link" class="font-bold text-xl flex gap-2 items-center"><ShoppingBasket /> Pastebasket</Button></a>
	<div class="flex flex-1 justify-end"><a href="/search"><Button variant="link" size="icon"><Search size="18px" /></Button></a></div>
</header>
