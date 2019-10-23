---
sidebarDepth: 3
sidebar: auto
---

# 代码规范
 <hr>

## js规范

## css规范

## html规范

## vue规范

### 组件名
- 组件名最好为多个单词(such : v-header)
- 单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。
- 在html模板中使用横线命名 (kebab-case)

### prop定义
- 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。
```
反例
props: {
  'greeting-text': String
}
<WelcomeMessage greetingText="hi"/>

好例子
props: {
  greetingText: String
}
<WelcomeMessage greeting-text="hi"/>

```
- prop定义应该尽量详细
```
反例:
// 这样做只有开发原型系统时可以接受
props: ['status']

好例子:
props: {
  status: String
}
// 更好的做法！
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

### 避免 v-if 和 v-for 用在一起
    
```
反例：
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

好例子
computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
      return user.isActive
    })
  }
}

<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
或
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

```

### 如果一组 v-if + v-else 的元素类型相同，最好使用 key (比如两个div元素)。

```
反例
<div v-if="error">
  错误：{{ error }}
</div>
<div v-else>
  {{ results }}
</div>
好例子
<div
  v-if="error"
  key="search-status"
>
  错误：{{ error }}
</div>
<div
  v-else
  key="search-results"
>
  {{ results }}
</div>
```