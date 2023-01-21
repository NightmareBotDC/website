<script lang="ts">
   export let Title: String;
   export let Album: String;
   export let Artist: String;
   export let AlbumArt: String;
   export let ArtistImage: String;
   export let ArtistURL: String;
   export let AlbumURL: String;
   export let Player: String = "Spotify";
</script>

<div class="SongCard">
<div
	id={Title}
	class="max-w-sm bg-white rounded-md border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>
        <h2 class="pl-5 pt-4 font-normal text-gray-700 dark:text-gray-400">Currently Listening | {Player}</h2>

        <div class="p-6">
        <img class="mx-auto rounded-md" src={AlbumArt} height="120px" width="120px" alt="{Album} - Album Cover" />
	<h2 on:click={() => {window.location.href = AlbumURL}} class="text-center text-2xl font-semibold tracking-light text-gray-900 font-sans subpixel-antialiased dark:text-white">{Title}</h2>

        <div class="p-2"></div>

        <h2 class="flex" on:click={() => {window.location.href = ArtistURL}}>
           <img class="h-8 rounded-full" src={ArtistImage} height="30px" width="30px" alt="Main Artist Image" />
	   <p class="ml-2 mt-1 mb-1 font-normal text-gray-700 dark:text-gray-400">{Artist}</p>
        </h2>
</div>
</div>
</div>
