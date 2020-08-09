学习笔记

# 1. CSS总论 | CSS语法的研究

CSS:
- font properties rule
- text rule like emphasis
- background color
- simple styling rules for other basic elements
- simple selectors

CSS2:
- media type rules for page layout designing


CSS3:
- presentation style properties
- CSS rules can be split into multiple modules -> easier to maintain
- capabitily to use special font
- more flexible selectors: a sequence of simple selectors
- enhancement of web design considerations: add support for rounded border presentation
- capability to split text sections into multiple columns so that it can be read like a newspaper??

## CSS总体结构
• @charset
• @import
• rules
    @media
    @page
    rule

CSS规则分类:
    @rule: @charset @import @media @page ...
    rule

# 2. CSS总论 | CSS @规则的研究
一共有100多个@规则

• @charset ： https://www.w3.org/TR/css-syntax-3/
• @import ：https://www.w3.org/TR/css-cascade-4/
• @media ：https://www.w3.org/TR/css3-conditional/
• @page ： https://www.w3.org/TR/css-page-3/
• @counter-style ：https://www.w3.org/TR/css-counter-styles-3
• @keyframes ：https://www.w3.org/TR/css-animations-1/
• @fontface ：https://www.w3.org/TR/css-fonts-3/
• @supports ：https://www.w3.org/TR/css3-conditional/   不推荐使用supports属性检测css兼容性， 可以使用工程工具来使用polyfill
• @namespace ：https://www.w3.org/TR/css-namespaces-3/ 极端情况下作为补充使用

# 3. CSS规则的结构
 
 • Selector
    - https://www.w3.org/TR/selectors-3/  level3实现比较好
    - https://www.w3.org/TR/selectors-4/  level4标准制定途中
• Key
• Properties
• Variables: https://www.w3.org/TR/css-variables/  prefix with --
• Value
    - https://www.w3.org/TR/css-values-4/



# 4. CSS选择器

- 简单选择器
- 复合选择器

# 5. 伪类
为超链接等动作行为设计的伪类。不同浏览器效果不一样
:any-link：所有超链接
:link 未访问过的超链接
:visited 访问过的超链接


# 6. 伪元素
::before ::after 元素内容前后插入伪元素 （无中生有）
::first-line 选中第一行 ::first-letter 选中第一个字母 （选取特定元素）

## 为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？

first-letter在布局完成之后，确定了一段文字中的第一个文字，可以对其操作布局时性能开销小；
而first-line选中的是第一行文字，不同的宽度，不同浏览器选中的文字内容不一样，要对其重新布局排版消耗性能大,所以first-letter 可以设置 float 之类的，而 first-line 不行。
