## fetch

[Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

Fetch API 提供了一个 JavaScript 接口，用于访问和操纵 HTTP 管道的部分，例如请求和响应。它还提供了一个全局 fetch()方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。这种功能以前是使用 XMLHttpRequest 实现的。Fetch 提供了一个更好的替代方法，可以很容易地被其他技术使用，例如 Service Workers。Fetch 还提供了单个逻辑位置来定义其他 HTTP 相关概念，例如 CORS 和 HTTP 的扩展。请注意，fetch 规范与 jQuery.ajax()主要有两种方式的不同，牢记：当接收到一个代表错误的 HTTP 状态码时，从 fetch()返回的 Promise 不会被标记为 reject， 即使该 HTTP 响应的状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。默认情况下，fetch 不会从服务端发送或接收任何 cookies, 如果站点依赖于用户 session，则会导致未经认证的请求（要发送 cookies，必须设置 credentials 选项）。自从 2017 年 8 月 25 日后，默认的 credentials 政策变更为 same-originFirefox 也在 61.0b13 中改变默认值

#### 进行 fetch 请求

```bash
  fetch('http://example.com/movies.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
```

#### 支持的请求参数

```bash
    postData('http://example.com/answer', {answer: 42})
      .then(data => console.log(data)) // JSON from `response.json()` call
      .catch(error => console.error(error))

    function postData(url, data) {
      return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
      })
      .then(response => response.json()) // parses response to JSON
    }
```

**注意 node 中使用：**

```
安装依赖:
require('es6-promise').polyfill(),
require('isomorphic-fetch')
```
