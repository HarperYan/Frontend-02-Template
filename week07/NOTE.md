学习笔记

# 1. CSS排版 | 盒
 
CSS选择器选中的是元素或者伪元素

CSS选中的元素， 排版时可能有多个盒

排版和渲染的基本单位是盒

box-sizing:
 - content-box: content width
 - border-box: padding + content width

# 2. CSS排版 | 正常流

CSS排版：
    - 正常流
    - flex
    - grid

IFC: Inline formating context
BFC: Block level formating context

盒会影响line top和line bottom, 但是不会影响text-top. text-bottom

行内盒的基线是随着盒内文字变化的

# 4. CSS排版 | 正常流的块级排布

float元素实际是脱离正常流的， 但是依附正常流的排版

float会影响自己高度所在范围内行盒的宽度

float not recognize <br>

margin collapse边距折叠只会发生在BFC里

# CSS排版 | BFC合并

Block
 * block container: 里面有BFC的
    能容纳正常流的盒，里面就有BFC  block,inline-block, table-cell, flex item, grid cell, table caption
    table row 不是正常流，因为里面是table cell
    display = flex 的不是正常流，但是里面的flex item是正常流
    所有能容纳不是特殊display模式的，他里面就是正常流
 * Block-level box: 外面有BFC
    block-level:
        display: block
        display: flex
        display: table
        display: grid
    inline-level:
        display: inline-block
        display: inline-flex
        display: inline-table
        display: inline-grid


 * Block Box = Block container + block level box 里外都有bfc

 设立BFC

 * float
 * absolute positioned elements
 * block containers(inline block) that are not block boxes.
    - flex item
    - grid cell
 * block boxes with 'overflow' other than 'visible'

 BFC合并

 * block box && overflow:not visible
    - BFC合并与float
    - BFC合并与边距折叠

# CSS排版 | Flex排版

1. 收集盒进行
2. 计算盒在主轴方向的排布
    - 找出所有flex元素（这些元素宽度不固定）
    - 把主轴方向的剩余尺寸按比例分配给这些元素
    - 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素
3. 计算盒在交叉轴方向的排布
    - 根据每一行最大元素尺寸计算行高
    - 根据行高flex-align和item-align,确定元素具体位置

# CSS动画与绘制 | 动画

Animation

* @keyframe定义
* animation使用

# CSS动画与绘制 | 绘制

- 几何图形
   border
   box-shadow
   border-radius
- 文字
    font
    text-decoration
- 位图
    background-image


