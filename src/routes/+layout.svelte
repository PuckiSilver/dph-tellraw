<script>
	import { IconAlphabetLatin, IconBook2 } from "@tabler/icons-svelte";
import "../app.css";
import 'tippy.js/dist/tippy.css';
	import tippy from "tippy.js";
</script>

<div class="font-lexend bg-zinc-900 min-h-screen text-white p-3 h-screen">
    <div class="flex items-center space-x-2 mb-2 p-3 bg-zinc-950 rounded-lg">
        <div class="flex items-center space-x-2 flex-grow">
            <img src="/dph.png" class="h-8"/>
            <h1 class="text-2xl"><b>Datapack Hub</b> Tools</h1>
        </div>
        <a href="https://datapackhub.net" class="text-blue-300">To datapackhub.net -> </a>
    </div>
    <div class="flex space-x-2 flex-grow">
        <div class="flex flex-col space-y-2">
            <button class="p-2 bg-zinc-950 rounded-lg group" use:tippy={{content:"/tellraw generator", placement:"right",}}>
                <IconAlphabetLatin size={45} class="text-blue-500 group-hover:text-blue-400 transition-all"/>
            </button>
            <button class="p-2 bg-zinc-950 rounded-lg group" use:tippy={{content:"Book generator", placement:"right",}}>
                <IconBook2 size={45} class="text-blue-500 group-hover:text-blue-400 transition-all"/>
            </button>
        </div>
        <div class="bg-zinc-950 p-3 rounded-lg flex-grow">
            <slot />
        </div>
    </div>
    
    
    
</div>
