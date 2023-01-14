<script lang="ts">
    import Meta from "./components/Meta.svelte";

    export let data: any;

    let artists: String;

    if (data.currentlyPlaying.error) artists = "";
    else artists = data.currentlyPlaying.item.artists.map((artist: any) => { return artist.name }).join(", ");
</script>


<Meta Title="Home" Description="Nightmare Bot is a personal assistant project that uses Artificial Intelligence and Machine Learning algorithms to solve problems." />

<div id="currentlyPlaying">
    <h2 class="text-black">Currently Playing:</h2>

    {#if data.currentlyPlaying.error}
        <h4 class="text-black">{data.currentlyPlaying.error}</h4>
    {:else}
        <img src={data.currentlyPlaying.item.album.images[0].url} />
        <h2 class="text-black">Title: {data.currentlyPlaying.item.name}</h2>
        <h3 class="text-black">Album: {data.currentlyPlaying.item.album.name}</h3>
        <h3 class="text-black">Artist(s): {artists}</h3>
    {/if}
</div>
