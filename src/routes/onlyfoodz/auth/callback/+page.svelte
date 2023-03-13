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

<button on:click={copyCmd}>Copy command</button>
