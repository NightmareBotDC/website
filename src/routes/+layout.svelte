<script>
	import '../app.css';
	import Header from './components/Header.svelte';
        import navigating from "$app/navigation";
	export let data;
</script>

<Header User={data.user || null} />

<div class="p-3" />

{#if navigating}
   <h2 class="text-white">Loading...</h2>
{:else}
   <h2 class="text-white">Everything has loaded...</h2>
{/if}

<section id="content" class="m-4">
	<slot />
</section>
