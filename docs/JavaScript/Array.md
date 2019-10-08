# Arrary

## isArray

> Array.isArray(obj) 方法返回一个布尔值，表示参数是否为数组。它可以弥补 typeof 运算符的不足。

```bash
var arr = [1, 2, 3];
typeof arr // "object"
Array.isArray(arr) // true
```

## valueOf toString

> arr.valueOf() 方法是一个所有对象都拥有的方法，表示对该对象求值。不同对象的 valueOf 方法不尽一致，数组的 valueOf 方法返回数组本身。

```bash
var arr = [1, 2, 3];
arr.valueOf() // [1, 2, 3]
```

> arr.toString() 方法也是对象的通用方法，数组的 toString 方法返回数组的字符串形式。

```bash
var arr = [1, 2, 3];
arr.toString() // "1,2,3"

var arr = [1, 2, 3, [4, 5, 6]];
arr.toString() // "1,2,3,4,5,6"
```

## push pop shift unshift

- push 方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。

```
let aa = ['a','b','c']
aa.push("d")
//['a','b','c','d']
```

- pop 方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组。

```
let aa = ['a','b','c']
aa.pop()
//['a','b']
```

- shift()方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。

```
let aa = ['a','b','c']
aa.shift()
//['b','c']
```

- unshift()方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。

```
let aa = ['a','b','c']
aa.unshift("d")
//['d','a','b','c']
```

## join

> arr.join([separator])

- separator
  指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果省略()，数组元素用逗号分隔。默认为 ","。如果 separator 是空字符串("")，则所有元素之间都没有任何字符。

```bash
var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // myVar1的值变为"Wind,Rain,Fire"
var myVar2 = a.join(', ');  // myVar2的值变为"Wind, Rain, Fire"
var myVar3 = a.join(' + '); // myVar3的值变为"Wind + Rain + Fire"
var myVar4 = a.join('');    // myVar4的值变为"WindRainFire"
```

## concat

> var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

```bash
var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

**es6:[...num1,...num2,...num3]**

## reverse

> arr.reverse() 颠倒数组中元素的位置，并返回该数组的引用。 注意，该方法将改变原数组。

```bash
var a = ['a', 'b', 'c'];
a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]
```

## slice

> arr.slice(begin, end);

- begin 可选
  从该索引处开始提取原数组中的元素（从 0 开始）。
  如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2)表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
  如果省略 begin，则 slice 从索引 0 开始。
- end 可选
  在该索引处结束提取原数组元素（从 0 开始）。slice 会提取原数组中索引从 begin 到 end 的所有元素（包含 begin，但不包含 end）。
  如果 end 被省略，则 slice 会一直提取到原数组末尾。
  如果 end 大于数组长度，slice 也会一直提取到原数组末尾。

```bash
var a = ['a', 'b', 'c'];

a.slice(0) // ["a", "b", "c"]
a.slice(1) // ["b", "c"]
a.slice(1, 2) // ["b"]
a.slice() // ["a", "b", "c"]
a.slice(-2) // ["b", "c"]
a.slice(-2, -1) // ["b"]
```

## splice

> array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

- start​
  指定修改的开始位置（从 0 计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1 计数，这意味着-n 是倒数第 n 个元素并且等价于 array.length-n）；如果负数的绝对值大于数组的长度，则表示开始位置为第 0 位。
- deleteCount 可选
  整数，表示要移除的数组元素的个数。
  如果 deleteCount 大于 start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。
  如果 deleteCount 被省略了，或者它的值大于等于 array.length - start(也就是说，如果它大于或者等于 start 之后的所有元素的数量)，那么 start 之后数组的所有元素都会被删除。
  如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。
- item1, item2, ... 可选
  要添加进数组的元素,从 start 位置开始。如果不指定，则 splice() 将只删除数组元素。

```bash
  从第 2 位开始删除 0 个元素，插入“drum”
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");
// 运算后的 myFish: ["angel", "clown", "drum", "mandarin", "sturgeon"]
// 被删除的元素: [], 没有元素被删除

  从倒数第 3 位开始删除 1 个元素
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);
// 运算后的 myFish: ["angel", "clown", "drum", "sturgeon"]
// 被删除的元素: ["mandarin"]

  从倒数第 2 位开始删除 1 个元素
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);
// 运算后的 myFish: ["angel", "clown", "sturgeon"]
// 被删除的元素: ["mandarin"]
```

## sort

> arr.sort([compareFunction])

- compareFunction 可选
  用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的 Unicode 位点进行排序。
  - firstEl
  第一个用于比较的元素。
  - secondEl
  第二个用于比较的元素。

```bash
  [4, 2, 5, 1, 3].sort((a, b) => a - b);  //从小到大
  [{ name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 8},
  { name: 'Zeros', value: 37 }]
  .sort((a, b) => a.value - b.value) //对象可以按照某个属性排序：
