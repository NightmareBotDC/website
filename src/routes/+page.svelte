<script lang="ts">
	import Meta from './components/Meta.svelte';
        import SongCard from './components/SongCard.svelte';
	export let data: any;
</script>

<Meta
	Title="Home"
	Description="Nightmare Bot is a personal assistant project that uses Artificial Intelligence and Machine Learning algorithms to solve problems."
/>

<div id="currentlyPlaying">
	<h2 class="text-white">Currently Playing:</h2>

	{#if data.currentlyPlaying.error}
		<SongCard Title="Hammed Burger 🍔😢" Album="Hammed Burger 🍔😢 - Single" AlbumArt="/logo.png" Artists="selectdev" ArtistImage="https://cdn.discordapp.com/attachments/1050107293057962016/1064282078419623966/f93e074bf09e07e26150d0a43dc034b1.jpg" />
	{:else}
                <SongCard Title={data.currentlyPlaying.item.name} Album={data.currentlyPlaying.item.album.name} Artists={data.currentlyPlaying.item.artists
				.map((artist) => {
					return artist.name;
				})
				.join(', ')} AlbumArt={data.currentlyPlaying.item.album.images[0].url} ArtistImage={data.currentlyPlaying.item.artistData.images[0].url} />
	{/if}
</div>
