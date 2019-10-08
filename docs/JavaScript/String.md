# String

## charAt

> str.charAt(index)

```bash
var anyString = "Brave new world";
anyString.charAt(0) //"B"
```

## concat

> str.concat(string2, string3[, ..., stringN])

**强烈建议使用 赋值操作符（+, +=）代替 concat 方法**

```bash
var hello = "Hello, ";
hello.concat("World", " have a nice day.") //"Hello,World have a nice day."
```

## includes startsWith endsWith

> str.includes(searchString[, position])

- searchString 要在此字符串中搜索的字符串。
- position 可选。从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 0。

**includes() 方法是区分大小写的。例如，下面的表达式会返回 false ：**

```bash
'Blue Whale'.includes('blue'); //  false
'Blue Whale'.includes('Blue'); // true
'Blue Whale'.includes('Blue',1); // false
'Blue Whale'.includes('lue',1); // true
```

> str.startsWith(searchString[, position])

- searchString 要搜索的子字符串。
- position 可选 在 str 中搜索 searchString 的开始位置，默认值为 0，也就是真正的字符串开头处。

```bash
const str1 = 'Saturday night plans';
str1.startsWith('Sat');/true
str1.startsWith('Sat',1);/false
str1.startsWith('at',1);/true

```

> str.endsWith(searchString[, length])

- searchString 要搜索的子字符串。
- length 可选。作为 str 的长度。默认值为 str.length。

```bash
const str1 = 'Cats are the best!';
str1.endsWith('best'); //false
str1.endsWith('best', 17); //true
str1.endsWith('best!'); //true
```

## indexOf lastIndexOf

> str.indexOf(searchValue[, fromIndex]) 方法区分大小写

- searchValue 一个字符串表示被查找的值。
- fromIndex 可选 表示调用该方法的字符串中开始查找的位置。可以是任意整数。默认值为 0。
```bash
"Blue Whale".indexOf("Blue"); //0
"Blue Whale".indexOf("Blue",1) //-1
```
> str.lastIndexOf(searchValue[, fromIndex]) 方法区分大小写

- searchValue 一个字符串，表示被查找的值。
- fromIndex 可选 从调用该方法字符串的此位置处开始查找。可以是任意整数。默认值为 str.length。如果为负值，则被看作 0
```bash
"canal".lastIndexOf("a") // 3
"canal".lastIndexOf("a",2) // 1
```

## padStart padEnd
> str.padStart(targetLength [, padString])  用于头部补全

> str.padEnd(targetLength [, padString])    用于尾部补全

- targetLength
当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身
- padString 可选
填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的缺省值为 " "（U+0020）。

常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。
```bash
'1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456"
```
另一个用途是提示字符串格式。
```bash
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
```

## repeat
> str.repeat(count)
- repeat方法返回一个新字符串，表示将原字符串重复n次。
- count 介于0和正无穷大之间的整数 : [0, +∞) 。表示在新构造的字符串中重复了多少遍原字符串。
- 参数如果是小数，会被取整。
- 如果repeat的参数是负数或者Infinity，会报错。
- 但是，如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。
- 参数NaN等同于 0。
- 如果repeat的参数是字符串，则会先转换成数字。

```bash
"abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数count将会被自动转换成整数.
"abc".repeat(1/0)    // RangeError: repeat count must be positive and less than inifinity
```

## trimStart trim trimEnd
> str.trim()  str.trimStart()  str.trimEnd()
- trim()方法会从一个字符串的两端删除空白字符。
- trimStart()方法从字符串的开头删除空格。
- trimEnd() 方法从一个字符串的右端移除空白字符。
- trimStart trim trimEnd 方法并不影响原字符串本身，它返回的是一个新的字符串。

## slice
> str.slice(beginSlice[, endSlice])

- beginSlice
从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 sourceLength + beginSlice 看待，这里的sourceLength 是字符串的长度 (例如， 如果beginSlice 是 -3 则看作是: sourceLength - 3)
- endSlice
可选。在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，slice会一直提取到字符串末尾。如果该参数为负数，则被看作是 sourceLength + endSlice，这里的 sourceLength 就是字符串的长度(例如，如果 endSlice 是 -3，则是, sourceLength - 3)。

- slice() 从一个字符串中提取字符串并返回新字符串。在一个字符串中的改变不会影响另一个字符串。也就是说，slice 不修改原字符串，只会返回一个包含了原字符串中部分字符的新字符串。

