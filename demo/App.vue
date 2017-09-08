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
                "title": "testa",
                "icon": "fa-apple",
                "children": [
                    {
                    "title": "testa1",
                    "url": "c1"
                    },
                    {
                    "title": "testa2",
                    "url": "c2"
                    }
                ]
                },
                {
                "title": "testb",
                "icon": " fa-windows",
                "children": [
                    {
                    "title": "testb1",
                    "url": "d1"
                    },
                    {
                    "title": "testb2",
                    "url": "d2"
                    }
                ]
                },
                {
                "title": "testc",
                "icon": " fa-windows",
                "children": [
                    {
                    "title": "testc1",
                    "url": "e1"
                    },
                    {
                    "title": "testc2",
                    "url": "e2"
                    },
                    {
                    "title": "testc3",
                    "url": "e3"
                    }
                ]
                },
                {
                "title": "testd",
                "icon": " fa-windows",
                "children": [
                    {
                    "title": "testd1",
                    "url": "f1"
                    },
                    {
                    "title": "testd2",
                    "url": "f2"
                    },
                    {
                    "title": "testd3",
                    "url": "f3"
                    },
                    {
                    "title": "testd4",
                    "url": "f4"
                    },
                    {
                    "title": "testd5",
                    "url": "f5"
                    },
                    {
                    "title": "testd6",
                    "url": "f6"
                    },
                    {
                    "title": "testd7",
                    "url": "f7"
                    }
                ]
                },
                {
                "title": "testf",
                "icon": " fa-windows",
                "children": [
                    {
                    "title": "testf1",
                    "url": "g1"
                    },
                    {
                    "title": "testf2",
                    "url": "g2"
                    },
                    {
                    "title": "testf3",
                    "url": "g3"
                    }
                ]
                },
                {
                "title": "testg",
                "icon": " fa-windows",
                "children": [
                    {
                    "title": "testg1",
                    "children": [
                        {
                        "title": "testg11",
                        "url": "h1-1"
                        },
                        {
                        "title": "testg12",
                        "url": "h1-2"
                        }
                    ]
                    },
                    {
                    "title": "testg2",
                    "children": [
                        {
                        "title": "testg21",
                        "url": "h2-1"
                        },
                        {
                        "title": "testg22",
                        "url": "h2-2"
                        }
                    ]
                    },
                    {
                    "title": "testg3",
                    "children": [
                        {
                        "title": "testg31",
                        "url": "h3-1"
                        },
                        {
                        "title": "testg32",
                        "url": "h3-2"
                        },
                        {
                        "title": "testg33",
                        "url": "h3-3"
                        },
                        {
                        "title": "testg34",
                        "url": "h3-4"
                        },
                        {
                        "title": "35",
                        "url": "h3-5"
                        }
                    ]
                    },
                    {
                    "title": "testg4",
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
