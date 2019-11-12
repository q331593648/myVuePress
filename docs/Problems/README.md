---
sidebar: auto
---

# 常见问题收集
<hr>

## 生成数组[0, 1, ..., N-1]

```
Array.from(range(1, 10)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 获取屏幕高宽

```
document.body.clientWidth ==> BODY对象宽度
document.body.clientHeight ==> BODY对象高度
document.documentElement.clientWidth ==> 可见区域宽度
document.documentElement.clientHeight ==> 可见区域高度
document.body.clientWidth ==> 网页可见区域宽 
document.body.clientHeight ==> 网页可见区域高
document.body.offsetWidth ==> 网页可见区域宽(包括边线的宽)
document.body.offsetHeight ==> 网页可见区域高(包括边线的高)
document.body.scrollWidth ==> 网页正文全文宽document.body.scrollHeight ==> 网页正文全文高
document.body.scrollTop ==> 网页被卷去的高
document.body.scrollLeft ==> 网页被卷去的左
window.screenTop ==> 网页正文部分上
window.screenLeft ==> 网页正文部分左
window.screen.height ==> 屏幕分辨率的高
window.screen.width ==> 屏幕可用工作区高度
window.screen.availHeight ==> 屏幕可用工作区高度
window.screen.availWidth ==> 屏幕可用工作区宽度
```

## js判断对象是否为空对象的几种方法

```
1.将json对象转化为json字符串，再判断该字符串是否为"{}"
var data = {};
var b = (JSON.stringify(data) == "{}");
alert(b);//true

2.for in 循环判断
var obj = {};
var b = function() {
for(var key in obj) {
return false;
}
return true;
}
alert(b());//true

3.jquery的isEmptyObject方法
此方法是jquery将2方法(for in)进行封装，使用时需要依赖jquery
var data = {};
var b = $.isEmptyObject(data);
alert(b);//true

4.Object.getOwnPropertyNames()方法
此方法是使用Object对象的getOwnPropertyNames方法，获取到对象中的属性名，存到一个数组中，返回数组对象，我们可以通过判断数组的length来判断此对象是否为空
注意：此方法不兼容ie8，其余浏览器没有测试
var data = {};
var arr = Object.getOwnPropertyNames(data);
alert(arr.length == 0);//true

5.使用ES6的Object.keys()方法
与4方法类似，是ES6的新方法, 返回值也是对象中属性名组成的数组
var data = {};
var arr = Object.keys(data);
alert(arr.length == 0);//true
```

## ajax请求后跳转页面拦截

```
jump(id) {
          var newPage = window.open();//新开页面
          this.$http({
            method: "post",
            url:""
          })
            .then(res => {
              var loginUrl = "http://172.168.1.203:86/ps/login/login.html";
              // 返回成功进入新开页面
              newPage.location = loginUrl
            })
            .catch(err => {
              newPage.close();//失败时候关闭新建页面
              console.log(err);
            });
        },
```

## vue生命周期

```
    // 生命周期钩子函数 就是VUE规定的一些在固定阶段执行的函数
    beforeCreate(){
        // 创造之前
        // 不能获取data和methods里的数据
        console.log('beforeCreate');
        debugger;
    },
    created(){            
        // 能获取data和methods里的数据
        // 一般把ajax请求的发送写到这里
    },
    beforeMount() {},
    mounted(){
        // 在此时DOM已经渲染完成
    },
    beforeUpdate(){
        // 在视图更新时会触发其中函数
        // 函数在视图更新前执行
    },
    updated(){
        // 在视图更新时会触发其中函数
        // 函数在视图更新后执行
        // 不要写会触发视图更新的代码
    },
    beforeDestroy(){},
    //销毁前
    destroyed(){}
    //销毁
   destory();//手动销毁该实例，双向数据绑定没了

```

## vue监听对象的属性

```
1.普通监听
data(){
    return{
        aa:""
    }
},
watch:{
    aa(newValue,oldValue){
        ...
    }
}

2.对象监听
data(){
    return{
        aa:{
            name:"",
            age:null
        }
    }
},
watch:{
    aa:{
        handler(newValue,oldValue){
            ...
        },
        deep:true
    }
}

3.具体属性监听
data(){
    return{
        aa:{
            name:"",
            age:null
        }
    }
},
computed:{
    name(){
        return this.aa.name
    }
}
watch:{
    name(newValue,oldValue){
        ...
    }
}
```

## vue计算属性传参

```
:data="closure(item, itemName, blablaParams)"

computed: {
 closure () {
   return function (a, b, c) {
        /** do something */
        return data
    }
 }
}
```

## vue父子传值
```
1.子接收父级的值
子：props: {
      inputName: String,
      required: true
    }
