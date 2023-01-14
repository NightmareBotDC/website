<script>
	import '../app.css';
	import Header from './components/Header.svelte';

        export let data;
</script>

<header class="mt-4 ml-4">
	<Header />
</header>

<div class="p-3"></div>

<section id="content" class="m-4">
	<slot />
</section>
