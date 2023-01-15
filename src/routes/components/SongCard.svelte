<script lang="ts">
   export let Title: String;
   export let Album: String;
   export let Artists: String;
   export let AlbumArt: String;
   export let ArtistImage: String;
</script>

<div class="SongCard">
<div
	id={Title}
	class="p-6 max-w-sm bg-white rounded-md border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>
        <img class="rounded-half items-center" src={AlbumArt} height="120px" width="120px" alt="{Album} - Album Cover" />
	<h2 class="text-center text-2xl font-bold tracking-light text-gray-900 dark:text-white">{Title}</h2>

        <div class="p-2"></div>

        <div class="flex">
           <img class="h-8 rounded-full" src={ArtistImage} height="32px" width="32px" alt="Main Artist Image" />
	   <p class="ml-2 mt-3 mb-2 font-normal text-gray-700 dark:text-gray-400">{Artists}</p>
        </div>
</div>
</div>
