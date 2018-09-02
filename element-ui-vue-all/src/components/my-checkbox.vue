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
        children:Array,
        value:String
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
            const formData = { ...this.sls }
            // 设置默认值
            this.sls.forEach(({ key, value }) => {
            if (formData[key] === undefined || formData[key] === null) {
            formData[key] = value
            }
            })
            this.$emit('update:select-bk-op',
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

