<script lang="ts">
	import '../app.css';
	import Header from './components/Header.svelte';
	import { BarLoader } from 'svelte-loading-spinners';

	let loading = true;
	setTimeout(() => {
		loading = false;
	}, 6000);

	export let data: any;
</script>

<Header User={data.user || null} />

<div class="p-3" />

{#if loading}
	<div class="m-4">
		<h2 class="text-white font-semibold">Loading...</h2>
		<BarLoader size="120" color="#FF3E00" unit="px" duration="1s" />
	</div>
{:else}
	<section id="content" class="m-4">
		<slot />
	</section>
{/if}
