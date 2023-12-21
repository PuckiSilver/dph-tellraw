<script lang="ts">
	import {
		IconBold,
		IconCheck,
		IconClick,
		IconDeviceFloppy,
		IconItalic,
		IconLanguage,
		IconMouse,
		IconPalette,
		IconSquareFilled,
		IconStrikethrough,
		IconUnderline,
	} from "@tabler/icons-svelte";
	import { tippy } from "svelte-tippy";

	let importText: string;
	let editBox: HTMLParagraphElement;
	let col: HTMLInputElement;

	function load() {
		editBox.innerHTML = "";
		var parsed = JSON.parse(importText) as Array<any>;
		console.log(parsed);

		parsed.forEach((item) => {
			if (item == "") return;
			if (item["text"] == undefined) return;
			var el = document.createElement("span");

			el.innerHTML = item["text"]
				.replace("\n", "<br />")
				.replace("\\n", "<br />");

			// Decoration
			el.style.textDecoration = "";
			if (item["bold"] == true) el.style.fontWeight = "700";
			if (item["underlined"] == true) el.style.textDecoration += "underline";
			if (item["italic"] == true) el.style.fontStyle = "italic";
			if (item["strikethrough"] == true)
				el.style.textDecoration += "line_through";

			// Color
			switch (item["color"]) {
				case "dark_red":
					el.style.color = "#AA0000";
					break;
				case "red":
					el.style.color = "#FF5555";
					break;
				case "gold":
					el.style.color = "#FFAA00";
					break;
				case "yellow":
					el.style.color = "#FFFF55";
					break;
				case "dark_green":
					el.style.color = "#00AA00";
					break;
				case "green":
					el.style.color = "#55FF55";
					break;
				case "aqua":
					el.style.color = "#55FFFF";
					break;
				case "dark_aqua":
					el.style.color = "#00AAAA";
					break;
				case "dark_blue":
					el.style.color = "#0000AA";
					break;
				case "blue":
					el.style.color = "#5555FF";
					break;
				case "light_purple":
					el.style.color = "#FF55FF";
					break;
				case "dark_purple":
					el.style.color = "#AA00AA";
					break;
				case "white":
					el.style.color = "#FFFFFF";
					break;
				case "gray":
					el.style.color = "#AAAAAA";
					break;
				case "dark_gray":
					el.style.color = "#555555";
					break;
				case "black":
					el.style.color = "#000000";
					break;
				default:
					el.style.color = item["color"];
			}
			editBox.appendChild(el);
		});
	}

	interface TextSection {
		text: string;
		styles: CSSStyleDeclaration;
	}

	function getAllTextSectionsWithStyles(
		node: Node,
		textSections: TextSection[] = [],
	): TextSection[] {
		if (node.nodeType === Node.TEXT_NODE) {
			// If the node is a text node, add its content and computed styles to the array
			const styles = window.getComputedStyle(node.parentElement!);
			textSections.push({
				text: node.textContent?.trim() || "",
				styles: styles,
			});
		} else if (node.nodeType === Node.ELEMENT_NODE) {
			// If the node is an element node, recursively check its children
			node.childNodes.forEach((child) => {
				getAllTextSectionsWithStyles(child, textSections);
			});
		}
		return textSections;
	}

	const rgba2hex = (rgba: string): string => {
		const match = rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
		if (!match) {
			throw new Error("Invalid RGBA string");
		}

		const [r, g, b] = match
			.slice(1)
			.map((n) => parseInt(n, 10).toString(16).padStart(2, "0"));
		return `#${r}${g}${b}`;
	};

	function generate() {
		var output: Array<any> = [""];
		const all = getAllTextSectionsWithStyles(editBox);
		for (var item of all) {
			let out = {};

			(out["text"] = item.text), (out["color"] = rgba2hex(item.styles.color));

			if (!item.styles.textDecoration.search("underline"))
				out["underlined"] = "true";
			if (!item.styles.textDecoration.search("line-through"))
				out["strikethrough"] = "true";

			output.push(out);
		}
		console.log(output);
	}

	function customColor() {
		editBox.focus();
		document.execCommand("foreColor", undefined, col.value);
	}

	function openColorPicker() {
		col.click();
	}
