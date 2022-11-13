# live

学习总结

- webrtc 信令系统

### sdp 协议媒体协商进行通信，发起音视频通信，双方的 SDP 信息生成后，要通过信令服务器进行交换，从而达到媒体协商的目的。

### 信令服务器：信令既可以使用 TCP、 HTTP/HTTPS 传输，也可以用 WebSocket/WSS 协议传输，所以根据它使用的传输协议，你就可以很容易地想到，通过 Web 服务器（如 Nginx、Node.js）来构建我们的信令服务器是最理想、最省时的、且是最优的方案。

### Node.js 的工作原理核心是 V8 引擎。通过该引擎，可以让 JavaScript 调用 C/C++ 方法或对象。反过来讲，通过它也可以让 C/C++ 访问 JavaScript 方法和变量。Node.js 首先将 JavaScript 写好的应用程序交给 V8 引擎进行解析，V8 理解应用程序的语义后，再调用 Node.js 底层的 C/C++ API 将服务启动起来。所以 Node.js 的强大就在于 JavaScript 与 C/C++ 可以相互调用，从而达到使其能力可以无限扩展的效果。

### Socket.io 的使用除了 Node.js 外，我们最终还要借助 Socket.io 来实现 WebRTC 信令服务器。Socket.io 特别适合用来开发 WebRTC 的信令服务器，通过它来构建信令服务器大大简化了信令服务器的实现复杂度，这主要是因为它内置了房间的概念。

### socket.init 初始化

### 所有人发消息 socket.to

Socket.io 与 Node.js 配合使用的逻辑关系图，其逻辑非常简单。Socket.io 分为服务端和客户端两部分。服务端由 Node.js 加载后侦听某个服务端口，客户端要想与服务端相连，首先要加载 Socket.io 的客户端库，然后调用 io.connect();即可与服务端连接上。这里需要特别强调的是 Socket.io 消息的发送与接收。Socket.io 有很多种发送消息的方式，其中最常见的有下面几种，也是你必须要掌握的。

```js
socket.emit()
```

给某个房间内所有人发消息

```js
io.in(room).emit()
```

除本连接外，给某个房间内所有人发消息

```js
socket.broadcast.emit()
```
