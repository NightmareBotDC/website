<script lang="ts">
	import '../app.css';
	import Header from './components/Header.svelte';
	import Status from './components/Status.svelte';

	export let data: any;
</script>

<Header User={data.user || null} />
<Status />

<div class="p-3" />

<section id="content" class="m-4">
	<slot />
</section>