```

## map

> var new_array = arr.map(function callback(currentValue[, index[, array]]) {}[, thisArg])

**返回值:一个新数组，每个元素都是回调函数的结果。**
- callback
生成新数组元素的函数，使用三个参数：
  - currentValue 
     数组中正在处理的当前元素。
  - index可选 
     数组中正在处理的当前元素的索引。
  - array可选 
    map 方法被调用的数组。
- thisArg可选
执行 callback 函数时使用的this 值。

```bash
如何去遍历用 querySelectorAll 得到的动态对象集合
var lists = document.querySelectorAll("li");
Array.prototype.map.call(lists,x=>x.classList[0]);

// 下面的语句返回什么呢:
["1", "2", "3"].map(parseInt);
// 你可能觉的会是[1, 2, 3]
// 但实际的结果是 [1, NaN, NaN]
// 通常使用parseInt时,只需要传递一个参数.
// 但实际上,parseInt可以有两个参数.第二个参数是进制数.
// 可以通过语句"alert(parseInt.length)===2"来验证.
// map方法在调用callback函数时,会给它传递三个参数:当前正在遍历的元素, 
// 元素索引, 原数组本身.
// 第三个参数parseInt会忽视, 但第二个参数不会,也就是说,
// parseInt把传过来的索引值当成进制数来使用.从而返回了NaN.

function returnInt(element) {
  return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// 意料之中的结果

// 也可以使用简单的箭头函数，结果同上
['1', '2', '3'].map( str => parseInt(str) );

// 一个更简单的方式:
['1', '2', '3'].map(Number); // [1, 2, 3]
// 与`parseInt` 不同，下面的结果会返回浮点数或指数:
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]
```

## forEach
> arr.forEach(callback[, thisArg]);

**返回值:undefined.**
- callback
  为数组中每个元素执行的函数，该函数接收三个参数：
  - currentValue
    数组中正在处理的当前元素。
  - index可选
    数组中正在处理的当前元素的索引。
  - array可选
    forEach() 方法正在操作的数组。
- thisArg可选
    可选参数。当执行回调函数时用作 this 的值(参考对象)。

**注意： 没有办法中止或者跳出 forEach() 循环，除了抛出一个异常。如果你需要这样，使用 forEach() 方法是错误的。**
**注意：如果使用箭头函数表达式来传入函数参数，thisArg 参数会被忽略，因为箭头函数在词法上绑定了 this 值。**

```bash
['item1', 'item2', 'item3'].forEach(function(item,index){
  console.log(item,index)
  //item1 0   item2 1   item3 2
});

var out = [];
[1, 2, 3].forEach(function(elem) {
  this.push(elem * elem);
}, out);
out // [1, 4, 9]

```

## filter
> var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

**返回值:一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。**
- callback
  用来测试数组的每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留。它接受以下三个参数：
  - element
    数组中当前正在处理的元素。
  - index可选
    正在处理的元素在数组中的索引。
  - array可选
    调用了 filter 的数组本身。
- thisArg可选
  执行 callback 时，用于 this 的值。
```bash
 [12, 5, 8, 130, 44].filter(x=>{
   return x > 33
 }); //[ 130, 44 ]

  //根据搜索条件来过滤数组内容。
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
const filterItems = (query) => {
  return fruits.filter((el)=>{
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  })
}
console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```

## some every
> arr.some(callback(element[, index[, array]])[, thisArg])

**返回值 : 如果回调函数返回至少一个数组元素的truthy值，则返回true；否则为false。**

> arr.every(callback(element[, index[, array]])[, thisArg])

**返回值 : 如果回调函数的每一次返回都为 truthy 值，返回 true ，否则返回 false。**
- callback
  用来测试每个元素的函数，接受三个参数：
  - element
    数组中正在处理的元素。
  - index 可选
    数组中正在处理的元素的索引值。
  - array可选
    some()被调用的数组。
- thisArg可选
  执行 callback 时使用的 this 值。

```bash
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true
[12, 5, 8, 130, 44].every(x => x >= 10); // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true
```

## reduce reduceRight
> arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]) //从左到右

> arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue]) //从右到左

**返回值 : 函数累计处理的结果**

- callback
  执行数组中每个值的函数，包含四个参数：
  - accumulator
  - 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue。
  - currentValue
    数组中正在处理的元素。
  - currentIndex可选
    数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则为1。
  - array可选
    调用reduce()的数组
- initialValue可选
  作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。

```bash
[0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr );//10
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => { 
    return accumulator + currentValue; 
  }, 10 ); //20
```

## indexOf lastIndexOf
## includes lastIndexOf