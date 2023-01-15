<script lang="ts">
	import Meta from './components/Meta.svelte';

	export let data: any;
</script>

<Meta
	Title="Home"
	Description="Nightmare Bot is a personal assistant project that uses Artificial Intelligence and Machine Learning algorithms to solve problems."
/>

<div id="currentlyPlaying">
	<h2 class="text-white">Currently Playing:</h2>

	{#if data.currentlyPlaying.error}
		<h4 class="text-white">{data.currentlyPlaying.error}</h4>
	{:else}
		<img
			src={data.currentlyPlaying.item.album.images[0].url}
			alt="{data.currentlyPlaying.item.album.name} album cover"
		/>
		<h2 class="text-white">Title: {data.currentlyPlaying.item.name}</h2>
		<h3 class="text-white">Album: {data.currentlyPlaying.item.album.name}</h3>
		<h3 class="text-white">
			Artist(s): {data.currentlyPlaying.item.artists
				.map((artist) => {
					return artist.name;
				})
				.join(', ')}
		</h3>
	{/if}
</div>
