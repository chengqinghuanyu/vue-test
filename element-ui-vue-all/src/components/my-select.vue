<template>
    <div class="mgtag">
        <div  class="set-flex el-input-group__prepend" v-text="selectedData.title" :class="selectedData.myclass"></div>
        <el-select class="my-bg-tg" v-model="selectedData.value" :size="selectedData.size">
            <el-option v-for="item in selectedData.options" :key="item.value" :label="item.label" :value="item.value" ></el-option>
        </el-select>
    </div>
</template>
<script>
export default {
    name:'MySelect',
    props:{
        selectedData:{
            type:Object,
            default:function(){
                return {
                    title:'',
                    options:[],
                    value:'',
                    myclass:'',
                    size:''
                }
            }
        }
    },
    data(){
        return {
            
        }
    }
}
</script>
<style scoped>
.mgtag{
    display: flex;
}
.set-flex{
    padding: 3px 20px;
    width: 100%;
}
</style>


