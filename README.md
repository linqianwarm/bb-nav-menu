# navComponent
navigation

###预览方式
```
	npm install
	live-server
```
### 规则

  > 1. 导航默认全部收起；开放配置初始化默认选中项（TODO）
  > 2. 全部操作皆由点击触发，非叶子节点只可展开，只有叶子节点能选中
  > 3. 进入页面时，输入对应的正确的叶子节点的url，可以看到其被选中且层级打开的状态； 错误处理（TODO）
  > 4. 同级的展开，目前是同时只能有一个。e.g:一级菜单1和一级菜单2都有children节点，菜单1打开的时候，再继续操作打开菜单2，会使菜单1关闭。  开放配置是否允许多子菜单的展开（TODO）
  > 5. 开放配置使用路由模式还是普通跳转（TODO）

### 使用方式

```html
  <!-- 确保之前已经引入jquery -->
  <script type="text/javascript" src="./NavComponent.js"></script> <!--根目录下的文件-->
```

```JavaScript
new Nav({
    container: 'menu', //容器ID名
    data: data //导航栏数据
})

```

```css
.hide {
  display:none;
}
//样式不限制，可自定义
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