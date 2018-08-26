<template>
    <div>
        <h2>手拉风琴</h2>
        <el-tree accordion :data="datas" :props="defaultProps" show-checkbox>
        </el-tree>
    </div>
</template>
<script>
export default {
    name:'Accordion',
    data(){
        var data=[
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
                                label:'三级 2-1-1'
                            }
                        ]
                    }
                ]
            }
        ]
        return {
            datas:data,
            defaultProps:{
                children: 'children',
                label: 'label'
            }
        }
    }
}
</script>

