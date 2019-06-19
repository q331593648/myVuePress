## if 语句代码优化

#### 需求

`写一个 returnWeekday() 方法返回"今天是星期*"。`

`这里我简单的分为 “初学 —> 入门 —> 中级” 这几个阶段。`

#### 初学

当我们开始拿到需求的时候，看到一系列的逻辑判断，首先想到的应该就是 if 语句了。

代码如下：

```bash
function returnWeekday(){
  let string = "今天是星期";
  let date = new Date().getDay();
  if(date === 0){
    string += "日";
  }else if(date === 1){
    string += "一";
  }else if(date === 2){
    string += "二";
  }else if(date === 3){
    string += "三";
  }else if(date === 4){
    string += "四";
  }else if(date === 5){
    string += "五";
  }else if(date === 6){
    string += "六";
  }
  return string;
}
console.log(returnWeekday())
```

#### 入门

这里我们使用 switch 语句优化一遍代码。

`注意： switch 语句在比较值的时候使用的是全等操作符，不会有类型转换的情况。`

代码如下：

```bash
function returnWeekday(){
  let string = "今天是星期";
  let date = new Date().getDay();
  switch(date){
    case 0:
      string += "日";
      break;
    case 1:
      string += "一";
      break;
    case 2:
      string += "二";
      break;
    case 3:
      string += "三";
      break;
    case 4:
      string += "四";
      break;
    case 5:
      string += "五";
      break;
    case 6:
      string += "六";
      break;
  }
  return string;
}
console.log(returnWeekday())
```

我们在 case 里面拼接字符，以达到输出预期结果的目的。这里的结构看起来确实比 if 语句清晰了一点。可是还是有点疑惑？

`假设哪一天，相关组织发现，星象有变。每周需要变成八天（产品的思维，你无法想象）。我们这个 returnWeekday() 方法就需要多加一层判断了。`
我们的希望是已经封装好的方法，不要频繁的修改。可是需求的变动是你无法控制的。

所以我们继续思考该怎么优化。

#### 中级

我们看到这里的 case 是数字，和数组的下标是一致的。

即： ['天','一','二','三','四','五','六'] 的下标。

所以我们可以考虑使用数组来优化。

代码如下：

```bash
function returnWeekday(){
  let string = "今天是星期";
  let date = new Date().getDay();
  //使用数组
  let dateArr = ['天','一','二','三','四','五','六'];
  return string + dateArr[date];
}
console.log(returnWeekday())
```

以上代码是不是比 switch 语句和 if 语句清晰多了。而且就算一周变为八天，只需要修改 dateArr 数组就好了。
`倘若我们的每个 case 是不规律的字符串呢？那我们使用对象，每个 case 为一个 key`
代码如下：

```bash
function returnWeekday(){
  let string = "今天是星期";
  let date = new Date().getDay();
  //使用数组
  let dateObj = {
    0: "天",
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六"
  };
  return string + dateObj[date];
}
console.log(returnWeekday())
```

以上使用数组或者对象的写法，提高代码的可读性的同时，维护起来也变得简单了。

#### 使用 charAt 字符方法

字符串有个和使用数组下标类似的方法：

```bash
function returnWeekday(){
  return "今天星期" + "天一二三四五六".charAt(new Date().getDay());
}
console.log(returnWeekday())
```

#### 需求变动

这个时候，有人希望 returnWeekday() 方法不仅返回今天是周几，还需要区分工作日和休息日，调用相关方法。

如果是使用 switch、 if 或 数组 维护起来就有点麻烦，需要改写的地方还挺多的。

```bash
function returnWeekday() {
  let string = "今天是星期 ";
  let date = new Date().getDay();
  // 使用对象
  dateObj = {
      0: ['天', '休'],
      1: ["一 ", '工'],
      2: ["二 ", '工'],
      3: ["三 ", '工'],
      4: ["四 ", '工'],
      5: ["五 ", '工'],
      6: ["六", '休'],
    },
    // 类型，这里也可以对应相关方法
    dayType = {
      '休': function() {
        // some code
        console.log('为休息日')
      },
      '工': function() {
        // some code
        console.log('为工作日')
      },
    }
  let returnData = {
    'string': string + dateObj[date][0],
    'method': dayType[dateObj[date][1]],
  }
  return returnData
};
console.log(returnWeekday().method.call(this))


```

#### 其他常见优化手段

这里在给出一些常见的优化手段。

#### 三元运算

适合简单的 if(){}else{} 情况。

```bash
//滚动监听，头部固定
handleScroll: function () {
  let offsetTop = this.$refs.pride_tab_fixed.getBoundingClientRect().top;
  if( offsetTop < 0 ){
    this.titleFixed = true
    } else {
      this.titleFixed = false
    }
  //改成三元
  (offsetTop < 0) ? this.titleFixed = true : this.titleFixed = false;
  //我们发现条件块里面的赋值情况是布尔值，所以可以更简单
   this.titleFixed = offsetTop < 0;
}
```

这样在精简代码的时候，可读性也没有降低。

#### 逻辑与运算符

有些时候我们可以使用逻辑与运算符来简化代码

```bash
if(falg){
  someMethod()
}
```

可以改成：

`falg && someMethod();`

#### 使用 includes 处理多重条件

```bash
if(code ==='202'||code ==='203'||code ==='204'){
  someMethod()
}
```

可以改成

```bash
if(['202','203','204'].includes(code)){
  someMethod()
}
```