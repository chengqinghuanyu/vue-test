<template>
    <div>

        <el-tree :data="datas" :props="defaultProps" node-key="id" default-expand-all 
        @node-drag-start="handleDragStart"  
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"  
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"  
        @node-drag-drop="handleDragDrop" 
        draggable 
        :allow-drop="allowDrop" 
        :allow-drag="allowDrap" hightlight>

        </el-tree>
    </div>
</template>
<script>
export default {
    name:'Dragable',
    data(){
         var datas=[
            {
                label:'一级 1',
                id:1,
                children:[
                    {   id:2,
                        label:'二级 1-1',
                        children:[
                            {   
                                id:3,
                                label:'三级 1-1-1'
                            }
                        ]
                    }
                ]
            },
            {
                label:'一级 2',
                id:4,
                children:[
                    {   id:5,
                        label:'二级 2-1',
                        children:[
                            {   
                                id:6,
                                label:'三级 2-1-1',
                                children:[{
                                    id:7,
                                    label:'四级 2-1-1-1'
                                }]
                            },
                            {   
                                id:8,
                                label:'三级 2-1-2',
                                children:[{
                                    id:9,
                                    label:'四级 2-1-1-2'
                                }]
                            }
                        ]
                    }
                ]
            },
            {
                label:'一级 3',
                id:10,
                children:[
                    {   id:11,
                        label:'二级 2-1',
                        children:[
                            {   
                                id:12,
                                label:'三级 3-1-1',
                                children:[{
                                    id:13,
                                    label:'四级 3-1-1-1'
                                }]
                            }
                        ]
                    },
                    {   id:14,
                        label:'二级 2-2',
                        children:[
                            {   
                                id:15,
                                label:'三级 3-2-1',
                            },
                            {   
                            id:17,
                            label:'三级 3-2-2'
                            }
                           
                        ]
                    },
                     
                ]
            }
        ]
        return {
            datas:datas,
            defaultProps:{
                label:'label',
                children:'children'
            }
        }
    },
    methods:{
    handleDragStart(node,ev){
        console.log('drag-start',node)
    },
    handleDragEnter(draggingNode,dropNode,ev){
        console.log('tree-drag-enter',dropNode.label);
    },
    handleDragLeave(draggingNode,dropNode,ev){
        console.log('tree-drag-leave',dropNode.label)
    },
    handleDragOver(draggingNode,dropNode,ev){
        console.log('tree-drag-over',dropNode.label)
    },
    handleDragEnd(draggingNode,dropNode,dropType,ev){
        console.log('tree-drag-end',dropNode&&dropNode.label,dropType);
    },
    handleDragDrop(draggingNode,dropNode,dropType,ev){
        console.log('tree-drag-drop',dropNode.label,dropType);
    
    },
    allowDrop(draggingNode,dropNode,type){
        if(dropNode.data.label ==='二级 3-1'){
            return type!=='inner';
        }else{
            return true;
        }
    },
    allowDrap(draggingNode){
        return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
    }
    }
}
</script>
<style scoped> 

</style>


