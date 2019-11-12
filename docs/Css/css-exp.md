---
sidebarDepth: 2
---

## Css 常用样式

### 纯CSS写三角形-border法 [参考网站](https://www.cnblogs.com/blosaa/p/3823695.html)
```
/*向上*/
    width:0;
    height:0;
    border-width:0 30px 30px;
    border-style:solid;
    border-color:transparent transparent #333;/*透明 透明  灰*/
```
--------------------------------------------------
### 文本超出就隐藏并且显示省略号
```
overflow:hidden; //超出的文本隐藏
text-overflow:ellipsis; //溢出用省略号显示
white-space:nowrap; //溢出不换行

//上面是一行内容的时候，当有两行的内容时候

overflow: hidden;
text-overflow: ellipsis;
display:-webkit-box; //作为弹性伸缩盒子模型显示。
-webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
-webkit-line-clamp:2; //显示的行

```
--------------------------------------------------
### 滚动更流畅
```
scroll-behavior:smooth
```
--------------------------------------------------
### 按钮有质感
```
button{
    outline: none;
    border: none;
    color: #fff;
    padding: .3em 1em;
    border-radius: .2em;
    cursor: pointer;
    background: linear-gradient(#3de5fb,#26acbd);
    text-shadow: 0 1px 1px grey;
    box-shadow: 0 0.2em 0 #068494, 0 0.2em 0.2em grey;
}
button:active{
    box-shadow: 0 0.1em 0 #068494, 0 0.1em 0.1em grey;
    transform: translate(0, 0.05em);
}
```
### 表格默认样式
```
html:
<table>
  <colgroup style="width:120px" span="2"></colgroup>
  <colgroup ></colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
  <tr>
    <td>2489604</td>
    <td>My first CSS</td>
    <td>$47</td>
  </tr>
</table>
css:
table,tr,th,td{
    border: 1px solid #d6d6d6;
}
table{
    border-collapse: collapse;
    width: 100%;
    color: #555;
    font-size: 14px;
    table-layout: fixed;
}
th,td{
    padding: 6px 12px;
}
tr:nth-child(2n+1){
    background: aliceblue;
}
tr{
    transition: background-color 1s;
}
tr:hover{
    background: lightpink;
}
```
