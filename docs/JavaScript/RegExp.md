# RegExp

```bash
i ---大小写匹配
g ---贪婪匹配
| 或   一般多个条件需要()
s ES2018 引入s修饰符，使得.可以匹配任意单个字符。/foo.bar/s.test('foo\nbar') // true

常用元字符
 .	匹配除换行符以外的任意字符
\w	匹配字母或数字或下划线
\s	匹配任意的空白符
\d	匹配数字
\b	匹配单词的开始或结束
^	匹配字符串的开始
$	匹配字符串的结束

常用限定符
*	重复零次或更多次
+	重复一次或更多次
?	重复零次或一次
{n}	重复n次
{n,}	重复n次或更多次
{n,m}	重复n到m次

常用反义词
\W	匹配任意不是字母，数字，下划线，汉字的字符
\S	匹配任意不是空白符的字符
\D	匹配任意非数字的字符
\B	匹配不是单词开头或结束的位置
[^x]	匹配除了x以外的任意字符
[^aeiou]	匹配除了aeiou这几个字母以外的任意字符

其他符号
[]
1.任何一个 /a[abc]q/   aaq,abq,acq
2.范围  /[a-z]/i  /[0-9]/
3.排除 [^a-z0-9]

{}
{n}       /a{6}/    /\d{11}/
{n,m}     /\d{5,12}/
{n,}      /\w{6,}/
+   {1,}
?   {0,1}  /\.jsx?/    .js  .jsx
```

## search

### 返回第一次出现位置

> str.search(regexp) //string 的方法

```bash
let str = "aszxvcsdfqfs";
let reg = /f/;
console.log(str.search(reg)) //8
```

## match

### 返回匹配数据集(数组)

> str.match(regexp) //string 的方法

```bash
let str = "aszxv123c s12dfq f23s asdas123d zx21312cac";
let reg = /\d+/g;
console.log(str.match(reg)) //["123", "12", "23", "123", "21312"]
```

## replace

#### 替换

> str.replace(regexp|substr, newSubStr|function) //string 的方法

```bash
let str = "aszxv123c s12dfq f23s";
let reg = /\d/g;
console.log(str.replace(reg," $")) //aszxv $ $ $c s $ $dfq f $ $s

```

## test

#### 校验

> regexObj.test(str) //regexp 的方法

```bash
let str = "12321aa31";
let reg = /^\d+$/;
console.log(reg.test(str)) // false
```

## exec

### 只会匹配第一个符合的字符串（意味着 g 对其不起作用）

> regexp.exec(str) //regexp 的方法

```bash
let str = "aszxv123c s12dfq f23s asdas123d zx21312cac";
let reg = /\d+/g;
console.log(reg.exec(str)) //["123"]

```

## 正则例子

### 0-9999

```bash
/\d|[1-9]\d{1,3}/
```

### 中文字符

```bash
/[\u4e00-\u9fa5]/
```

### email

```bash
/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
```
