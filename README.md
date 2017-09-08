# bb-nav-menu
菜单导航组件  for vue.js

### 预览方式
```
	npm install
	npm run dev
```

### 规则

  > 1. 导航默认全部收起；开放配置初始化默认选中项（TODO）
  > 2. 导航有两种显示状态，皆为竖直，分为折叠和展开两种形态,暂时只支持三层数据的结构。（多层自适应TODO）
  > 3. 交互形式为：</br>
    折叠: 第一层hover右侧打开第二层，第二层hover右侧打开第三层</br>
    展开：第一层click下侧打开第二层，第二层hover右侧展现第三层；</br>
    叶子节点实现点击触发事件 </br>
  > 4. 组件不提供路由，但放出相应的响应事件给组件使用方，可自行做前端or服务端路由跳转

### 使用方式

#### template模板使用
```template
  <bb-nav-menu :menuData="items" :defaultUrl="curUrl" :collapse="collapse" v-on:selectNode="response"></bb-nav-menu>
```

#### js使用
```JavaScript
  import BbNavMenu from 'bb-nav-menu';

  export default {
    name: 'app',
    components: {
      BbNavMenu
    },
    data () {
      return {
        collapse: true,
        curUrl: window.location.pathname || '',
        items: [
          {
            'title': '首页',
            'icon': 'fa-android',
            'url': '/'
          },
          {
            'title': '工单处理',
            'icon': ' fa-windows',
            'children': [
              {
                'title': '待处理',
                'url': 'd1'
              },
              {
                'title': '已完成',
                'url': 'd2'
              }
            ]
          },
          {
            'title': '策略迁移',
            'icon': ' fa-windows',
            'children': [
              {
                'title': '全部迁移',
                'url': 'e1'
              },
              {
                'title': '部分迁移',
                'url': 'e2'
              },
              {
                'title': '策略迁移记录',
                'url': 'e3'
              }
            ]
          }
        ],
        url: 'b1'
      };
    },
    methods: {
      response (params) {
        console.log('组件里面触发啦', params);
        router.push({path: params.url});
      }
    }
  };

```


### Menu Attribute
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|menuData| 菜单数据，下面有示例 |Array| - | - |
|defaultUrl|默认选中菜单项的URL|String| - | - |
|collapse|是否水平折叠收起菜单|Boolean|-|false|

### Menu Events
|事件名称|说明|回调函数|
|---|---|---|
|selectNode| 选中菜单的叶子节点 |url:选中项上面的url参数|