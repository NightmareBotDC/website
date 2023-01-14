<script lang="ts">
    export let data: any;
    data = data;
</script>

<div id="currentlyPlaying">
    <h2 class="text-white">Currently Playing:</h2>

    {#if data.currentlyPlaying.error}
        <h4 class="text-white">{data.currentlyPlaying.error}</h4>
    {:else}
        <img src={data.currentlyPlaying.item.album.images[0].url} />
        <h2 class="text-white">Title: {data.currentlyPlaying.item.name}</h2>
        <h3 class="text-white">Album: {data.currentlyPlaying.item.album.name}</h3>
        <h3 class="text-white">Artist(s): {data.currentlyPlaying.item.artists.map((artist: any) => { return artist.name }).join(", ")}</h3>
    {/if}
</div>
