<template>
    <div>
        <h2>单选按钮</h2>
        <el-radio v-model="radiom" label="1" :disabled="true">
            备选项目
        </el-radio>
        <el-radio v-model="radiom" label="2" >
            备选项目
        </el-radio>
        <h2>单选按钮组</h2>
        <el-radio-group v-model="radio2" @change="mychange">
            <el-radio :label="3" >备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
        <h2>按钮组样式</h2>
        <el-radio-group v-model="radio3">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="南京"></el-radio-button>
            <el-radio-button label="西安"></el-radio-button>
        </el-radio-group>
        <el-radio-group v-model="radio4" size="mini">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="南京"></el-radio-button>
            <el-radio-button label="西安"></el-radio-button>
        </el-radio-group>
        <el-radio-group v-model="radio5" size="small">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="南京"></el-radio-button>
            <el-radio-button label="西安"></el-radio-button>
        </el-radio-group>
        <h2>带边框的按钮</h2>
        <el-radio-group  size="mini" v-model="radio6">
            <el-radio border label="1">备选1</el-radio>
            <el-radio border label="2" disabled>备选1</el-radio>
        </el-radio-group>
    </div>
</template>
<script>
export default {
    name:'Radio',
    data(){
        return {
            radiom:'a',
            radio2:3,
            radio3:'上海',
            radio4:'上海',
            radio5:'上海',
            radio6:'2'
        }
    },
    methods:{
        mychange(data){
            console.log(data)
        }
    }
}
</script>
<style scoped>

</style>


