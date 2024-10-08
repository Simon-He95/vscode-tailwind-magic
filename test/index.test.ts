import { describe, expect, it } from 'vitest'
import { transform, transformClass, transformClassAttr, transformMultipleAttrs } from '../src/transform'

describe('should', () => {
  it('nax', () => {
    expect(transform('class="maxw10"')).toMatchInlineSnapshot(`"class="max-w-10""`)
  })

  it('size', () => {
    expect(transform('class="h-10 w-calc(100%-10px) max-w-1"')).toMatchInlineSnapshot(`"class="h-10 w-[calc(100%-10px)] max-w-1""`)
    expect(transform('class="wh10px!"')).toMatchInlineSnapshot(`"class="!w-[10px] !h-[10px]""`)
    expect(transform('class="wh10!"')).toMatchInlineSnapshot(`"class="!w-10 !h-10""`)
    expect(transform('class="h-var(--max-height,480px)"')).toMatchInlineSnapshot(`"class="h-[var(--max-height,480px)]""`)
    expect(transform('class="h-max(--max-height,480px)"')).toMatchInlineSnapshot(`"class="h-[max(--max-height,480px)]""`)
    expect(transform('class="h-[var(--max-heighth,480px)]"')).toMatchInlineSnapshot(`"class="h-[var(--max-heighth,480px)]""`)
    expect(transformClass('w-full h-[var(--max-heighth,480px)]', true, true)).toMatchInlineSnapshot('"w-full h-[var(--max-heighth,480px)]"')
  })

  it('pointer', () => {
    expect(transform('class="pointer pointer-none"')).toMatchInlineSnapshot(`"class="cursor-pointer pointer-events-none""`)
  })

  it('border', () => {
    expect(transform('class="brd-1"')).toMatchInlineSnapshot(`"class="rounded-1""`)
    expect(transform('class="rd2"')).toMatchInlineSnapshot(`"class="rounded-2""`)
    expect(transform('class="br1"')).toMatchInlineSnapshot(`"class="border-r""`)
    expect(transform('class="bl1"')).toMatchInlineSnapshot(`"class="border-l""`)
    expect(transform('class="bt1"')).toMatchInlineSnapshot(`"class="border-t""`)
    expect(transform('class="bb1"')).toMatchInlineSnapshot(`"class="border-b""`)
    expect(transform('class="bbred"')).toMatchInlineSnapshot(`"class="border-b-red border-b border-solid""`)
    expect(transform('class="border#fff"')).toMatchInlineSnapshot(`"class="border-[#fff] border border-solid""`)
    expect(
      transform('class="border#333"'),
    ).toMatchInlineSnapshot(`"class="border-[#333] border border-solid""`)
    expect(
      transform('class="border-solid"'),
    ).toMatchInlineSnapshot(`"class="border-solid""`)
    expect(transform('class="border-4"')).toMatchInlineSnapshot(`"class="border-4""`)
  })

  it('left', () => {
    expect(transform('class="-left-50%"')).toMatchInlineSnapshot(`"class="-left-[50%]""`)
  })

  it('duration', () => {
    expect(transform('class="duration0"')).toMatchInlineSnapshot(`"class="duration-0""`)
  })


  it('dark', () => {
    expect(transform('class="dark:w10"')).toMatchInlineSnapshot(`"class="dark:w-10""`)
    expect(transform('class="dark:md:hover:w10"')).toMatchInlineSnapshot(`"class="dark:md:hover:w-10""`)
  })

  it('position', () => {
    expect(transform('class="position-center"')).toMatchInlineSnapshot(`"class="absolute left-0 right-0 top-0 bottom-0""`)
  })
  it('hidden', () => {
    expect(transform('class="hidden!"')).toMatchInlineSnapshot(`"class="!hidden""`)
    expect(transform('class="x-hidden! y-hidden"')).toMatchInlineSnapshot(`"class="!overflow-x-hidden overflow-y-hidden""`)
  })

  it('translate', () => {
    expect(transform('class="-translate-x50%"')).toMatchInlineSnapshot(`"class="-translate-x-[50%]""`)
    expect(
      transform('class="-translatex10px"'),
    ).toMatchInlineSnapshot(`"class="-translate-x-[10px]""`)
    expect(
      transform('class="-translatex10px"'),
    ).toMatchInlineSnapshot(`"class="-translate-x-[10px]""`)
    expect(
      transform('class="-translatex-10px"'),
    ).toMatchInlineSnapshot(`"class="-translate-x-[10px]""`)
    expect(
      transform('class="-translatex-calc(100% - 20px)"'),
    ).toMatchInlineSnapshot(`"class="-translate-x-[calc(100%-20px)]""`)
    expect(
      transform('class="-translatexcalc(100% - 20px)"'),
    ).toMatchInlineSnapshot(`"class="-translate-x-[calc(100%-20px)]""`)
    expect(
      transform('class="-translatex50%"'),
    ).toMatchInlineSnapshot(`"class="-translate-x-[50%]""`)
    expect(
      transform('class="-tx50%"'),
    ).toMatchInlineSnapshot(`"class="-translate-x-[50%]""`)
    expect(
      transform('class="tx50%"'),
    ).toMatchInlineSnapshot(`"class="translate-x-[50%]""`)
    expect(
      transform('class="-ty50%!"'),
    ).toMatchInlineSnapshot(`"class="!-translate-y-[50%]""`)
  })

  it('eclipse', () => {
    expect(
      transform('class="eclipse"'),
    ).toMatchInlineSnapshot(`"class="truncate""`)
  })

  it('grid', () => {
    expect(
      transform('class="gridx4"'),
    ).toMatchInlineSnapshot(`"class="grid-row-4 grid grid-flow-col""`)
    expect(
      transform('class="gridy4"'),
    ).toMatchInlineSnapshot(`"class="grid-cols-4 grid grid-flow-row""`)
    expect(
      transform('class="gridy4x2"'),
    ).toMatchInlineSnapshot(`"class="grid-cols-2 grid-rows-4 grid""`)
  })

  it('m', () => {
    expect(transform('class="-ml10px! !w10"')).toMatchInlineSnapshot(`"class="!-ml-[10px] !w-10""`)
    expect(
      transform('class="ma mxa mya"'),
    ).toMatchInlineSnapshot(`"class="m-auto mx-auto my-auto""`)
  })

  it('text', () => {
    expect(
      transform('class="text-[red,hover:pink,2xl,lg:hover:3xl]"'),
    ).toMatchInlineSnapshot(`"class="text-red hover:text-pink text-2xl lg:hover:text-3xl""`)
    expect(
      transform('class="text-[rgba(1,1,1,1),hover:pink,2xl,lg:hover:3xl]"'),
    ).toMatchInlineSnapshot(`"class="text-[rgba(1,1,1,1)] hover:text-pink text-2xl lg:hover:text-3xl""`)
    expect(
      transform('class="text-18px"'),
    ).toMatchInlineSnapshot(`"class="text-[18px]""`)
    expect(
      transform('class="text16rpx w16rpx"'),
    ).toMatchInlineSnapshot(`"class="text-[length:16rpx] w-[16rpx]""`)
    expect(transform('class="text-18px text-1rem"')).toMatchInlineSnapshot(`"class="text-[18px] text-[1rem]""`)
    expect(transform('class="t#fff"')).toMatchInlineSnapshot(`"class="text-[#fff]""`)
    expect(transform('class="t#333"')).toMatchInlineSnapshot(`"class="text-[#333]""`)
  })

  it('bg', () => {
    expect(
      transform('class="bg#fff!"'),
    ).toMatchInlineSnapshot(`"class="!bg-[#fff]""`)
    expect(transform('class="bg-hsl(150 , 30% , 60% , 0.8)"')).toMatchInlineSnapshot(`"class="bg-[hsl(150,30%,60%,0.8)]""`)
    expect(transform('class="bg-rgba(150 30% 60% / 0.8)"')).toMatchInlineSnapshot(`"class="bg-[rgba(150,30%,60%,0.8)]""`)
    expect(
      transform('class="bg-rgba(1 2 3 / 40%)"'),
    ).toMatchInlineSnapshot(`"class="bg-[rgba(1,2,3,40%)]""`)
    expect(
      transform('class="b#fff"'),
    ).toMatchInlineSnapshot(`"class="border-[#fff] border border-solid""`)
    expect(
      transform('class="bg-[rgba(2,2,2,2]"'),
    ).toMatchInlineSnapshot(`"class="bg-[rgba(2,2,2,2]""`)
  })

  it('w', () => {
    expect(
      transform('class="w-rgba(1,1,1,1)"'),
    ).toMatchInlineSnapshot(`"class="w-[rgba(1,1,1,1)]""`)
    expect(
      transform('class="wfull!"'),
    ).toMatchInlineSnapshot(`"class="!w-full""`)
    expect(transform('class="w10!"')).toMatchInlineSnapshot(`"class="!w-10""`)
    expect(transform('class="w10px!"')).toMatchInlineSnapshot(`"class="!w-[10px]""`)
    expect(transform('class=" w-[calc(100%-20px)] "')).toMatchInlineSnapshot(`"class=" w-[calc(100%-20px)] ""`)
    expect(
      transform('class="w-[full,lg:50%,calc(10vw - 20px * 2px)]"'),
    ).toMatchInlineSnapshot(`"class="w-full lg:w-[50%] w-[calc(10vw-20px*2px)]""`)
  })

  it('-[a,b,c]', () => {
    expect(
      transform('class="text-[rgba(1,1,1,1),hover:pink,2xl,lg:hover:3xl]"'),
    ).toMatchInlineSnapshot(`"class="text-[rgba(1,1,1,1)] hover:text-pink text-2xl lg:hover:text-3xl""`)
  })

  it('brd', () => {
    expect(
      transform('class="brd32rpx"'),
    ).toMatchInlineSnapshot(`"class="rounded-[32rpx]""`)
  })

  it('bb', () => {
    expect(
      transform('class="bb#fff"'),
    ).toMatchInlineSnapshot(`"class="border-b-[#fff] border-b border-solid""`)
  })

  it('border-b', () => {
    expect(
      transform('class="border-b#eeee"'),
    ).toMatchInlineSnapshot(`"class="border-b-[#eeee] border-b border-solid""`)
  })

  it('wh', () => {
    expect(
      transform('class="whfull!"'),
    ).toMatchInlineSnapshot(`"class="!w-full !h-full""`)
    expect(
      transform('class="hover:(whfull!)"'),
    ).toMatchInlineSnapshot(`"class="!hover:w-full !hover:h-full""`)
  })

  it('flex-between', () => {
    expect(
      transform('class="flex-between"'),
    ).toMatchInlineSnapshot(`"class="flex justify-between""`)

    expect(
      transform('class="hover:(flex-between)"'),
    ).toMatchInlineSnapshot(`"class="hover:flex hover:justify-between""`)
  })

  it('flex', () => {
    expect(
      transform('class="children:(x-center)"'),
    ).toMatchInlineSnapshot(`"class="[&>*]:flex [&>*]:justify-center""`)

    expect(
      transform('class="flex1"'),
    ).toMatchInlineSnapshot(`"class="flex-1""`)

    expect(
      transform('class="x-center"'),
    ).toMatchInlineSnapshot(`"class="flex justify-center""`)
    expect(
      transform('class="y-center"'),
    ).toMatchInlineSnapshot(`"class="flex items-center""`)
    expect(
      transform('class="flex-col x-center"'),
    ).toMatchInlineSnapshot(`"class="flex flex-col items-center""`)
    expect(
      transform('class="flex-col y-center"'),
    ).toMatchInlineSnapshot(`"class="flex flex-col justify-center""`)
    expect(
      transform('class="x-start"'),
    ).toMatchInlineSnapshot(`"class="flex justify-start""`)
    expect(
      transform('class="y-start"'),
    ).toMatchInlineSnapshot(`"class="flex items-start""`)
    expect(
      transform('class="flex-col x-start"'),
    ).toMatchInlineSnapshot(`"class="flex flex-col items-start""`)
    expect(
      transform('class="flex-col y-start"'),
    ).toMatchInlineSnapshot(`"class="flex flex-col justify-start""`)
    expect(
      transform('class="flex-col xs"'),
    ).toMatchInlineSnapshot(`"class="flex flex-col items-start""`)
    expect(
      transform('class="flex-col ys"'),
    ).toMatchInlineSnapshot(`"class="flex flex-col justify-start""`)
    expect(
      transform('class="xc"'),
    ).toMatchInlineSnapshot(`"class="flex justify-center""`)
  })

  it('common', () => {
    expect(transform('class="bg#fff maxh10px minw10px"')).toMatchInlineSnapshot(`"class="bg-[#fff] max-h-[10px] min-w-[10px]""`)
    expect(
      transform(`class="bg#fff
                                  maxh10px
                                   minw10px"`),
    ).toMatchInlineSnapshot(`
      "class="bg-[#fff]
                                        max-h-[10px]
                                         min-w-[10px]""
    `)
    expect(transform('class="border1 bg-[rgba(0,0,0,0.8)]"')).toMatchInlineSnapshot(`"class="border bg-[rgba(0,0,0,0.8)]""`)
    expect(transform('class="z-[99] bg-[rgba(0,0,0,0.8)]   fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center"')).toMatchInlineSnapshot(`"class="z-[99] bg-[rgba(0,0,0,0.8)]   fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center""`)
    expect(transform('class="w10 font600 bg-rgba(0,0,0)"')).toMatchInlineSnapshot(`"class="w-10 font-semibold bg-[rgba(0,0,0)]""`)
    expect(
      transform('class="border-rgba(1,1,1,1)"'),
    ).toMatchInlineSnapshot(`"class="border-[rgba(1,1,1,1)] border border-solid""`)
    expect(
      transform('class="border-[rgba(1,1,1,1)] border-solid"'),
    ).toMatchInlineSnapshot(`"class="border-[rgba(1,1,1,1)] border border-solid""`)
    expect(
      transform('class="h-full text-[red,14px,dark:yellow]"'),
    ).toMatchInlineSnapshot(`"class="h-full text-red text-[14px] dark:text-yellow""`)
    expect(
      transform('class="h-full text-[red,14px,dark:#fff]"'),
    ).toMatchInlineSnapshot(`"class="h-full text-red text-[14px] dark:text-[#fff]""`)
    expect(
      transform('class="h-full text-[red,14px,dark:rgba(1,1,1,1)]"'),
    ).toMatchInlineSnapshot(`"class="h-full text-red text-[14px] dark:text-[rgba(1,1,1,1)]""`)
  })

  it('text + calc', () => {
    expect(
      transform('class="textcalc(100px - 20px)"'),
    ).toMatchInlineSnapshot(`"class="text-[calc(100px-20px)]""`)
  })

  it('space', () => {
    expect(
      transform('class="space-y-10px"'),
    ).toMatchInlineSnapshot(`"class="space-y-[10px]""`)
    expect(
      transform('class="spacex10px"'),
    ).toMatchInlineSnapshot(`"class="space-x-[10px]""`)
    expect(
      transform('class="sx10px"'),
    ).toMatchInlineSnapshot(`"class="space-x-[10px]""`)
    expect(
      transform('class="sy10px"'),
    ).toMatchInlineSnapshot(`"class="space-y-[10px]""`)
  })

  it('fill', () => {
    expect(
      transform('class="fill#fff"'),
    ).toMatchInlineSnapshot(`"class="fill-[#fff]""`)
  })
  it('stroke', () => {
    expect(
      transform('class="stroke#fff"'),
    ).toMatchInlineSnapshot(`"class="stroke-[#fff]""`)
  })
  it('aspect', () => {
    expect(
      transform('class="aspect16/9"'),
    ).toMatchInlineSnapshot(`"class="aspect-video""`)
  })

  it('translate + calc', () => {
    expect(
      transform('class="-translatex-calc(100% - 20px)"'),
    ).toMatchInlineSnapshot(`"class="-translate-x-[calc(100%-20px)]""`)
    expect(
      transform('class="-translatex-calc(100% - 20px)"'),
    ).toMatchInlineSnapshot(`"class="-translate-x-[calc(100%-20px)]""`)
    expect(
      transform('class="-translatex-[calc(100% - 20px)]"'),
    ).toMatchInlineSnapshot(`"class="-translate-x-[calc(100%-20px)]""`)
  })

  it('class with 10/5', () => {
    expect(
      transform('class="w10/5"'),
    ).toMatchInlineSnapshot(`"class="w-10/5""`)
  })

  it('bind class', () => {
    expect(
      transform(':class="[isFullScreen ? \'hfull\' : \'h400px\']"'),
    ).toMatchInlineSnapshot(`":class="[isFullScreen ? 'h-full' : 'h-[400px]']""`)
    expect(
      transform(':class="[item.type === \'warning\' ? \'text#eee\' : \'textrgb(127,127,127)\']"'),
    ).toMatchInlineSnapshot(`":class="[item.type === 'warning' ? 'text-[#eee]' : 'text-[rgb(127,127,127)]']""`)
    expect(
      transform(':class="[\'hcalc(100vh-104px)\']"'),
    ).toMatchInlineSnapshot(`":class="['h-[calc(100vh-104px)]']""`)
  })

  it('hover', () => {
    expect(transform('class="bg-[#333] w-full h-40 hover:bg-[#999] hover:(text20px text-[#123] font800)""')).toMatchInlineSnapshot(`"class="bg-[#333] w-full h-40 hover:bg-[#999] hover:text-[20px] hover:text-[#123] hover:font-extrabold"""`)
    expect(transform('class="hover:(bgrgba(1,2,3,.1),box-border)"')).toMatchInlineSnapshot(`"class="hover:bg-[rgba(1,2,3,.1)] hover:box-border""`)
    expect(transform('class="hover:w10"')).toMatchInlineSnapshot(`"class="hover:w-10""`)
    expect(
      transform(':class="hover:(text-white rounded)"'),
    ).toMatchInlineSnapshot(`":class="hover:text-white hover:rounded""`)
    expect(
      transform(':class="hover:bg-[#999]  hover:(font800 text-red)"'),
    ).toMatchInlineSnapshot(`":class="hover:bg-[#999]  hover:font-extrabold hover:text-red""`)
    expect(
      transform(':class="hover:(col) w10"'),
    ).toMatchInlineSnapshot(`":class="hover:flex hover:flex-col w-10""`)
    expect(
      transformClass(':class="hover:(w20px,h30px)"', true, true),
    ).toMatchInlineSnapshot(`":class="hover:w-[20px] hover:h-[30px]""`)
    expect(
      transformClass(':class="text-[red,hover:yellow]"', true, true),
    ).toMatchInlineSnapshot(`":class="text-red hover:text-yellow"`)
  })

  it('hover nested', () => {
    expect(
      transformClass('hover:(text-white rounded):focus:w20px'),
    ).toMatchInlineSnapshot(`"className="hover:text-white hover:rounded hover:focus:w-[20px]""`)
    expect(
      transformClass('hover:(text-white rounded):focus:checked:(w20px bg-red):tc'),
    ).toMatchInlineSnapshot(`"className="hover:text-white hover:rounded hover:focus:checked:w-[20px] hover:focus:checked:bg-red hover:focus:checked:text-center""`)
    expect(
      transformClass('hover:(text-white rounded):focus:checked:(w20px bg-red):print:(tc l20px)'),
    ).toMatchInlineSnapshot(`"className="hover:text-white hover:rounded hover:focus:checked:w-[20px] hover:focus:checked:bg-red hover:focus:checked:print:text-center hover:focus:checked:print:left-[20px]""`)
  })

  it('flex', () => {
    expect(
      transform(':class="flex-(center col)"'),
    ).toMatchInlineSnapshot(`":class="flex-(center col)""`)
  })

  it('xl:', () => {
    expect(
      transform(':class="xl:(flex-center)"'),
    ).toMatchInlineSnapshot(`":class="xl:flex xl:justify-center xl:items-center""`)
  })

  it('justify', () => {
    expect(
      transform(':class="justify-r"'),
    ).toMatchInlineSnapshot(`":class="flex justify-end""`)
    expect(
      transform(':class="justify-l"'),
    ).toMatchInlineSnapshot(`":class="flex justify-start""`)
  })

  it('from', () => {
    expect(
      transform('class="from10% from10 -from10% from--10%"'),
    ).toMatchInlineSnapshot(`"class="from-[10%] from-10 -from-[10%] -from-[10%]""`)
    expect(
      transform('class="w95% w-95% -w10% w95px"'),
    ).toMatchInlineSnapshot(`"class="w-[95%] w-[95%] -w-[10%] w-[95px]""`)
  })

  it('screen', () => {
    expect(
      transform('class=">500px:w-10px w-20px"'),
    ).toMatchInlineSnapshot(`"class="max-[500px]:w-[10px] w-[20px]""`)
    expect(
      transform('class="w10px >500px:w-10px w-20px"'),
    ).toMatchInlineSnapshot(`"class="w-[10px] max-[500px]:w-[10px] w-[20px]""`)
    expect(
      transform('class="hover:-translate-x-[50%] hover:-translate-y-[50%] >500px:bg#eee"'),
    ).toMatchInlineSnapshot(`"class="hover:-translate-x-[50%] hover:-translate-y-[50%] max-[500px]:bg-[#eee]""`)
    expect(
      transform('class="w10px <500px:w10px w-20px"'),
    ).toMatchInlineSnapshot(`"class="w-[10px] min-[500px]:w-[10px] w-[20px]""`)
    expect(
      transform('class="w10px md:w10px w-20px"'),
    ).toMatchInlineSnapshot(`"class="w-[10px] md:w-[10px] w-[20px]""`)
  })

  it('multiple attrs', () => {
    expect(
      transform('class="md:(w10px h20px)"'),
    ).toMatchInlineSnapshot(`"class="md:w-[10px] md:h-[20px]""`)
    expect(
      transform('class="hover:(text-red bg-blue)"'),
    ).toMatchInlineSnapshot(`"class="hover:text-red hover:bg-blue""`)
    expect(
      transform('className="hover:(text-red bg-blue)"'),
    ).toMatchInlineSnapshot(`"className="hover:text-red hover:bg-blue""`)
    expect(
      transformClass('hover:(text-red bg-blue)"'),
    ).toMatchInlineSnapshot(`"className="hover:text-red hover:bg-blue"""`)
    expect(
      transformClass('hover:(text-red bg-blue)',),
    ).toMatchInlineSnapshot(`"className="hover:text-red hover:bg-blue""`)
    expect(
      transformClass('md:(flex-center)', true, true),
    ).toMatchInlineSnapshot(`"md:flex md:justify-center md:items-center"`)
    expect(
      transformClass('<500px:(flex-center)', true, true),
    ).toMatchInlineSnapshot(`"min-[500px]:flex min-[500px]:justify-center min-[500px]:items-center"`)
    expect(
      transformClass('<500px:(border#eee)', true, true),
    ).toMatchInlineSnapshot(`"min-[500px]:border-[#eee] min-[500px]:border min-[500px]:border-solid"`)
  })

  it('columns', () => {
    expect(
      transform('class="col-1"'),
    ).toMatchInlineSnapshot(`"class="columns-1""`)
    expect(
      transform('class="col-1px"'),
    ).toMatchInlineSnapshot(`"class="columns-[1px]""`)
    expect(
      transform('class="col-1rem"'),
    ).toMatchInlineSnapshot(`"class="columns-[1rem]""`)
    expect(
      transform('class="col-1!"'),
    ).toMatchInlineSnapshot(`"class="!columns-1""`)
    expect(
      transform('class="col-1rem!"'),
    ).toMatchInlineSnapshot(`"class="!columns-[1rem]""`)
  })

  it('clip', () => {
    expect(
      transform('class="clip"'),
    ).toMatchInlineSnapshot(`"class="text-clip""`)
    expect(
      transform('class="clip-text"'),
    ).toMatchInlineSnapshot(`"class="bg-clip-text""`)
    expect(
      transform('class="clip-border"'),
    ).toMatchInlineSnapshot(`"class="bg-clip-border""`)
    expect(
      transform('class="clip-content!"'),
    ).toMatchInlineSnapshot(`"class="!bg-clip-content""`)
    expect(
      transform('class="clip-padding!"'),
    ).toMatchInlineSnapshot(`"class="!bg-clip-padding""`)
  })
})

