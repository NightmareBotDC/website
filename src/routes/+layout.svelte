<script>
	import '../app.css';
	import Header from './components/Header.svelte';
</script>

<header>
	<Header />
</header>

<section id="content" class="m-4">
	<slot />
</section>
