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
	{#if data.currentlyPlaying.error}
	{:else}
                <SongCard Title={data.currentlyPlaying.item.name} Album={data.currentlyPlaying.item.album.name} Artists={data.currentlyPlaying.item.artists
				.map((artist) => {
					return artist.name;
				})
				.join(', ')} AlbumArt={data.currentlyPlaying.item.album.images[0].url} ArtistImage={data.currentlyPlaying.item.artistData.images[0].url} />
	{/if}
</div>
