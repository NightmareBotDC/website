<script lang="ts">
    const copyCmd = () => {
       const command = document.getElementById("cmd");
       command.select();
       command.setSelectionRange(0, 99999);
       navigator.clipboard.writeText(command.innerText);
       alert("Command copied to clipboard!");
    };

    export let data: any;
</script>

<h1 class="text-white font-bold">Instructions:</h1>
<p class="text-white">To finish logging into Onlyfoodz, you need to do one final step!</p>
<p class="text-white">Please run <span id="cmd" class="text-red-600 font-bold">/login token:{data.dcToken}</span> on Discord</p>

<div class="p-2"></div>

<button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" on:click={copyCmd}>Copy command</button>
