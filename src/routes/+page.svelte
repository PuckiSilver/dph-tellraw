<script lang="ts">
    import { IconAlphabetLatin, IconBook2, IconBowl, IconFileZip, IconMenu, IconMountain, IconPalette, IconSword, IconZip } from "@tabler/icons-svelte";
    import {tippy} from 'svelte-tippy';
</script>

<main class="flex items-center w-full h-full">
    <main class="flex flex-col items-center space-y-4 w-full">
        <div class="flex items-center space-x-2">
            <img src="./dph.png" class="h-16" />
            <h1 class="text-5xl"><b>Datapack Hub</b> Tools</h1>
        </div>
        <p>Objectively the best collection of tools for Minecraft Datapacks and Resource Packs.</p> 
        <div>
            <p class="my-1 text-lg text-zinc-200">Popular Tools:</p>
            <div class="grid grid-cols-3 gap-2">
                <div class="card">
                    <IconAlphabetLatin size={35} class="text-blue-500 group-hover:text-blue-400 transition-all"/>
                    <div>
                        <h1 class="text-lg font-semibold">/tellraw Generator</h1>
                    </div>
                </div>
                <div class="card">
                    <IconBook2 size={35} class="text-blue-500 group-hover:text-blue-400 transition-all"/>
                    <div>
                        <h1 class="text-lg font-semibold">Book Generator</h1>
                    </div>
                </div>
                <div class="card">
                    <IconMountain size={35} class="text-green-600 group-hover:text-green-500 transition-all"/>
                    <div>
                        <h1 class="text-lg font-semibold">Biome Generator</h1>
                    </div>
                </div>
                <div class="card">
                    <IconSword size={35} class="text-rose-600 group-hover:text-rose-500 transition-all"/>
                    <div>
                        <h1 class="text-lg font-semibold">Loot Table Generator</h1>
                    </div>
                </div>
                <div class="card">
                    <IconPalette size={35} class="text-rose-600 group-hover:text-rose-500 transition-all"/>
                    <div>
                        <h1 class="text-lg font-semibold">Recipe Generator</h1>
                    </div>
                </div>
                <div class="card">
                    <IconFileZip size={35} class="text-rose-600 group-hover:text-rose-500 transition-all"/>
                    <div>
                        <h1 class="text-lg font-semibold">Template Generator</h1>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
</main>
