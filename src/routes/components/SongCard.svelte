<script lang="ts">
	export let Title: string;
	export let Album: string;
	export let Artist: string;
	export let AlbumArt: string;
	export let ArtistImage: string;
	export let ArtistURL: string;
	export let AlbumURL: string;
	export let Current: boolean;
	export let Player: string = 'Spotify';
</script>

<div class="SongCard">
	<div
		id={Title}
		class="max-w-sm bg-white rounded-md border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
	>
		<h2 class="pl-5 pt-4 font-normal text-gray-700 dark:text-gray-400">
			{Current ? 'Currently Listening' : 'Recent Track'} | {Player}
		</h2>

		<div class="p-6">
			<div
				on:click={() => {
					window.location.href = AlbumURL;
				}}
			>
				<img
					class="mx-auto rounded-md"
					src={AlbumArt}
					height="120px"
					width="120px"
					alt="{Album} - Album Cover"
				/>
				<h2
					class="text-center text-2xl font-semibold tracking-light text-gray-900 font-sans subpixel-antialiased dark:text-white"
				>
					{Title}
				</h2>
			</div>

			<div class="p-2" />

			<h2
				class="flex"
				on:click={() => {
					window.location.href = ArtistURL;
				}}
			>
				<img
					class="h-8 rounded-full"
					src={ArtistImage}
					height="30px"
					width="30px"
					alt="Main Artist Image"
				/>
				<p class="ml-2 mt-1 mb-1 font-normal text-gray-700 dark:text-gray-400">{Artist}</p>
			</h2>
		</div>
	</div>
</div>
