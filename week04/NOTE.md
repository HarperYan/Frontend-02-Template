学习笔记

# 浏览器原理

解析HTTP请求 -> 获取HTML -> 生成DOM树 -> css computing生成DOM with CSS -> 布局生成DOM with postion -> 渲染生成bitmap 浏览器展示

## 有限状态机

每一个状态都是一个机器（纯函数）

每一个机器知道下一个状态
 - 每个机器都有确定的下一个状态（moore)
 - 每个机器根据输入决定下一个状态 (Mealy)

JS中有限状态机(Mealy)
function state(input) {
    // 返回新状态函数
    return next;
}

whilte(input) {
    state = state(input);
}

## HTTP请求 | HTTP的协议解析
ISO-OSI 七层网络协议
HTTP： 应用层协议
TCP 传输层协议
IP/ICMP 网络层协议
4G/5G/... 数据链路，物理层

TCP/IP 基础知识

- 软件通过端口号来定义从网卡抓取哪些包
- libnet(怎么发送包)
  libpcap(怎么抓取包)

  
## HTML解析 | 解析标签



