# navComponent
navigation

###预览方式
```
	npm install
	live-server
```

### 使用方式
```JavaScript
new Nav({
    container: 'menu', //容器ID名
    data: data //导航栏数据
})

```

### 导航栏数据需按照此格式传入(层级不限)
```Json
[
  {
    "name": "一级菜单1",
    "key": "a",
    "children": [
      {
        "name": "二级菜单1-1",
        "key": "a-1",
        "children": [
          {
            "name": "三级菜单1-2-1",
            "key": "a-2-1"
          }
        ]
      }
    ]
  },
  {
    "name": "一级菜单2",
    "key": "b",
    "children": [
      {
        "name": "二级菜单2-1",
        "key": "b-1"
      },
      {
        "name": "二级菜单2-2",
        "key": "b-2"
      }
    ]
  },
   {
    "name": "一级菜单3 ",
    "key": "c"
  }
```