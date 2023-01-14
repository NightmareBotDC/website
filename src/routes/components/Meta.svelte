<script lang="ts">
	export let Title: string;
	export let Description: string;
	export let Image: string = '/favicon.png';
</script>

<svelte:head>
	<title>{Title}</title>
	<meta property="og:title" content={Title} />
	<meta property="og:site_name" content="Nightmare Project" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://nightmarebot.tk/" />
	<meta property="og:image" content={Image} />
	<meta property="og:description" content={Description} />
</svelte:head>
