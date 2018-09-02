<template>
    <div>
    <el-checkbox v-model="all" :indeterminate="indeter" @change="selectAll" :label="names"></el-checkbox>
    <el-checkbox-group v-model="sls" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="mychildren in children" :label="mychildren.label" :key="mychildren.value" >
            {{mychildren.label}}
        </el-checkbox>
    </el-checkbox-group>
    </div>

</template>
<script>
export default {
    name:'MyCheckbox',
    props:{
        
        indeter:Boolean,
        names:String,
        children:Array
    },
    computed: {
    },
    data(){
        return {
            all:"",
            sls:[]
        }
    },
    methods:{
        selectAll(value){
            console.log(value)
            
            this.$emit('select-bk-op',
            value);
        },
        handleCheckedCitiesChange(value){

            this.$emit('select-this-datas',value)
        }
    },
    watch:{
        
    }
}
</script>
<style scoped>

</style>

