import { describe, expect, it } from 'vitest'
import { transform, transformClass, transformClassAttr } from '../src/transform'

describe('should', () => {
  it('base', () => {
    expect(transform('class="w10 font600 bg-rgba(0,0,0)"')).toMatchInlineSnapshot('"class=\\"w-10 font-semibold bg-[rgba(0,0,0)]\\""')
  })
  it('nax', () => {
    expect(transform('class="max-w10"')).toMatchInlineSnapshot('"class=\\"max-w-10\\""')
  })
  it('base', () => {
    expect(transform('class="h-10 w-calc(100%-10px) max-w-1"')).toMatchInlineSnapshot('"class=\\"h-10 w-[calc(100%-10px)] max-w-1\\""')
    expect(transform('class="wh10px!"')).toMatchInlineSnapshot('"class=\\"!w-[10px] !h-[10px]\\""')
    expect(transform('class="wh10!"')).toMatchInlineSnapshot('"class=\\"!w-10 !h-10\\""')
  })
  it('pointer', () => {
    expect(transform('class="pointer pointer-none"')).toMatchInlineSnapshot('"class=\\"cursor-pointer pointer-events-none\\""')
  })
  it('border', () => {
    expect(transform('class="brd-1"')).toMatchInlineSnapshot('"class=\\"rounded-1\\""')
    expect(transform('class="br1"')).toMatchInlineSnapshot('"class=\\"border-r\\""')
    expect(transform('class="bl1"')).toMatchInlineSnapshot('"class=\\"border-l\\""')
    expect(transform('class="bt1"')).toMatchInlineSnapshot('"class=\\"border-t\\""')
    expect(transform('class="bb1"')).toMatchInlineSnapshot('"class=\\"border-b\\""')
  })
  it('left', () => {
    expect(transform('class="-left-50%"')).toMatchInlineSnapshot('"class=\\"-left-[50%]\\""')
  })
  it('translate', () => {
    expect(transform('class="-translate-x50%"')).toMatchInlineSnapshot('"class=\\"-translate-x-[50%]\\""')
  })
  it('border', () => {
    expect(transform('class="border#fff"')).toMatchInlineSnapshot('"class=\\"border-[#fff] border border-solid\\""')
  })
  it('duration', () => {
    expect(transform('class="duration0"')).toMatchInlineSnapshot('"class=\\"duration-0\\""')
  })
  it('base', () => {
    expect(transform('class="border1 bg-[rgba(0,0,0,0.8)]"')).toMatchInlineSnapshot('"class=\\"border bg-[rgba(0,0,0,0.8)]\\""')
  })
  it('base', () => {
    expect(transform('class="z-[99] bg-[rgba(0,0,0,0.8)]   fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center"')).toMatchInlineSnapshot('"class=\\"z-[99] bg-[rgba(0,0,0,0.8)]   fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center\\""')
  })
  it('hover', () => {
    expect(transform('class="hover:w10"')).toMatchInlineSnapshot('"class=\\"hover:w-10\\""')
  })
  it('dark', () => {
    expect(transform('class="dark:w10"')).toMatchInlineSnapshot('"class=\\"dark:w-10\\""')
  })
  it('dark', () => {
    expect(transform('class="dark:md:hover:w10"')).toMatchInlineSnapshot('"class=\\"dark:md:hover:w-10\\""')
  })
  it('w', () => {
    expect(transform('class="w10!"')).toMatchInlineSnapshot('"class=\\"!w-10\\""')
  })
  it('w', () => {
    expect(transform('class="w10px!"')).toMatchInlineSnapshot('"class=\\"!w-[10px]\\""')
  })
  it('m', () => {
    expect(transform('class="-ml10px! !w10"')).toMatchInlineSnapshot('"class=\\"!-ml-[10px] !w-10\\""')
  })
  it('position', () => {
    expect(transform('class="position-center"')).toMatchInlineSnapshot('"class=\\"left-0 right-0 top-0 bottom-0\\""')
  })
  it('hidden', () => {
    expect(transform('class="hidden!"')).toMatchInlineSnapshot('"class=\\"!hidden\\""')
  })
  it('text', () => {
    expect(transform('class="text-18px text-1rem"')).toMatchInlineSnapshot('"class=\\"text-[18px] text-[1rem]\\""')
  })
  it('base', () => {
    expect(transform('class="bg#fff maxh10px minw10px"')).toMatchInlineSnapshot('"class=\\"bg-[#fff] max-h-[10px] min-w-[10px]\\""')
  })
  it('base', () => {
    expect(
      transform(`class="bg#fff
                                  maxh10px
                                   minw10px"`)).toMatchInlineSnapshot(`
                                     "class=\\"bg-[#fff]
                                                                       max-h-[10px]
                                                                        min-w-[10px]\\""
                                   `)
  })
  it('translate', () => {
    expect(
      transform('class="-translatex50%"')).toMatchInlineSnapshot('"class=\\"-translate-x-[50%]\\""')
  })

  it('text', () => {
    expect(
      transform('class="text-18px"')).toMatchInlineSnapshot('"class=\\"text-[18px]\\""')
  })

  it('m', () => {
    expect(
      transform('class="ma mxa mya"')).toMatchInlineSnapshot('"class=\\"m-auto mx-auto my-auto\\""')
  })

  it('w', () => {
    expect(
      transform('class="w-rgba(1,1,1,1)"')).toMatchInlineSnapshot('"class=\\"w-[rgba(1,1,1,1)]\\""')
  })

  it('text', () => {
    expect(
      transform('class="text-[red,hover:pink,2xl,lg:hover:3xl]"')).toMatchInlineSnapshot('"class=\\"text-red hover:text-pink text-2xl lg:hover:text-3xl\\""')
  })

  it('text', () => {
    expect(
      transform('class="text-[rgba(1,1,1,1),hover:pink,2xl,lg:hover:3xl]"')).toMatchInlineSnapshot('"class=\\"text-[rgba(1,1,1,1)] hover:text-pink text-2xl lg:hover:text-3xl\\""')
  })
  it('bg', () => {
    expect(transform('class="bg-hsl(150 , 30% , 60% , 0.8)"')).toMatchInlineSnapshot('"class=\\"bg-[hsl(150,30%,60%,0.8)]\\""')
  })
  it('bg', () => {
    expect(transform('class="bg-rgba(150 30% 60% / 0.8)"')).toMatchInlineSnapshot('"class=\\"bg-[rgba(150,30%,60%,0.8)]\\""')
  })

  it('w', () => {
    expect(transform('class=" w-[calc(100%-20px)] "')).toMatchInlineSnapshot('"class=\\" w-[calc(100%-20px)] \\""')
  })
  it('-[a,b,c]', () => {
    expect(
      transform('class="text-[rgba(1,1,1,1),hover:pink,2xl,lg:hover:3xl]"')).toMatchInlineSnapshot('"class=\\"text-[rgba(1,1,1,1)] hover:text-pink text-2xl lg:hover:text-3xl\\""')
  })
  it('bg', () => {
    expect(
      transform('class="bg-[rgba(2,2,2,2]"')).toMatchInlineSnapshot('"class=\\"bg-[rgba(2,2,2,2]\\""')
  })
  it('w', () => {
    expect(
      transform('class="w-[full,lg:50%,calc(10vw - 20px * 2px)]"')).toMatchInlineSnapshot('"class=\\"w-full lg:w-[50%] w-[calc(10vw-20px*2px)]\\""')
  })
  it('text', () => {
    expect(
      transform('class="text16rpx w16rpx"')).toMatchInlineSnapshot('"class=\\"text-[length:16rpx] w-[16rpx]\\""')
  })
  it('brd', () => {
    expect(
      transform('class="brd32rpx"')).toMatchInlineSnapshot('"class=\\"rounded-[32rpx]\\""')
  })
  it('flex', () => {
    expect(
      transform('class="flex1"')).toMatchInlineSnapshot('"class=\\"flex-1\\""')
  })
  it('bb', () => {
    expect(
      transform('class="bb#fff"')).toMatchInlineSnapshot('"class=\\"border-b-[#fff] border-transparent\\""')
  })
  it('border-b', () => {
    expect(
      transform('class="border-b#eeee"')).toMatchInlineSnapshot('"class=\\"border-b-[#eeee]\\""')
  })
  it('bg', () => {
    expect(
      transform('class="bg#fff!"')).toMatchInlineSnapshot('"class=\\"!bg-[#fff]\\""')
  })
  it('w', () => {
    expect(
      transform('class="wfull!"')).toMatchInlineSnapshot('"class=\\"!w-full\\""')
  })
  it('wh', () => {
    expect(
      transform('class="whfull!"')).toMatchInlineSnapshot('"class=\\"!w-full !h-full\\""')
  })
  it('base', () => {
    expect(
      transform('class="flex-between"')).toMatchInlineSnapshot('"class=\\"justify-between\\""')
  })
  it('base', () => {
    expect(
      transform('class="x-center"')).toMatchInlineSnapshot('"class=\\"justify-center\\""')
    expect(
      transform('class="y-center"')).toMatchInlineSnapshot('"class=\\"items-center\\""')
    expect(
      transform('class="flex-col x-center"')).toMatchInlineSnapshot('"class=\\"flex flex-col items-center\\""')
    expect(
      transform('class="flex-col y-center"')).toMatchInlineSnapshot('"class=\\"flex flex-col justify-center\\""')
  })
  it('base', () => {
    expect(
      transform('class="border-rgba(1,1,1,1)"')).toMatchInlineSnapshot('"class=\\"border-[rgba(1,1,1,1)] border border-solid\\""')
  })
  it('base', () => {
    expect(
      transform('class="border-[rgba(1,1,1,1)] border-solid"')).toMatchInlineSnapshot('"class=\\"border-[rgba(1,1,1,1)] border border-solid\\""')
  })
  it('base', () => {
    expect(
      transform('class="h-full text-[red,14px,dark:yellow]"')).toMatchInlineSnapshot('"class=\\"h-full text-red text-[14px] dark:text-yellow\\""')
  })
  it('base', () => {
    expect(
      transform('class="h-full text-[red,14px,dark:#fff]"')).toMatchInlineSnapshot('"class=\\"h-full text-red text-[14px] dark:text-[#fff]\\""')
  })
  it('base', () => {
    expect(
      transform('class="h-full text-[red,14px,dark:rgba(1,1,1,1)]"')).toMatchInlineSnapshot('"class=\\"h-full text-red text-[14px] dark:text-[rgba(1,1,1,1)]\\""')
  })
  it('border', () => {
    expect(
      transform('class="border-solid"')).toMatchInlineSnapshot('"class=\\"border-solid\\""')
  })
  it('border', () => {
    expect(
      transform('class="border#333"')).toMatchInlineSnapshot('"class=\\"border-[#333] border border-solid\\""')
  })
  it('text + calc', () => {
    expect(
      transform('class="textcalc(100px - 20px)"')).toMatchInlineSnapshot('"class=\\"text-[calc(100px-20px)]\\""')
  })
  it('space', () => {
    expect(
      transform('class="spacex10px"')).toMatchInlineSnapshot('"class=\\"space-x-[10px]\\""')
  })
  it('space', () => {
    expect(
      transform('class="space-y-10px"')).toMatchInlineSnapshot('"class=\\"space-y-[10px]\\""')
  })
  it('fill', () => {
    expect(
      transform('class="fill#fff"')).toMatchInlineSnapshot('"class=\\"fill-[#fff]\\""')
  })
  it('stroke', () => {
    expect(
      transform('class="stroke#fff"')).toMatchInlineSnapshot('"class=\\"stroke-[#fff]\\""')
  })
  it('aspect', () => {
    expect(
      transform('class="aspect16/9"')).toMatchInlineSnapshot('"class=\\"aspect-video\\""')
  })
  it('translate', () => {
    expect(
      transform('class="-translatex10px"')).toMatchInlineSnapshot('"class=\\"-translate-x-[10px]\\""')
  })
  it('translate', () => {
    expect(
      transform('class="-translatex10px"')).toMatchInlineSnapshot('"class=\\"-translate-x-[10px]\\""')
  })
  it('translate + calc', () => {
    expect(
      transform('class="-translatex-calc(100% - 20px)"')).toMatchInlineSnapshot('"class=\\"-translate-x-[calc(100%-20px)]\\""')
  })
  it('translate + calc', () => {
    expect(
      transform('class="-translatex-calc(100% - 20px)"')).toMatchInlineSnapshot('"class=\\"-translate-x-[calc(100%-20px)]\\""')
  })
  it('translate + calc', () => {
    expect(
      transform('class="-translatex-[calc(100% - 20px)]"')).toMatchInlineSnapshot('"class=\\"-translate-x-[calc(100%-20px)]\\""')
  })
  it('translate', () => {
    expect(
      transform('class="-translatex-10px"')).toMatchInlineSnapshot('"class=\\"-translate-x-[10px]\\""')
  })
  it('translate', () => {
    expect(
      transform('class="-translatex-calc(100% - 20px)"')).toMatchInlineSnapshot('"class=\\"-translate-x-[calc(100%-20px)]\\""')
  })
  it('translate', () => {
    expect(
      transform('class="-translatexcalc(100% - 20px)"')).toMatchInlineSnapshot('"class=\\"-translate-x-[calc(100%-20px)]\\""')
  })
  it('class with 10/5', () => {
    expect(
      transform('class="w10/5"')).toMatchInlineSnapshot('"class=\\"w-10/5\\""')
  })
  it('bind class', () => {
    expect(
      transform(':class="[isFullScreen ? \'hfull\' : \'h400px\']"')).toMatchInlineSnapshot('":class=\\"[isFullScreen ? \'h-full\' : \'h-[400px]\']\\""')
  })
  it('bind class', () => {
    expect(
      transform(':class="[item.type === \'warning\' ? \'text#eee\' : \'textrgb(127,127,127)\']"')).toMatchInlineSnapshot('":class=\\"[item.type === \'warning\' ? \'text-[#eee]\' : \'text-[rgb(127,127,127)]\']\\""')
  })
  it('calc', () => {
    expect(
      transform(':class="[\'hcalc(100vh-104px)\']"')).toMatchInlineSnapshot('":class=\\"[\'h-[calc(100vh-104px)]\']\\""')
  })
  it('hover', () => {
    expect(
      transform(':class="hover:(text-white rounded)"')).toMatchInlineSnapshot('":class=\\"hover:text-white hover:rounded\\""')
  })
  it('hover', () => {
    expect(
      transform(':class="hover:(flex-center col) w10"')).toMatchInlineSnapshot('":class=\\"hover:flex hover:justify-center hover:items-center hover:flex flex-col w-10\\""')
  })
  it('flex', () => {
    expect(
      transform(':class="flex-(center col)"')).toMatchInlineSnapshot('":class=\\"flex-(center col)\\""')
  })
  it('hover', () => {
    expect(
      transformClass('hover:(w20px,h30px)')).toMatchInlineSnapshot('"hover:w-[20px] hover:h-[30px]"')
    expect(
      transformClass('text-[red,hover:yellow]')).toMatchInlineSnapshot('"text-red hover:text-yellow"')
  })

  it('xl:', () => {
    expect(
      transform(':class="xl:flex-center"')).toMatchInlineSnapshot('":class=\\"xl:flex xl:justify-center xl:items-center\\""')
  })

  it('justify', () => {
    expect(
      transform(':class="justify-r"')).toMatchInlineSnapshot('":class=\\"justify-end\\""')
    expect(
      transform(':class="justify-l"')).toMatchInlineSnapshot('":class=\\"justify-start\\""')
  })

  it('from', () => {
    expect(
      transform('class="from10% from10 -from10% from--10%"')).toMatchInlineSnapshot('"class=\\"from-[10%] from-10 -from-[10%] -from-[10%]\\""')
  })
  it('from', () => {
    expect(
      transform('class="w95% w-95% -w10% w95px"')).toMatchInlineSnapshot('"class=\\"w-[95%] w-[95%] -w-[10%] w-[95px]\\""')
  })
  it('screen', () => {
    expect(
      transform('class=">500px:w-10px w-20px"')).toMatchInlineSnapshot('"class=\\"max-[500px]:w-[10px] w-[20px]\\""')
    expect(
      transform('class="w10px >500px:w-10px w-20px"')).toMatchInlineSnapshot('"class=\\"w-[10px] max-[500px]:w-[10px] w-[20px]\\""')
    expect(
      transform('class=" >500px:w-10px w-20px"')).toMatchInlineSnapshot('"class=\\" max-[500px]:w-[10px] w-[20px]\\""')
    expect(
      transform('class="w10px <500px:w10px w-20px"')).toMatchInlineSnapshot('"class=\\"w-[10px] min-[500px]:w-[10px] w-[20px]\\""')
    expect(
      transform('class="w10px md:w10px w-20px"')).toMatchInlineSnapshot('"class=\\"w-[10px] md:w-[10px] w-[20px]\\""')
  })

  it('multiple attrs', () => {
    expect(
      transform('class="md:(w10px h20px)"')).toMatchInlineSnapshot('"class=\\"md:w-[10px] md:h-[20px]\\""')
    expect(
      transform('class="hover:(text-red bg-blue)"')).toMatchInlineSnapshot('"class=\\"hover:text-red hover:bg-blue\\""')
    expect(
      transform('className="hover:(text-red bg-blue)"')).toMatchInlineSnapshot('"className=\\"hover:text-red hover:bg-blue\\""')
    expect(
      transformClass('hover:(text-red bg-blue)"')).toMatchInlineSnapshot('"hover:text-red hover:bg-blue\\""')
    expect(
      transformClass('hover:(text-red bg-blue)')).toMatchInlineSnapshot('"hover:text-red hover:bg-blue"')
    expect(
      transformClass('md:(flex-center)')).toMatchInlineSnapshot('"md:flex md:justify-center md:items-center"')
    expect(
      transformClass('<500px:(flex-center)')).toMatchInlineSnapshot('"min-[500px]:flex min-[500px]:justify-center min-[500px]:items-center"')
    expect(
      transformClass('<500px:(border#eee)')).toMatchInlineSnapshot('"min-[500px]:border-[#eee] min-[500px]:border min-[500px]:border-solid"')
  })

  it('columns', () => {
    expect(
      transform('class="col-1"')).toMatchInlineSnapshot('"class=\\"columns-1\\""')
    expect(
      transform('class="col-1px"')).toMatchInlineSnapshot('"class=\\"columns-[1px]\\""')
    expect(
      transform('class="col-1rem"')).toMatchInlineSnapshot('"class=\\"columns-[1rem]\\""')
    expect(
      transform('class="col-1!"')).toMatchInlineSnapshot('"class=\\"!columns-1\\""')
    expect(
      transform('class="col-1rem!"')).toMatchInlineSnapshot('"class=\\"!columns-[1rem]\\""')
  })

  it('clip', () => {
    expect(
      transform('class="clip"')).toMatchInlineSnapshot('"class=\\"text-clip\\""')
    expect(
      transform('class="clip-text"')).toMatchInlineSnapshot('"class=\\"bg-clip-text\\""')
    expect(
      transform('class="clip-border"')).toMatchInlineSnapshot('"class=\\"bg-clip-border\\""')
    expect(
      transform('class="clip-content!"')).toMatchInlineSnapshot('"class=\\"!bg-clip-content\\""')
    expect(
      transform('class="clip-padding!"')).toMatchInlineSnapshot('"class=\\"!bg-clip-padding\\""')
  })
})

describe('transformClassAttr', () => {
  it('transformClassAttr', async () => {
    expect(await transformClassAttr([{
      content: 'hover:(text-red bg-blue)',
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
          "content": "hover:text-red hover:bg-blue",
          "end": {
            "column": 0,
            "line": 0,
          },
          "node": undefined,
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
  })
})

describe('transformClass', () => {
  it('transformClass', () => {
    expect(transformClass('problem')).toMatchInlineSnapshot('"problem"')
  })
  it('transformClass', () => {
    expect(transformClass('[x?\'m1\':\'item2\'] ')).toMatchInlineSnapshot('"[x?\'m-1\':\'item2\'] "')
  })
})
