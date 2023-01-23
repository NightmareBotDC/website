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
	{#if data.currentlyPlaying.error}{:else}
		<SongCard
			Title={data.currentlyPlaying.item.name}
			Album={data.currentlyPlaying.item.album.name}
			Artist={data.currentlyPlaying.item.artists[0].name}
			AlbumArt={data.currentlyPlaying.item.album.images[0].url}
			ArtistImage={data.currentlyPlaying.item.artistData.images[0].url}
			AlbumURL={data.currentlyPlaying.item.album.external_urls.spotify}
			ArtistURL={data.currentlyPlaying.item.artists[0].external_urls.spotify}
		/>
	{/if}
</div>

<div id="recentlyPlayed">
    {#if data.recentlyPlayed.error}{:else}
             {#each data.recentlyPlayed.items as track}
                  <SongCard
			Title={track.song.item.name}
			Album={track.song.item.album.name}
			Artist={track.song.item.artists[0].name}
			AlbumArt={track.song.item.album.images[0].url}
			ArtistImage={track.artistData.images[0].url}
			AlbumURL={track.song.item.album.external_urls.spotify}
			ArtistURL={track.song.item.artists[0].external_urls.spotify}
		/>
             {/each}
    {/if}
</div>
