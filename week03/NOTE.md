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

## 宏任务 微任务

宏任务是给javascript引擎的任务， 微任务是promise产生的任务

Javascript引擎会拆分宏任务成为几个micro task(job

## 事件循环

获取代码 -> 执行 -> 等待锁（事件，时间）

## 声明

function, function*, async funtion, async function*, var: 可以在声明之前访问到

class, const, let: 声明前访问会报错

## 预处理

js引擎在代码执行前会对代码进行预处理操作 -> 预处理会找到所有var，把这个变量声明到函数的作用级别里， 无论在return后，catch,finally里

所有声明都有预处理机制，都能把变量变成局部变量。 区别是const声明是会在声明前使用变量的时候会报错。

## 作用域

const作用域是所在的花括号

var作用域是整个函数体

# 函数调用

javascript里每一个函数都会生成一个闭包
