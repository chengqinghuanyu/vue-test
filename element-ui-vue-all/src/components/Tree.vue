<template>
    <div>
        <router-link to="/tree/treecustom">自定义</router-link>
         <router-link to="/tree/filter">过滤</router-link>
         <router-link to="/tree/accordion">手拉风琴</router-link>
         <router-link to="/tree/dragable">可拓拽</router-link>
        
        <h2>基础用法</h2>
        <el-tree :data="datas" :props="defualtProps" @node-click="handleClick">
        </el-tree>
        <h2>可选择</h2>
        <el-tree  :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"></el-tree>
        <h2>懒加载自定义叶子节点</h2>
        <el-tree :props="props1" :load="loadNode1" lazy show-checkbox></el-tree>
        <h2>默认展开和默认选中</h2>
        <el-tree :data="datas2" show-checkbox node-key="id" :default-expanded-keys="[2,3]" :default-checked-keys="[5]" :props="defualtProps">
        </el-tree>
        <h2>树节点的选择 key方式</h2>
        <el-tree :data="datas3" show-checkbox node-key="id" ref="tree" highlight-current :props="defualtProps"></el-tree>
        <div>
            <el-button @click="getTreeKeys">通过key获取</el-button>
            <el-button @click="setTreeKeys">通过key设置</el-button>
            <el-button @click="resetChecked">清空</el-button>
        </div>

        <h2>树节点的选择 node方式</h2>
        <el-tree :data="datas4" default-expand-all show-checkbox node-key="id" ref="treenode" highlight-current :props="defualtProps"></el-tree>
        <div>
            <el-button @click="getCheckedNodes">通过node获取</el-button>
            <el-button @click="setCheckedNodes">通过node设置</el-button>
            <el-button @click="resetChecked">清空</el-button>
        </div>
        <router-view ></router-view>

    </div>
