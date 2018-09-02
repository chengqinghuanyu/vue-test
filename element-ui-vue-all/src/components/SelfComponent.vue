<template>
    <div>
        <my-select :selected-data="myDatas"></my-select>
        <div>
            <el-input v-model="aa">
                 <template slot="prepend">Http://</template>
            </el-input>
        </div>
    </div>
</template>
<script>
import MySelect from './my-select'
export default {
    components:{
        'my-select':MySelect
    },
    name:'SelfComponent',
    data(){
        return {
            aa:"'",
            myDatas:{
                title:'商品名称',
                options:[{
                    label:'电脑',
                    value:'diannao'
                },
                {
                    label:'电视',
                    value:'dianshi'
                }],
                value:'',
                myclass:'aa',
                size:'small'
            }
        }
    }
}
</script>
<style scoped>
    .aa{
        display: flex;
    }
</style>


