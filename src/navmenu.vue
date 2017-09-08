// TODO
// 1.hover时超出高度，让div从上方出现
// 2.菜单滚动条的问题
// 3.嵌套渲染需要修改
// 4.icon
<template>
  <div class="sidebar" :class="menuCollapse?'sidebar-folded':''" id="sidebar">
    <a class="sidebar-toggle-btn" id="sidebar-toggle-btn" @click="toggleSidebar">
      <span class="lines"></span>
    </a>
    <aside class="aside">
        <div class="logo">LOGO</div>
        <nav class="menu-root">
            <ul class="menu-list" id="menu-folded" v-show="menuCollapse">
              <li v-for="(node,index) in statusTree" class="menu-item menu-item-l1" :key="node.id"
               :class="(node.isHover?'menu-item-hover ':'') + (node.isSelected?'menu-item-selected':'') + (node.appearUp?'menu-appear-up':'menu-appear-down')" 
               @mouseenter="toggleNode(node.id, 'hover')"
               @mouseleave="toggleNode(node.id, 'hover')" >
                <a class="menu-title"
                    @click="node.children?'':selectNode(node.id)"
                    :class="node.children?'':'menu-title-no-children'" >
                  <i v-if="node.icon" class="menu-icon-title-alt fa" :class="node.icon"></i>
                  <span v-if="node.children" class="menu-title-text menu-title-l1">{{node.title}}</span>
                </a>
                <ul v-if="node.children" class="menu-submenu menu-submenu-l2 menu-submenu-vertical" :id="node.id" v-show="node.isHover">
                  <li v-for="nodeSec in node.children" class="menu-item menu-item-l2" :key="nodeSec.id"
                  :class="(nodeSec.isSelected?'menu-item-selected ':'') + (nodeSec.isHover?'menu-item-hover ':'') + (nodeSec.appearUp?'menu-appear-up':'menu-appear-down')" 
                  @mouseenter="toggleNode(nodeSec.id, 'hover')" 
                  @mouseleave="toggleNode(nodeSec.id, 'hover')">
                    <a :data-id='nodeSec.id' class="menu-title"   
                        @click="nodeSec.children?'':selectNode(nodeSec.id)"
                        :class="nodeSec.children?'':'menu-title-no-children'" >
                      <span class="menu-title-text menu-title-l2">{{nodeSec.title}}</span>
                    </a>
                    <ul v-if="nodeSec.children" class="menu-submenu menu-submenu-l3 menu-submenu-vertical"  v-show="nodeSec.isHover">
                      <li v-for="nodeThir in nodeSec.children" class="menu-item menu-item-l3" 
                          :key="nodeThir.id"
                          :class="nodeThir.isSelected?'menu-item-selected':''" >
                        <a :data-id='nodeThir.id' class="menu-title" @click="selectNode(nodeThir.id)" >
                          <span class="menu-title-text menu-title-l3">{{nodeThir.title}}</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="menu-list" id="menu-unfold" v-show="!menuCollapse">
              <li v-for="(node,index) in statusTree" class="menu-item menu-item-l1" :key="node.id"
               :class="node.isSelected && !node.isOpen ? 'menu-item-selected' : ''" >
                <a class="menu-title"
                    @click="node.children?toggleNode(node.id):selectNode(node.id)"
                    :class="node.children?'menu-submenu-title':'menu-title-no-children'" >
                  <i v-if="node.icon" class="menu-icon-title-alt fa" :class="node.icon"></i>
                  <span class="menu-title-text menu-title-l1">{{node.title}}</span>
                  <i v-if="node.children" class="menu-icon-angle fa"
                     :class="node.isOpen ?'fa-angle-down':'fa-angle-right'"></i>
                </a>
                <ul v-if="node.children" class="menu-submenu menu-submenu-l2"
                    :id="node.id"  :class="node.isOpen ? 'menu-submenu-inline' : 'menu-submenu-hidden'">
                  <li v-for="nodeSec in node.children" class="menu-item menu-item-l2" :key="nodeSec.id"
                  :class="(nodeSec.isSelected?'menu-item-selected ':'') + (nodeSec.isHover?'menu-item-unfold-hover ':'') + (nodeSec.appearUp?'menu-appear-up':'menu-appear-down')" 
                  @mouseenter="nodeSec.children?toggleNode(nodeSec.id,'hover'):''" 
                  @mouseleave="nodeSec.children?toggleNode(nodeSec.id,'hover'):''">
                    <a :data-id='nodeSec.id' class="menu-title menu-title-vertical"   
                        @click="nodeSec.children?'':selectNode(nodeSec.id)"
                        :class="nodeSec.children?'menu-submenu-title':'menu-title-no-children'">{{nodeSec.title}}
                    </a>
                    <ul v-if="nodeSec.children" class="menu-submenu menu-submenu-l3 menu-submenu-vertical"  v-show="nodeSec.isHover">
                      <li v-for="nodeThir in nodeSec.children" class="menu-item menu-item-l3" 
                          :key="nodeThir.id"
                          :class="nodeThir.isSelected?'menu-item-selected':''" >
                        <a :data-id='nodeThir.id' class="menu-title" @click="selectNode(nodeThir.id)" >{{nodeThir.title}}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
        </nav>
    </aside>
	</div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'navmenu',
  mounted () {
    var initSelectedNode = this.lastNodeId;
    if (initSelectedNode) {
      this.selectNode(this.lastNodeId);
    }
    console.log('navmenu里面');
  },
  data () {
    var initStatusData = this.initStatusTree();
    var collapseBoolean = !!this.collapse;
    return {
      items: this.menuData,
      menuCollapse: collapseBoolean, // 是否为折叠状态
      lastNodeId: initStatusData.defaultId, // 为初始化选中或上一次选中
      statusTree: initStatusData.statusTree,
      statusTreeMap: initStatusData.statusTreeMap
    };
  },
  props: ['menuData', 'defaultUrl', 'collapse'],
  methods: {
    initStatusTree () {
      var statusTree = {
        title: 'root',
        url: '/',
        isSelected: false,
        isOpen: true,
        isHover: false,
        level: 0,
        children: this.menuData,
        parent: null
      };
      var statusTreeMap = {};
      var id = 1;
      var defaultUrl = this.defaultUrl;
      var defaultId = null;

      var queue = [];
      queue.push(statusTree);
      while (queue.length > 0) {
        var parent = queue.pop();
        if (Array.isArray(parent.children)) {
          parent.children.forEach(function (node) {
            queue.unshift(node);
            node.id = id++;
            Vue.set(node, 'isOpen', false);
            Vue.set(node, 'isSelected', false);
            Vue.set(node, 'isHover', false);
            Vue.set(node, 'appearUp', false);
            node.parent = parent;
            statusTreeMap[node.id] = node;
            if (defaultUrl && (node.url === defaultUrl)) defaultId = node.id;
          });
        }
      }

      return {
        statusTree: statusTree.children,
        statusTreeMap: statusTreeMap,
        defaultId: defaultId
      };
    },
    toggleSidebar () {
      this.menuCollapse = !this.menuCollapse;
    },
    toggleNode (id, type) {
      var node = this.searchNode(id);//
      if (node != null) {
        if (type === 'hover') {
          node.isHover = !node.isHover;
          // 解决hover时右侧出来的框超出页面问题
          if (event.clientY < (window.innerHeight / 2)) {
            node.appearUp = false;
          } else {
            node.appearUp = true;
          }
        } else {
          node.isOpen = !node.isOpen;
        }
      }
    },
    selectNode (id) {
      var lastId = this.lastNodeId;
      var curNode = this.searchNode(id);

      var lastNode = this.searchNode(lastId);
      if (lastNode) this.setNodeAttr(lastNode, 'isSelected', false);
      this.setNodeAttr(curNode, 'isSelected', true);
      this.lastNodeId = id;
      this.$emit('selectNode', {url: curNode.url});
    },
    setNodeAttr (node, attr, val) {
      node[attr] = val;

          // 选择祖先节点
      while (node.parent) {
              // 选中当前节点的父节点
        var parent = node.parent;
        parent[attr] = val;

        node = parent;
      }
    },
    searchNode (id) {
      return this.statusTreeMap[id];
    }

  }
};
</script>

<style lang="less" scoped>
  @import './style/index';
</style>