**注意：slice() 提取的新字符串包括beginSlice但不包括 endSlice。**

```bash
var str1 = 'The morning is upon us.';
var str2 = str1.slice(4, -2);
console.log(str2); // OUTPUT: morning is upon u
```
```bash
var str = 'The morning is upon us.';
str.slice(-3);     // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1);  // returns 'The morning is upon us'
```

## split
> str.split([separator[, limit]])

Tip: 如果空字符串("")被用作分隔符，则字符串会在每个字符之间分割。
- separator
指定表示每个拆分应发生的点的字符串。separator 可以是一个字符串或正则表达式。 如果纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点。如果在str中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。
- limit
一个整数，限定返回的分割片段数量。当提供此参数时，split 方法会在指定分隔符的每次出现时分割该字符串，但在限制条目已放入数组时停止。如果在达到指定限制之前达到字符串的末尾，它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。
```bash
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

var re = /\s*(?:;|$)\s*/;
names.split(re); // [ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
names.split(re,2);// [ "Harry Trump", "Fred Barney"]
```

## substring
> str.substring(indexStart[, indexEnd])

- indexStart
需要截取的第一个字符的索引，该字符作为返回的字符串的首字母。
- indexEnd
可选。一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内。

**substring 提取从 indexStart 到 indexEnd（不包括）之间的字符。特别地：**

- 如果 indexStart 等于 indexEnd，substring 返回一个空字符串。
- 如果省略 indexEnd，substring 提取字符一直到字符串末尾。
- 如果任一参数小于 0 或为 NaN，则被当作 0。
- 如果任一参数大于 stringName.length，则被当作 stringName.length。
- 如果 indexStart 大于 indexEnd，则 substring 的执行效果就像两个参数调换了一样。见下面的例子。

```bash
var anyString = "Mozilla";

// 输出 "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));
console.log(anyString.substring(3,-3));
console.log(anyString.substring(3,NaN));
console.log(anyString.substring(-2,3));
console.log(anyString.substring(NaN,3));

// 输出 "lla"
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));

// 输出 ""
console.log(anyString.substring(4,4));

// 输出 "Mozill"
console.log(anyString.substring(0,6));

// 输出 "Mozilla"
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));
```

## toLowerCase toLocaleLowerCase toUpperCase toLocaleUpperCase
> str.toLowerCase() str.toLocaleLowerCase 返回调用字符串值转换为小写的值
> str.toUpperCase() str.toLocaleUpperCase 返回调用字符串值转换为大写的值

## raw
> String.raw(callSite, ...substitutions)

> String.raw`templateString`

- callSite
一个模板字符串的“调用点对象”。类似{ raw: ['foo', 'bar', 'baz'] }。
- ...substitutions
任意个可选的参数，表示任意个内插表达式对应的值。
- templateString
模板字符串，可包含占位符（${...}）。

在大多数情况下, String.raw()是用来处理模版字符串的. 不要被上面复杂的参数要求吓到，因为像所有的标签函数一样，你通常不需要把它看成一个普通函数，你只需要把它放在模板字符串前面就可以了，而不是在它后面加个括号和一堆参数来调用它，引擎会替你去调用它。

String.raw() 是唯一一个内置的模板字符串标签函数，因为它太常用了。不过它并没有什么特殊能力，你自己也可以实现一个和它功能一模一样的标签函数。

```bash
String.raw`Hi\n${2+3}!`;
// 'Hi\n5!'，Hi 后面的字符不是换行符，\ 和 n 是两个不同的字符

String.raw `Hi\u000A!`;             
// "Hi\\u000A!"，同上，这里得到的会是 \、u、0、0、0、A 6个字符，
// 任何类型的转义形式都会失效，保留原样输出，不信你试试.length

let name = "Bob";
String.raw `Hi\n${name}!`;             
// "Hi\\nBob!"，内插表达式还可以正常运行


// 正常情况下，你也许不需要将 String.raw() 当作函数调用。
// 但是为了模拟 `t${0}e${1}s${2}t` 你可以这样做:
String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'
// 注意这个测试, 传入一个 string, 和一个类似数组的对象
// 下面这个函数和 `foo${2 + 3}bar${'Java' + 'Script'}baz` 是相等的.
String.raw({
  raw: ['foo', 'bar', 'baz'] 
}, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'
```