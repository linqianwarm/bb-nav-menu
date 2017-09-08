<template>
    <div id="app">
        <navmenu :menuData="items" url="h2-1" v-on:selectNode="response"></navmenu>
    </div>
</template>

<script>
    import navmenu from '../index.js'
    import Vue from 'vue'

    Vue.use(navmenu);
export default {
    name: 'app',
    data () {
        this.$on('selectNode', function (params) {
            
        })
        return {
            showDatePicker:false,
            date:"",
            olddate:null,
            items:  [
                {
                "title": "首页",
                "icon": "fa-android",
                "url": "a"
                },
                {
                "title": "我的申请",
                "icon": "fa-apple",
                "children": [
                    {
                    "title": "进行中",
                    "url": "b1"
                    },
                    {
                    "title": "已开通",
                    "url": "b2"
                    }
                ]
                },
                {
                "title": "审批列表",
                "icon": "fa-apple",
                "children": [
                    {
                    "title": "待审批",
                    "url": "c1"
                    },
                    {
                    "title": "已完成",
                    "url": "c2"
                    }
                ]
                },
                {
                "title": "工单处理",
                "icon": " fa-windows",
                "children": [
                    {
                    "title": "待处理",
                    "url": "d1"
                    },
                    {
                    "title": "已完成",
                    "url": "d2"
                    }
                ]
                },
                {
                "title": "策略迁移",
                "icon": " fa-windows",
                "children": [
                    {
                    "title": "全部迁移",
                    "url": "e1"
                    },
                    {
                    "title": "部分迁移",
                    "url": "e2"
                    },
                    {
                    "title": "策略迁移记录",
                    "url": "e3"
                    }
                ]
                },
                {
                "title": "安全分析",
                "icon": " fa-windows",
                "children": [
                    {
                    "title": "概览",
                    "url": "f1"
                    },
                    {
                    "title": "策略风险分析",
                    "url": "f2"
                    },
                    {
                    "title": "策略变更",
                    "url": "f3"
                    },
                    {
                    "title": "策略优化分析",
                    "url": "f4"
                    },
                    {
                    "title": "安全基线扫描",
                    "url": "f5"
                    },
                    {
                    "title": "漏洞扫描",
                    "url": "f6"
                    },
                    {
                    "title": "检测告警",
                    "url": "f7"
                    }
                ]
                },
                {
                "title": "设备信息",
                "icon": " fa-windows",
                "children": [
                    {
                    "title": "设备信息预览",
                    "url": "g1"
                    },
                    {
                    "title": "网络拓扑",
                    "url": "g2"
                    },
                    {
                    "title": "添加新设备/IDC机房",
                    "url": "g3"
                    }
                ]
                },
                {
                "title": "系统管理",
                "icon": " fa-windows",
                "children": [
                    {
                    "title": "用户管理",
                    "children": [
                        {
                        "title": "账号管理",
                        "url": "h1-1"
                        },
                        {
                        "title": "角色管理",
                        "url": "h1-2"
                        }
                    ]
                    },
                    {
                    "title": "日志审计",
                    "children": [
                        {
                        "title": "登陆日志",
                        "url": "h2-1"
                        },
                        {
                        "title": "系统操作日志",
                        "url": "h2-2"
                        }
                    ]
                    },
                    {
                    "title": "系统配置",
                    "children": [
                        {
                        "title": "系统信息",
                        "url": "h3-1"
                        },
                        {
                        "title": "授权",
                        "url": "h3-2"
                        },
                        {
                        "title": "邮箱配置",
                        "url": "h3-3"
                        },
                        {
                        "title": "存储/备份",
                        "url": "h3-4"
                        },
                        {
                        "title": "其他",
                        "url": "h3-5"
                        }
                    ]
                    },
                    {
                    "title": "系统升级",
                    "url": "h4"
                    }
                ]
                }
            ],
            url: 'b1'
        }
    },
    methods:{
        show () {
            this.showDatePicker = true;
        },
        response (params) {
            console.log("组件里面触发啦",params)
        }
    } 
}
</script>

<style>
*{
  padding:0;
  margin:0;
  list-style:none;
}
.main{
    margin-top:50px;
    text-align: center;
}
input{
    text-align: center;
    width:120px;
    height:30px;
    outline:none;
    border:2px solid #afe;
    font-size: 20px;
    border-radius:30px;
    color:#aed;
}

</style>
