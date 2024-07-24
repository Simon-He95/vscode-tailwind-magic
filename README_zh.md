<p align="center">
<img height="200" src="./assets/kv.png" alt="magic">
</p>
<p align="center"> <a href="./README.md">English</a> | 简体中文</p>

🌈 这个 vscode 插件是为了解决 tailwindcss 的语法使用的不便，他能给你带来极致的开发体验和开发效率。如果你使用 UnoCss 可以选择 [Unot](https://github.com/Simon-He95/unot).

[❓ 为什么推荐使用 Tailwind Magic](https://simonhe.me/posts/vscode-tailwind-magic-zh)

## 〽️ 建议
- 使用最新的vscode版本
- 如果自动更新后有异常，可以卸载重新安装一下
- 建议搭配[`totailwindcss`](https://github.com/Simon-He95/vscode-toTailwindcss)一起使用，totailwindcss是能够将浏览器的样式复制后直接输出为tailwindcss的语法到对应的位置的插件，并且能够hover原生的css提示对应tailwindcss的语法

![demo](assets/demo.gif)

## ✨ 暂时免费

- 由于之前的服务挂在 AirCode 上，现在 AirCode 不能使用了，计划在 2024年12月31日前，免费使用

## ~~💰 收费计划~~
- 目前插件需要激活码才可以正常运行

- 针对还没体验过的用户，可以在 [discord](https://discord.com/invite/ZnjxzMKWNW) 上找我获取一个月的免费体验资格

- ~~目前计划 9.9/月，100/年

- 任何插件上的 `bug` 或者 `suggestion` 都可以在 `discord` 上交流，也可以加我 wx：`www674949287`，拉你进 wx 群

## 💪 目前处理类型
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
- <500px:w10px -> min-[500px]:w-[10px]
- whfull -> w-full h-full

## 当你开启 `aggressiveMode` 时, 你可以得到下面的转换
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

## 当你开启 `attributifyMode`
- 你不在需要去用`-`拼接, 你可以直接在属性上写`bg#fff`,保存后会自动转换成`bg-[#fff]`- 你不在需要去用`-`拼接, 你可以直接在属性上写`bg#fff`,保存后会自动转换成`bg-[#fff]`

## 当你开启 `strictMode`
- 你必须要使用`-`去拼接

## 当你开启 `variantGroup`
- 你可以将`hover:(text-red bg-blue)`转换成`hover:text-red hover:bg-blue`

## 小细节
- flex-center -> flex justify-center items-center
- col -> flex flex-col
- pointer -> cursor-pointer
- pointer-none -> cursor-none
- `>500px` -> `max-[500px]`
- `<500px` -> `min-[500px]`
- 根据 row 或 col 使用 x-center 或 y-center
-  gridx4y4 -> grid-cols-4 grid-rows-4
-  bb#eee -> border-b-[#eee] border-b border
-  f400 -> font-400, f10px -> text-[10px]

## 自定义注入规则 `presets`

`tailwindMagic.presets` 支持自定义注入规则，你可以像下面这样设置自己希望的转换规则
```

[
  ["tnw", "text-no-wrap"]
]

```

## 参数配置
- 您可以使用配置来控制一些匹配规则，例如严格拆分，或者生成的计算结果是`-[10px]`或`-10px`
- attributifyMode 默认 true，开启tailwind 属性自动转换成class的能力，就像unocss的attributify的写法，保存后自动转换

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
      "description": "开启激进模式后，可以更加精简一些规则的写法，比如 t1 -> top-1"
    }
  }
}
```

## :coffee:

[请我喝一杯咖啡](https://github.com/Simon-He95/sponsor)