describe('transformClassAttr', () => {
  it('transformClassAttr', async () => {
    expect(await transformClassAttr([{
      content: 'hover:(text-red bg-blue)',
      raw: 'hover:(text-red bg-blue)',
      line: 0,
      charater: 0,
      end: {
        column: 0,
        line: 0,
      },
      start: {
        column: 0,
        line: 0,
      },
    }])).toMatchInlineSnapshot(`
      [
        {
          "attrEnd": undefined,
          "attrStart": undefined,
          "content": "hover:text-red hover:bg-blue",
          "end": {
            "column": 0,
            "line": 0,
          },
          "node": undefined,
          "offset": 0,
          "raw": "hover:(text-red bg-blue)",
          "start": {
            "column": 0,
            "line": 0,
          },
        },
      ]
    `)
  })
})

describe('transformClass', () => {
  it('transformClass', () => {
    expect(transformClass('[\n        isDarkBg && \'bg-[#0A0B0D]\',\n        isSinglePage ? \'\' : \'pt-[64px]\',\n        isShowTabs && editableTabs.length > 0 ?\'mt40px\':\'\'\n      ]')).toMatchInlineSnapshot(`
      "[
              isDarkBg && 'bg-[#0A0B0D]',
              isSinglePage ? '' : 'pt-[64px]',
              isShowTabs && editableTabs.length > 0 ?'mt-[40px]':''
            ]"
    `)
    expect(transformClass('problem')).toMatchInlineSnapshot('"problem"')
    expect(transformClass('[x?\'m1\':\'item2\'] ')).toMatchInlineSnapshot('"[x?\'m-1\':\'item2\'] "')
  })
})