</template>
<script>
export default {
    name:"Tree",
    data(){
        var arr = [
            {
                label:'一级 1',
                children:[
                    {
                        label:'二级 1-1',
                        children:[{
                            label:'三级 1-1-1'
                        }]
                    }
                ]
            },
            {
                label:'一级 2',
                children:[
                    {
                        label:'二级 2-1',
                        children:[{
                            label:'三级 2-1-1'
                        }]
                    },
                    {
                        label: '二级 2-2',
                        children: [{
                        label: '三级 2-2-1'
                        }]
                    }
                ]
            },
            {
                label:"一级 3",
                children:[
                    {
                        label:'二级 3-1',
                        children:[
                            {
                                label:'三级 3-1-1'
                            }
                        ]
                    },
                    {
                        label:'二级 3-2',
                        children:[
                            {
                                label:'三级 3-2-1'
                            }
                        ]
                    },
                    {
                        label:'二级 3-3',
                        children:[
                            {
                                label:'三级 3-3-1',
                                children:[
                                    {label:'四级 4',
                                        children:[
                                            {label:'四级 4-1'}
                                        ]
                                    }

                                ]
                            }
                        ]
                    }
                ]
            }
        ];
        var arr2=[{
            label:'一级 1',
            id:1,
            children:[
                {
                    id:4,
                    label:'二级 1-1',
                    children:[
                        {
                            id:9,
                            label:'三级 1-1-1'
                        },
                        {
                            id:10,
                            label:'三级 1-1-2'
                        }

                    ]
                }
            ]
        },
        {
            label:'一级 2',
            id:2,
            children:[
                {
                    id:5,
                    label:'二级 2-1',
                    children:[
                        {
                            id:11,
                            label:'三级 2-1-1'
                        },
                        {
                            id:12,
                            label:'三级 2-1-2'
                        }

                    ]
                },
                {
                    id:6,
                    label:'二级 2-2',
                    children:[
                        {
                            id:13,
                            label:'三级 2-2-1'
                        },
                        {
                            id:14,
                            label:'三级 2-2-2'
                        }

                    ]
                }
            ]
        },
        
        {
            label:'一级 3',
            id:3,
            children:[
                {
                    id:9,
                    label:'二级 3-1',
                    children:[
                        {
                            id:16,
                            label:'三级 3-1-1'
                        },
                        {
                            id:17,
                            label:'三级 3-1-2',
                             disabled: true
                        }

                    ]
                },
                {
                    id:10,
                    label:'二级 3-2',
                    children:[
                        {
                            id:18,
                            label:'三级 3-2-1'
                        },
                        {
                            id:119,
                            label:'三级 3-2-2'
                        }

                    ]
                }
            ]
        }
        ];
        var arr3 = [{
            id:1,
            label:'一级 1',
            children:[{
                id:4,
                label:'二级 1-1',
                children:[{
                    id:9,
                    label:'三级 1-1-1'
                },{
                    id:10,
                    label:'三级 1-1-2'
                }]
            }]
        },
        {
            id:2,
            label:'一级 2',
            children:[{
                id:5,
                label:'二级 2-1'
            },
            {
                id:6,
                label:'二级 2-2'
            }]
        },
        {
            id:3,
            label:'一级 3',
            children:[{
                id:7,
                label:'二级 3-1'
            },
            {
                id:8,
                label:'二级 3-2'
            }]
        }];
        var arr4 = [{
            id:1,
            label:'一级 1',
            children:[{
                id:4,
                label:'二级 1-1',
                children:[{
                    id:9,
                    label:'三级 1-1-1'
                },{
                    id:10,
                    label:'三级 1-1-2'
                }]
            }]
        },
        {
            id:2,
            label:'一级 2',
            children:[{
                id:5,
                label:'二级 2-1'
            },
            {
                id:6,
                label:'二级 2-2'
            }]
        },
        {
            id:3,
            label:'一级 3',
            children:[{
                id:7,
                label:'二级 3-1'
            },
            {
                id:8,
                label:'二级 3-2'
            }]
        }];
        
        return {
            datas:arr,
            datas2:arr2,
            datas3:arr3,
            datas4:arr4,
            defualtProps: {
                children: 'children',
                label: 'label'
            },
            props:{
                label:'name',
                children:'zones'
            },
            count:1,
            props1:{
                label:'name',
                children:'zones',
                isLeaf:'leaf'
            }
        }
    },
    methods:{
        handleClick(data){
            console.log(data)
        },
        handleCheckChange(data,checked,indeterminate){
            console.log(data,checked,indeterminate)
        },
        handleNodeClick(data){
            console.log(data)
        },
        loadNode(node,resolve){
            if(node.level===0){
                return resolve([{name:'region1'},{name:'regine2'}])
            }
            if(node.level>3){
                return resolve([])
            }
            var hasChild;
            if(node.data.name === 'region1'){
                hasChild = true;
            }else if(node.data.name === 'region2'){
                 hasChild = false;
            }else{
                 hasChild = Math.random() > 0.5;
            }

            setTimeout(()=>{
                var data;
                if(hasChild){
                    data=[{
                        name:'zone'+this.count++
                    },{
                        name:'zone'+this.count++
                    }]
                }else{
                    data=[];
                }
                resolve(data);
            },500)
        },
        loadNode1(node,resolve){
            if(node.level === 0){
                return resolve([{name:'regone'}])
            }
            if(node.level>8){
                return resolve([]);
            }
            setTimeout(() => {
                const data=[{
                    name:'leaf',
                    leaf:true
                },{
                    name:'zone'
                }];
                resolve(data);
            },500);
        },
        getTreeKeys(){
            console.log(this.$refs.tree.getCheckedKeys());
        },
        setTreeKeys(){
             this.$refs.tree.setCheckedKeys([2]);
        },
        resetChecked(){
            this.$refs.tree.setCheckedKeys([]);
        },
        /*获取和修改节点难道只能通过它固定的方法来取吗*/
        getCheckedNodes(){
            console.log(this.$refs.treenode.getCheckedNodes());
        },
        setCheckedNodes(){
             this.$refs.treenode.setCheckedNodes([{
                id: 5,
                label: '二级 2-1'
                }, {
                id: 9,
                label: '三级 1-1-1'
            }]);
        },
        resetChecked(){
            this.$refs.treenode.setCheckedNodes([]);
        }
    }
}
</script>
<style scoped>

</style>


