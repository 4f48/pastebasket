<script lang="ts">
	import { Button } from '@/components/ui/button';
	import { Moon, Search, ShoppingBasket, Sun } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
</script>

<header class="h-12 w-full gap-4 bg-muted">
	<div class="mx-6 flex h-full items-center">
		<a href="/"
			><Button size="lg" variant="link" class="flex items-center gap-2 text-xl font-bold"
				><ShoppingBasket /> Pastebasket</Button
			></a
		>
		<div class="flex flex-1 items-center justify-end gap-2">
			<Button on:click={toggleMode} variant="ghost" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
			<a href="/search"><Button variant="ghost" size="icon"><Search size="18px" /></Button></a>
		</div>
	</div>
</header>
