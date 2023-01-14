<script>
	import '../app.css';
	import Header from './components/Header.svelte';

        export let data;
</script>

<Header User={data.user || null} />

<div class="p-3"></div>

<section id="content" class="m-4">
	<slot />
</section>
