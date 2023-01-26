<script lang="ts">
	import Meta from './components/Meta.svelte';
	import SongCard from './components/SongCard.svelte';

	export let data: any;
</script>

<Meta
	Title="Home"
	Description="Nightmare Bot is a personal assistant project that uses Artificial Intelligence and Machine Learning algorithms to solve problems."
/>

{#if data.currentlyPlaying.error && data.recentlyPlayed.error}
   <h2 class="text-white font-semibold">Sorry, there is no Entertainment-based content to display at this time.</h2>
{/if}

<div id="currentlyPlaying">
	{#if data.currentlyPlaying.error}{:else}
                <h2 class="text-white font-semibold">Currently Listening:</h2>

		<SongCard
			Title={data.currentlyPlaying.item.name}
			Album={data.currentlyPlaying.item.album.name}
			Artist={data.currentlyPlaying.item.artists[0].name}
			AlbumArt={data.currentlyPlaying.item.album.images[0].url}
			ArtistImage={data.currentlyPlaying.item.artistData.images[0].url}
			AlbumURL={data.currentlyPlaying.item.album.external_urls.spotify}
			ArtistURL={data.currentlyPlaying.item.artists[0].external_urls.spotify}
                        Current={true}
		/>
	{/if}
</div>

<div class="p-4"></div>

<div id="recentTracks">
    {#if data.recentlyPlayed.error}{:else}
             <h2 class="text-white font-semibold">Recent Tracks:</h2>

             {#each data.recentlyPlayed.items as item}
                  <SongCard
			Title={item.song.track.name}
			Album={item.song.track.album.name}
			Artist={item.song.track.artists[0].name}
			AlbumArt={item.song.track.album.images[0].url}
			ArtistImage={item.artistData.images[0].url}
			AlbumURL={item.song.track.album.external_urls.spotify}
			ArtistURL={item.song.track.artists[0].external_urls.spotify}
                        Current={false}
		  />

                  <div class="p-1"></div>
             {/each}
    {/if}
</div>
