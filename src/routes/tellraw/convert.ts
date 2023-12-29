
type MinecraftTextComponent = {
    type?: "text" | "translatable" | "score" | "selector" | "keybind" | "nbt",
    nbt?: string,
    extra?: MinecraftTextComponent[],

    color?: string,
    font?: string,
    bold?: boolean,
    italic?: boolean,
    underlined?: boolean,
    strikethrough?: boolean,
    obfuscated?: boolean,

    insertion?: string,
    clickEvent?: {
        action: "open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard",
        value: string,
    },
    hoverEvent?: {
        action: "show_text" | "show_item" | "show_entity",
        contents: MinecraftTextComponent[] | MinecraftTextComponent | string | {
            id: string,
            count?: number,
            tag?: string,
        } | {
            type: string,
            id: string,
            name?: string,
        },
    },
};

type TextMinecraftTextComponent = MinecraftTextComponent & {
    text: string,
};

type TranslateMinecraftTextComponent = MinecraftTextComponent & {
    translate: string,
    fallback: string,
    with?: MinecraftTextComponent[],
};

type ScroreMinecraftTextComponent = MinecraftTextComponent & {
    score: {
        name: string,
        objective: string,
        value?: string,
    }
};

type selectorMinecraftTextComponent = MinecraftTextComponent & {
    selector: string,
    separator?: string,
};

type KeybindMinecraftTextComponent = MinecraftTextComponent & {
    keybind: string,
};

type NbtMinecraftTextComponent = MinecraftTextComponent & {
    source?: "block" | "entity" | "storage",
    nbt: string,
    interpret?: boolean,
    separator?: string
    block?: string,
    entity?: string,
    storage?:string,
};
