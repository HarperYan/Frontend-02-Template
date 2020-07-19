学习笔记
# JS表达式 | 运算符和表达式
## 表达式
* Member
a.b

a[b]

foo`string`

super.b

super['b']

new.target

new Foo()

* New

new Foo

new a()() > new new a() 括号的new优先级大于new a

## Reference

Key + Object

Delete/Assign will manipulate reference.

## Call Expressions
点运算视前面的语法结构来决定自身优先级。 => 根据上下文判定优先级

## Expressions
Left Handside & Right Handside

Left-hand expression:
- Almost all lefthand expressions are righthand expressions.

Right-hand expression:
- Update expression, like a++m
- Unary Expression, like: delete a.b (has to be reference), void foo(), typeof a, +a, 
- Exponental ** （javascript中唯一一个右结合运算符）

# JS表达式 | 类型转换
优先推荐使用===， 因为==作比较会有类型转换。

## Unboxing
toPrimitive

toString vs valueOf 

Symbol.toPrimitive - highest priority

优先级depends on context, 加法会优先调用Symbol.toPrimitive， 然后valueof，然后toString
转number,先调用valueOf, 转string，先调用toString

## boxing
通过typeof区分这是包装后的对象还是包装前的值

# JS表达式 | 运行时相关概念

# JS表达式 | 简单语句和复合语句

## 简单语句
Expression Statement

Empty Statement

Debugger Statement

Throw Statement

Continue Statement

Break Statement

Return Statement

## 复合语句
Block Statement

If Statement

Switch Statement(not recommended in js)

Iteration Statement

With Statement

Labelled Statement

Try Statement

## Iteration

while()

do while()

for of

for in


try catch finally, try/catch中return了也会执行finally