</script>

<main class="ml-auto mr-auto block">
	<div class="flex mb-1 space-x-4">
		<div class="flex">
			<button
				class="btn"
				on:click={() => document.execCommand("bold")}
				use:tippy={{ content: "Bold", placement: "bottom" }}
				><IconBold /></button>
			<button
				class="btn"
				on:click={() => document.execCommand("italic")}
				use:tippy={{ content: "Italic", placement: "bottom" }}
				><IconItalic /></button>
			<button
				class="btn"
				on:click={() => document.execCommand("underline")}
				use:tippy={{ content: "Underline", placement: "bottom" }}
				><IconUnderline /></button>
			<button
				class="btn"
				on:click={() => document.execCommand("strikethrough")}
				use:tippy={{ content: "Strikethrough", placement: "bottom" }}
				><IconStrikethrough /></button>
		</div>
		<div class="flex">
			<button
				use:tippy={{ content: "Dark Red", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#aa0000")}
				class="btn text-red-800"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "Red", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#FF5555")}
				class="btn text-red-500"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "Gold", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#FFAA00")}
				class="btn text-orange-600"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "Yellow", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#FFFF55")}
				class="btn text-yellow-500"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "Dark Green", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#00aa00")}
				class="btn text-green-700"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "Green", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#55ff55")}
				class="btn text-green-500"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "Aqua", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#55ffff")}
				class="btn text-teal-400"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "Dark Aqua", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#00aaaa")}
				class="btn text-teal-500"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "Dark Blue", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#0000aa")}
				class="btn text-blue-700"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "Blue", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#5555ff")}
				class="btn text-blue-500"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "Light Purple", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#ff55ff")}
				class="btn text-pink-500"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "Dark Purple", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#aa00aa")}
				class="btn text-purple-800"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "White", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#ffffff")}
				class="btn text-white"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "Gray", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#aaaaaa")}
				class="btn text-gray-400"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "Dark Gray", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#555555")}
				class="btn text-gray-600"><IconSquareFilled /></button>
			<button
				use:tippy={{ content: "Black", placement: "bottom" }}
				on:click={() => document.execCommand("foreColor", undefined, "#000000")}
				class="btn text-black"><IconSquareFilled /></button>
			<button
				on:click={openColorPicker}
				use:tippy={{ content: "Custom Colour", placement: "bottom" }}
				class="btn"><IconPalette /></button>
			<input
				type="color"
				id="col"
				name="col"
				value="#ff0000"
				class="w-0 invisible"
				on:input={customColor}
				bind:this={col} />
		</div>
		<div class="flex flex-grow">
			<button
				class="btn"
				use:tippy={{ content: "Click Event", placement: "bottom" }}
				><IconClick /></button>
			<button
				class="btn"
				use:tippy={{ content: "Hover Event", placement: "bottom" }}
				><IconMouse /></button>
			<button
				class="btn"
				use:tippy={{ content: "Translate Key", placement: "bottom" }}
				><IconLanguage /></button>
		</div>
		<div class="flex space-x-2">
			<button
				class="p-1 hover:bg-blue-500 rounded-md transition-all bg-blue-600 flex items-center space-x-1"
				><IconDeviceFloppy /></button>
			<button
				class="p-1 px-2 hover:bg-green-500 rounded-md transition-all bg-green-600 flex items-center space-x-1"
				on:click={generate}><IconCheck /><span>Generate</span></button>
		</div>
	</div>
	<div
		class="rounded-lg bg-zinc-800 px-3 py-2 font-minecraft h-96 text-lg overflow-y-auto w-full"
		contenteditable="true"
		bind:this={editBox}>
	</div>
	<div class="flex space-x-2 items-center mt-3">
		<input
			class="rounded-lg bg-zinc-800 px-3 py-2 font-minecraft flex-grow"
			placeholder="Import..."
			bind:value={importText} />
		<button
			class="rounded-md bg-orange-600 hover:bg-orange-500 transition-all px-3 py-2"
			on:click={load}>Import</button>
	</div>
</main>
