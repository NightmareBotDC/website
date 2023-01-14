<script lang="ts">
    import Header from "./components/Header.svelte";

    export let data: any;

    let artists: String;

    if (data.currentlyPlaying.error) artists = "";
    else artists = data.currentlyPlaying.item.artists.map((artist: any) => { return artist.name }).join(", ");
</script>


<Header Title="Home" Description="Nightmare Bot is a personal assistant project that uses Artificial Intelligence and Machine Learning algorithms to solve problems." User={data.user} />

<div id="currentlyPlaying">
    <h2 class="text-white">Currently Playing:</h2>

    {#if data.currentlyPlaying.error}
        <h4 class="text-white">{data.currentlyPlaying.error}</h4>
    {:else}
        <img src={data.currentlyPlaying.item.album.images[0].url} />
        <h2 class="text-white">Title: {data.currentlyPlaying.item.name}</h2>
        <h3 class="text-white">Album: {data.currentlyPlaying.item.album.name}</h3>
        <h3 class="text-white">Artist(s): {artists}</h3>
    {/if}
</div>
