<p align="center">
<img height="200" src="./assets/kv.png" alt="magic">
</p>
<p align="center"> English | <a href="./README_zh.md">简体中文</a></p>

🌈 This vscode plug-in is to solve the inconvenience of the syntax of tailwindcss. It can bring you the ultimate development experience and development efficiency. If you use UnoCss, you can choose [Unot] (https://github.com/Simon-He95/unot).

In addition, if the third-party style you introduce is similar to tailwind syntax and there is a conflict, you may need to modify your current project to add `prefix`, and this plugin can detect whether `prefix` is added and automatically add it when saving.

Currently, this plugin has a [paid plan](#-charge-plan). If you haven’t tried it yet, you can find me on [discord](https://discord.com/invite/ZnjxzMKWNW) and get a one-month free trial.
[❓ Why is Tailwind Magic recommended](https://simonhe.me/posts/vscode-tailwind-magic)

## 🎉 Advantages
- You are not limited to using tailwindcss syntax in class or className, you can use it anywhere
- Extremely free mapping and abbreviation, but it will be converted back to tailwind syntax to ensure that the final code is in line with tailwindcss syntax and can be semantic
- It can automatically bring out the attributes that should be included, such as col -> flex flex-col, border#eee -> border-[#eee] border border-1, etc.
- It can use all the simple syntax of UnoCss, even simpler, such as `bg#fff` -> `bg-[#fff]`, and can also use `hover:(text-red bg-blue)` -> `hover:text-red hover:bg-blue` and other syntax

## 〽️ Suggestions

- Use the latest version of vscode
- If there is an abnormality after the automatic update, you can uninstall and reinstall it.
- It is recommended to use it with [`totailwindcss`](https://github.com/Simon-He95/vscode-toTailwindcss), which can use the browser After copying the style, it directly outputs the syntax of tailwindcss to the corresponding position of the plug-in, and can hover the native css prompt the corresponding syntax of tailwindcss.

![demo](assets/demo.gif)

## 💰 Charge plan

- [Sponsor](https://github.com/Simon-He95/sponsor) me by wechat or alipay, and I will give you more permissions and time to use your GitHub account
- For users who haven't experienced it yet, you can find me on [discord](https://discord.com/invite/ZnjxzMKWNW) to get a one-month free experience qualification.
- Current plan 15Yuan/month, 150Yuan/year
- Any `bug` or `suggestion` on the plugin can be communicated on `discord`, or add me wx: `simon_he95`, pull you into the wx group

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
- url(./a.png) -> bg-[url(./a.png)]

## When you enable `aggressiveMode`, you can get the following conversion
```json
{
  "tc": "text-center",
  "ts": "text-start",
  "te": "text-end",
  "tr": "text-right",
  "tl": "text-left",
  "tj": "text-justify",
  "tw": "text-wrap",
  "fs": "flex-start",
  "fe": "flex-end",
  "fb": "flex-between",
  "fev": "flex-evenly",
  "fa": "flex-around",
  "xs": "x-start",
  "xe": "x-end",
  "ys": "y-start",
  "ye": "y-end",
  "xc": "x-center",
  "yc": "y-center"
}
```

## When you enable `attributifyMode`
- You no longer need to use `-` to splice, you can write `bg#fff` directly on the attribute, and it will be automatically converted to `bg-[#fff]` after saving - You no longer need to use `-` to splice, you You can write `bg#fff` directly on the attribute, and it will be automatically converted to `bg-[#fff]` after saving.

## When you enable `strictMode`
- You must use `-` to splice

## When you enable `variantGroup`
- You can convert `hover:(text-red bg-blue)` to `hover:text-red hover:bg-blue`

## nitty gritty
- flex-center -> flex justify-center items-center
- col -> flex flex-col
- pointer -> cursor-pointer
- pointer-none -> cursor-none
- `>500px` -> `max-[500px]`
- `<500px` -> `min-[500px]`
- Use x-center or y-center based on row or col
- gridx4y4 -> grid-cols-4 grid-rows-4
- bb#eee -> border-b-[#eee] border-b border
- f400 -> font-400, f10px -> text-[10px]

## Custom injection rules `presets`

`tailwindMagic.presets` supports custom injection rules. You can set the conversion rules you want as follows.

```

[
  ["Tnw", "text-no-wrap"]
]

```

## Notes
- tailwind-magic will convert the properties of custom components, such as `block` in some `el-button`, you can skip these conversions through `skipMappings`, the rules are as follows:

```json
{
  "tailwindMagic.skipMappings": {
    "el-form": [
      "inline"
    ],
    "Form": [
      "inline"
    ],
    "el-table": [
      "border"
    ],
    "Table": [
      "border"
    ],
    "van-button": [
      "block"
    ]
  }
}
```

## Configuration
- You can use config to control some matching rules, such as strict-splicing, or the generated calculation result is `-[10px]` or `-10px`
- attributifyMode defaults true, turn on the ability to automatically convert tailwind attributes into class, just like the writing of attributify of unuchs, which automatically converts after saving.

``` json
{
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
}
```

## :coffee:

[buy me a cup of coffee](https://github.com/Simon-He95/sponsor)

## License

[MIT](./license)
