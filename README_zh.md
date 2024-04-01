<p align="center">
<img height="200" src="./assets/kv.png" alt="magic">
</p>
<p align="center"> <a href="./README.md">English</a> | 简体中文</p>

🌈 这个vscode插件是为了解决tailwindcss的语法使用的不便，他能给你带来极致的开发体验和开发效率。

## ❓ 为什么要用Tailwind Magic
- 因为在使用tailwind css时候会大量使用到 一些自定义的颜色比如`rgb`或者`#fff`或者`calc`等等，这些需要写成`bg-[#fff]`、`w-[calc(100%-20px)]`，我觉得会频繁使用到`-、[、]`，这三个案件时很影响效率的，所以我写了这个插件，他能帮你自动转换成`bg#fff`、`wcalc(100%-20px)`，这样你就可以专注于你的业务代码了，不用再去关注这些细节了。
- 当我们从浏览器的设计稿去复制一些样式的时候他时带有空格的，你没有办法直接粘贴到bg-[rgba(10, 20, 30)]，他是没办法被tailwind识别的，所以你需要去手动去掉空格，这个插件也能帮你自动去掉空格，你只需要复制粘贴就可以了。
- tailwind的语法是需要在class中定义的，但是有些时候，我希望像UnoCss一样可以直接写在属性上，这个插件能够支持你写在属性上，当你保存的时候，自动转换成class，这样你写起来就更加的方便了。

## 〽️ 建议
- 使用最新的vscode版本
- 如果自动更新后有异常，可以卸载重新安装一下
- 建议搭配[`totailwindcss`](https://github.com/Simon-He95/vscode-toTailwindcss)一起使用，totailwindcss是能够将浏览器的样式复制后直接输出为tailwindcss的语法到对应的位置的插件，并且能够hover原生的css提示对应tailwindcss的语法

![demo](assets/demo.gif)

## 💰 收费计划
- 目前插件需要激活码才可以正常运行

- 针对还没体验过的用户，可以在 [discord](https://discord.com/invite/ZnjxzMKWNW) 上找我获取一个月的免费体验资格

- 目前计划 9.9/月，100/年

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

## 自定义注入规则

`tailwindMagic.presets` 支持自定义注入规则，你可以像下面这样设置自己希望的转换规则
```

[
  ["tnw", "text-no-wrap"]
]

```

## 参数配置
- 您可以使用配置来控制一些匹配规则，例如严格拆分，或者生成的计算结果是`-[10px]`或`-10px`
- attributifyMode 默认 true，开启tailwind 属性自动转换成class的能力，就像unocss的attributify的写法，保存后自动转换

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
          "description": "开启激进模式后，可以更加精简一些规则的写法，比如 t1 -> top-1"
        }
      }
```

## :coffee:

[请我喝一杯咖啡](https://github.com/Simon-He95/sponsor)
