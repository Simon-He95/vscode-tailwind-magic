<p align="center">
<img height="200" src="./assets/kv.png" alt="magic">
</p>
<p align="center"> English | <a href="./README_zh.md">简体中文</a></p>

🌈 This vscode plug-in is to solve the inconvenience of the syntax of tailwindcss. It can bring you the ultimate development experience and development efficiency.

## ❓ Why use Tailwind Magic?

- Because when using tailwind css, you will use a lot of custom colors such as `rgb` or `#fff` or `calc`, which need to be written as `bg-[#fff]`, `w-[calc(100%-20px)] I think I will use `-, [,]` frequently. These three cases affect the efficiency, so I wrote this plug-in, which can help you automatically convert to `bg#fff`, `wcalc(100%-20px)`, so that you can focus on your business code. You don't have to go any more. Pay attention to these details.
- When we copy some styles from the browser's design draft, it has a space. You can't paste it directly into bg-[rgba(10, 20, 30)]. He can't be recognized by tailwind, so you need to manually remove the space. This plug-in can also Help you automatically remove the space, you just need to copy and paste it.
- The syntax of tailwind needs to be defined in class, but sometimes, I hope to write directly on attributes like UnoCss. This plug-in can support you to write on attributes. When you save it, it will be automatically converted to class, so that you can write more. It's convenient.

## 〽️ Suggestions

- Use the latest version of vscode
- If there is an abnormality after the automatic update, you can uninstall and reinstall it.
- It is recommended to use it with [`totailwindcss`](https://github.com/Simon-He95/vscode-toTailwindcss), which can use the browser After copying the style, it directly outputs the syntax of tailwindcss to the corresponding position of the plug-in, and can hover the native css prompt the corresponding syntax of tailwindcss.

![demo](assets/demo.gif)

## ✨ Temporarily free

- Since the previous service was hung on AirCode, AirCode is no available now. It is planned to be used for free before December 31, 2024.

## ~~💰 Charge plan~~
- At present, the plug-in requires an activation code to run normally.

- For users who haven't experienced it yet, you can find me on [discord](https://discord.com/invite/ZnjxzMKWNW) to get a one-month free experience qualification.

- Current plan 9.9/month, 100/year
- Any `bug` or `suggestion` on the plugin can be communicated on `discord`, or add me wx: `www674949287`, pull you into the wx group

## 💪 Current processing type
- calc
- rgb[a]
- px|rem|em|%|vw|vh
- simple preset
- w|h|gap|m|mt|mr|mb|ml|p|pt|pr|pb|pl|b|bt|br|bb|bl|lh|top|right|bottom|left
- w1! -> !w-1
- maxw10px -> max-w-[10px]
- gapx10px -> gap-x-[10px]
- translatex50% -> translate-x-[50%]
- -translatex50% -> -translate-x-[50%]
- text-\[red,hover:pink,2xl,lg:hover:3xl\] -> text-red hover:text-pink text-2xl lg:hover:text-3xl
- flex-center -> flex justify-center items-center
- col -> flex flex-col
- eclipse -> text-ellipsis whitespace-nowrap overflow-hidden
- pointer -> cursor-pointer
- ma -> m-auto
- text10rpx -> text-\[length:10rpx\]
- hover:(text-red bg-blue) -> hover:text-red hover:bg-blue
- \>500px:w10px -> max-[500px]:w-[10px]
- <500px:(w10px h20px) -> min-[500px]:w-[10px] min-[500px]:h-[20px]
- whfull -> w-full h-full

## Custom injection rules

`tailwindMagic.presets` supports custom injection rules. You can set the conversion rules you want as follows.

```

[
  ["Tnw", "text-no-wrap"]
]

```

## Configuration
- You can use config to control some matching rules, such as strict-splicing, or the generated calculation result is `-[10px]` or `-10px`
- attributifyMode defaults true, turn on the ability to automatically convert tailwind attributes into class, just like the writing of attributify of unuchs, which automatically converts after saving.

``` typescript
      "properties": {
        "tailwindMagic.variantGroup": {
          "type": "boolean",
          "default": true,
          "description": "Enable/disable transform hover:(x1 x2) to hover:x1 hover:x2"
        },
        "tailwindMagic.strictMode": {
          "type": "boolean",
          "default": false,
          "description": "if true bg#fff or bgrgba(0,0,0,.0) will transform bg-[#fff] or bg-[rgba(0,0,0,.0)]"
        },
        "tailwindMagic.attributifyMode": {
          "type": "boolean",
          "default": true,
          "description": "if true the attribute bg#fff will transform class=\"bg-[#fff]\""
        },
        "tailwindMagic.presets": {
          "type": "array",
          "default": [],
          "description": "set transform rules"
        },
        "tailwindMagic.code": {
          "type": "boolean",
          "default": "",
          "description": "activation code"
        },
        "tailwindMagic.aggressiveMode": {
          "type": "boolean",
          "default": false,
          "description": "After turning on aggressive mode, it will be more abbreviated, such as t1 -> top-1"
        }
      }
```

## :coffee:

[buy me a cup of coffee](https://github.com/Simon-He95/sponsor)

## License

[MIT](./license)