父： <child :inputName="name"></child>

--------------------------------------------------
2.父接收子值--子调用父级方法
子： this.$emit('changeVal', xx)
父：	<child @changeVal="getChildVal"></child>
getChildVal(xx){
	xxxx
}

--------------------------------------------------

3.子接收父值--父调用子级方法
子：getParentData(){xxx}
父：<child ref="child"></child>
changeChild(){
	this.$refs.child.getParentData(xx);//如果子组件还没加载就使用$nextTick
}
```

## Vue中数组和对象更改后视图不刷新的问题

```
调用方法：Vue.set( target, key, value )

target：要更改的数据源(可以是对象或者数组)

key：要更改的具体数据

value ：重新赋的值

Tip:Vue.set()在methods中也可以写成this.$set()
```

## vue拖拽事件不生效
```
@dragenter.prevent @dragover.prevent @drop="drop($event)"

drop(event) {xxx}
```

## vue 路由带参数
```
1.
// 直接调用$router.push 实现携带参数的跳转
        this.$router.push({
          path: `/describe/${id}`,
        })

// 方案一，需要对应路由配置如下：
   {
     path: '/describe/:id',
     name: 'Describe',
     component: Describe
   }
// 很显然，需要在path中添加/:id来对应 $router.push 中path携带的参数。

// 在子组件中可以使用来获取传递的参数值。
$route.params.id

2.
// 父组件中：通过路由属性中的name来确定匹配的路由，通过params来传递参数。
       this.$router.push({
          name: 'Describe',
          params: {
            id: id
          }
        })

// 对应路由配置: 注意这里不能使用:/id来传递参数了，因为父组件中，已经使用params来携带参数了。
   {
     path: '/describe',
     name: 'Describe',
     component: Describe
   }

//子组件中: 这样来获取参数
$route.params.id

3.
// 父组件：使用path来匹配路由，然后通过query来传递参数
这种情况下 query传递的参数会显示在url后面?id=？
    this.$router.push({
          path: '/describe',
          query: {
            id: id
          }
        })

// 对应路由配置：
   {
     path: '/describe',
     name: 'Describe',
     component: Describe
   }

// 对应子组件: 这样来获取参数
$route.query.id

// 这里要特别注意 在子组件中 获取参数的时候是$route.params 而不是
$router 这很重要~~~
```

## vue 设置跨域

```
vue-config.js文件
dev: {
    proxyTable: {
      '/api': {
        target: 'http://40.00.100.100:3002/',//设置你调用的接口域名和端口号 别忘了加http
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
                //这里理解成用‘/api’代替target里面的地址，
                后面组件中我们掉接口时直接用api代替 比如我要调
                用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        }
      }
    },
```

## vue路由不带token跳转
```
router.beforeEach((to, from, next) => {
  if (localStorage.hasOwnProperty("token")) {
    next()
  }else{
    if (to.path === '/' || to.path ==="/register" || to.path === "/forget") {
      next()
   } else {
       next('/')
   }
  }
})
```

## vue路由跳转不刷新
- [vue路由跳转不刷新](https://www.cnblogs.com/goloving/p/9005130.html)

## 组件渲染完成后操作事件

```
    this.$nextTick(() => {
        this.$refs.dialogMSG.getdialogInfo(this.dialogGroup);
    })
```

## element-ui  JSX传不了参数？

```
使用这个方式可以传当前参数：
     onClick={(key,val) => console.log(key,val)}

```

## element-ui table 自适应表头？

```
:render-header = headerRender

headerRender(h, { column, $index }) {
  const nowRow =  this.xx[$index-1]; //获取当前列数据
  column.minWidth = nowRow.value.length * 10 + 77;//根据字数大概估算宽度
	//更详细可以区分中文英文来分别判断宽度
  return nowRow.value;
   }
```
## element-ui 的 upload组件的clearFiles方法调用方法

```
<el-upload ref = "upload">
    this.$refs.upload.clearFiles();
```

## element-ui el-tooltip 为空不显示问题
```
  <el-tooltip placement="top" :disabled="item.f1 === '' ? true : false" >
	<div slot="content">{{tipFqInfo1}}</div>
  </el-tooltip>
```

## element-ui el-switch 使用number类型不成功

需要添加:
```
  <el-switch
    v-model="scope.row.isUseEailbox"
    :inactive-value= 0
    :active-value= 1
  >
```

## vue批量导入组件
```
  const path = require('path')
  const files = require.context('./components', false, /\.vue$/)
  const modules = {}
  files.keys().forEach(key => {
    const name = path.basename(key, '.vue')
    modules[name] = files(key).default || files(key)
  })

```

## element-ui 前端表格分页
[前端表格分页](https://segmentfault.com/a/1190000012510886)