## Number

### isFinite isNaN

> Number.isFinite()用来检查一个数值是否为有限的（finite），即不是 Infinity。

```bash
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false
注意，如果参数类型不是数值，Number.isFinite一律返回false。
```

> Number.isNaN()用来检查一个值是否为 NaN。

```bash
Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true
如果参数类型不是NaN，Number.isNaN一律返回false。
```

### parseInt parseFloat

> ES6 将全局方法 parseInt()和 parseFloat()，移植到 Number 对象上面，行为完全保持不变。

```bash
// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45

// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45
这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
Number.parseInt === parseInt // true
Number.parseFloat === parseFloat // true
```

## Math

### trunc

> Math.trunc 方法用于去除一个数的小数部分，返回整数部分。

```bash
Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0
```

> 对于非数值，Math.trunc 内部使用 Number 方法将其先转为数值。

```bash
Math.trunc('123.456') // 123
Math.trunc(true) //1
Math.trunc(false) // 0
Math.trunc(null) // 0
```

> 对于空值和无法截取整数的值，返回 NaN。

```bash
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
Math.trunc(undefined) // NaN
```

### random

> Math.random()
> 一个浮点型伪随机数字，在 0（包括 0）和 1（不包括）之间。

```bash
得到一个两数之间的随机数
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### round ceil floor

> 四舍五入 Math.floor(x)
> 向上取整 Math.ceil(x)
> 向下取整 Math.floor(x)

### abs

> Math.abs(x);
> 传入一个非数字形式的字符串或者 undefined/empty 变量，将返回 NaN。传入 null 将返回 0。

```bash
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs("string"); // NaN
Math.abs();         // NaN
```

## Date

### now

> var timeInMs = Date.now();

> now()方法返回自 1970 年 1 月 1 日 00:00:00 UTC 到当前时间的毫秒数，类型为 Number。

### parse

> Date.parse(dateString) 

> new Date(dateString).getTime()

```bash
var time = Date.parse('2018-02-12');
console.log(time);
```

### 返回指定时间
* getDate() 返回一个指定的日期对象为一个月中的哪一日（从1--31）
* getDay() 返回一个具体日期中一周的第几天，0 表示星期天。
* getFullYear() 返回指定日期的年份
* getHours() 返回一个指定的日期对象的小时。
* getMilliseconds() 返回一个指定的日期对象的毫秒数。
* getMinutes() 返回一个指定的日期对象的分钟数
* getMonth() 返回一个指定的日期对象的月份，为基于0的值（0表示一年中的第一月）。
* getSeconds() 返回一个指定的日期对象的秒数。

### 转换本地格式toLocaleString toLocaleDateString
```bash
new Date().toLocaleString() //"2019/6/20 上午10:31:30"
new Date().toLocaleDateString() //"2019/6/20"
```