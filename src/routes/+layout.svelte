<script>
	import '../app.css';
	import Header from './components/Header.svelte';
        import { BarLoader } from 'svelte-loading-spinners';

        let loading = true;
        setTimeout(() => { loading = false }, 5000);

        export let data;
</script>

<Header User={data.user || null} />

<div class="p-3" />

{#if loading}
   <BarLoader size="60" color="#FF3E00" unit="px" duration="5s" />
{:else}
   <section id="content" class="m-4">
	<slot />
   </section>
{/if}