describe('aggressiveMode', () => {
  it('trlbfg', () => {
    expect(
      transform('class="t1"'),
    ).toMatchInlineSnapshot(`"class="top-1""`)
    expect(
      transform('class="r10px"'),
    ).toMatchInlineSnapshot(`"class="right-[10px]""`)
    expect(
      transform('class="b2em"'),
    ).toMatchInlineSnapshot(`"class="bottom-[2em]""`)
    expect(
      transform('class="t20px!"'),
    ).toMatchInlineSnapshot(`"class="!top-[20px]""`)
    expect(
      transform('class="l-1rem!"'),
    ).toMatchInlineSnapshot(`"class="!left-[1rem]""`)
    expect(
      transform('class="f200"'),
    ).toMatchInlineSnapshot(`"class="font-extralight""`)
    expect(
      transform('class="f16"'),
    ).toMatchInlineSnapshot(`"class="text-base""`)
    expect(
      transform('class="f15px"'),
    ).toMatchInlineSnapshot(`"class="text-[15px]""`)
    expect(
      transform('class="g1"'),
    ).toMatchInlineSnapshot(`"class="gap-1""`)
    expect(
      transform('class="gx1px"'),
    ).toMatchInlineSnapshot(`"class="gap-x-[1px]""`)
    expect(
      transform('class="gy1"'),
    ).toMatchInlineSnapshot(`"class="gap-y-1""`)
  })

  it('tc | tl | tr | te | tj | ts | tw | fs | fe | fb | fa | fev | fl | fr | fls | fle', () => {
    expect(
      transform('className={`w-full py-2 shrink-0 whitespace-nowrap text-ellipsis text-center ${tab === i ? \'bg-primary text-white\' : \'\'}`}'),
    ).toMatchInlineSnapshot('"className={`w-full py-2 shrink-0 whitespace-nowrap text-ellipsis text-center ${tab === i ? \'bg-primary text-white\' : \'\'}`}"')
    expect(
      transform('class="tc"'),
    ).toMatchInlineSnapshot(`"class="text-center""`)
    expect(
      transform('class="tl"'),
    ).toMatchInlineSnapshot(`"class="text-left""`)
    expect(
      transform('class="tr"'),
    ).toMatchInlineSnapshot(`"class="text-right""`)
    expect(
      transform('class="te"'),
    ).toMatchInlineSnapshot(`"class="text-end""`)
    expect(
      transform('class="tj"'),
    ).toMatchInlineSnapshot(`"class="text-justify""`)
    expect(
      transform('class="ts"'),
    ).toMatchInlineSnapshot(`"class="text-start""`)
    expect(
      transform('class="tw"'),
    ).toMatchInlineSnapshot(`"class="text-wrap""`)
    expect(
      transform('class="fs"'),
    ).toMatchInlineSnapshot(`"class="flex justify-start""`)
    expect(
      transform('class="fe"'),
    ).toMatchInlineSnapshot(`"class="flex justify-end""`)
    expect(
      transform('class="fs col"'),
    ).toMatchInlineSnapshot(`"class="flex items-start flex-col""`)
    expect(
      transform('class="fe flex-col"'),
    ).toMatchInlineSnapshot(`"class="items-end flex flex-col""`)
    expect(
      transform('class="fb"'),
    ).toMatchInlineSnapshot(`"class="flex justify-between""`)
    expect(
      transform('class="fa"'),
    ).toMatchInlineSnapshot(`"class="flex justify-around""`)
    expect(
      transform('class="fev"'),
    ).toMatchInlineSnapshot(`"class="flex justify-evenly""`)
    expect(
      transform('class="fl"'),
    ).toMatchInlineSnapshot(`"class="float-left""`)
    expect(
      transform('class="fr"'),
    ).toMatchInlineSnapshot(`"class="float-right""`)
    expect(
      transform('class="fls"'),
    ).toMatchInlineSnapshot(`"class="float-start""`)
    expect(
      transform('class="fle"'),
    ).toMatchInlineSnapshot(`"class="float-end""`)
  })

  it('wrap:', () => {
    expect(transform('class="hover:(wrap)"')).toMatchInlineSnapshot(`"class="hover:flex hover:flex-wrap""`)
  })

  it('bb$color:', () => {
    expect(transform('class="bb#eee"')).toMatchInlineSnapshot(`"class="border-b-[#eee] border-b border-solid""`)
    expect(transform('class="border-b#eee"')).toMatchInlineSnapshot(`"class="border-b-[#eee] border-b border-solid""`)
    expect(transform('class="border-b1"')).toMatchInlineSnapshot(`"class="border-b""`)
    expect(transform('class="br#eee"')).toMatchInlineSnapshot(`"class="border-r-[#eee] border-r border-solid""`)
  })

  it('should not work', () => {
    expect(transform('class="text-[1px_2px_1px_rgba(255,255,255,0.647058823529412)]"')).toMatchInlineSnapshot(`"class="text-[1px_2px_1px_rgba(255,255,255,0.647058823529412)]""`)
  })

  it('shadow', () => {
    expect(transform('class=" shadow-[0px_5px_10px_1px_rgba(1,1,1,1)]"')).toMatchInlineSnapshot(`"class=" shadow-[0px_5px_10px_1px_rgba(1,1,1,1)]""`)
  })

  it('object', () => {
    expect(
      transform('class="object50%20%"'),
    ).toMatchInlineSnapshot(`"class="object-[50%_20%]""`)
    expect(
      transform('class="object50%"'),
    ).toMatchInlineSnapshot(`"class="object-[50%]""`)
    expect(
      transform('class="object--50%"'),
    ).toMatchInlineSnapshot(`"class="object-[-50%]""`)
    expect(
      transform('class="object--50%-20%"'),
    ).toMatchInlineSnapshot(`"class="object-[-50%_-20%]""`)
    expect(
      transform('class="object--50%--20%"'),
    ).toMatchInlineSnapshot(`"class="object-[-50%_-20%]""`)
  })

  it('pseudoPrefix', () => {
    expect(
      transform('class="portrait:(tc w20px)"'),
    ).toMatchInlineSnapshot(`"class="portrait:text-center portrait:w-[20px]""`)
  })

  it('nth', () => {
    expect(
      transform('class="children:hover:(w20px bg-red-100)"'),
    ).toMatchInlineSnapshot(`"class="[&>*]:hover:w-[20px] [&>*]:hover:bg-red-100""`)
    expect(
      transform('class="first-child:w20px"'),
    ).toMatchInlineSnapshot(`"class="first:[&>*]:w-[20px]""`)
    expect(
      transform('class="last-child:w20px"'),
    ).toMatchInlineSnapshot(`"class="last:[&>*]:w-[20px]""`)
    expect(
      transform('class="child-(3n+1):w20px"'),
    ).toMatchInlineSnapshot(`"class="[&>*:nth-of-type(3n+1)]:w-[20px]""`)
  })

  it('left-group', () => {
    expect(
      transform('class="(first last):w20px (children hover):h20px"'),
    ).toMatchInlineSnapshot(`"class="first:w-[20px] last:w-[20px] [&>*]:h-[20px] hover:h-[20px]""`)
    expect(
      transform('class="(first last)-w20px (children hover)-h20px"'),
    ).toMatchInlineSnapshot(`"class="first-w-[20px] last-w-[20px] children-h-[20px] hover-h-[20px]""`)
  })

  it('clamp', () => {
    expect(
      transform('class="line3"'),
    ).toMatchInlineSnapshot(`"class="line-clamp-3 break-words""`)
  })

  it('outline', () => {
    expect(
      transform('class="outline#fff md:outline-solid"'),
    ).toMatchInlineSnapshot(`"class="outline-[#fff] md:outline-solid""`)
    expect(
      transform('class="outline-red"'),
    ).toMatchInlineSnapshot(`"class="outline-red outline""`)
  })

  it('special', () => {
    expect(
      transform('class="[&>*]:gap2"'),
    ).toMatchInlineSnapshot(`"class="[&>*]:gap-2""`)
    expect(
      transform('class="gx2"'),
    ).toMatchInlineSnapshot(`"class="gap-x-2""`)
  })
  it('transformMultipleAttrs', () => {
    expect(transformMultipleAttrs(' [&>*]:(flex justify-center)', true, )).toMatchInlineSnapshot(`" class="[&>*]:flex [&>*]:justify-center""`)
  })
})

