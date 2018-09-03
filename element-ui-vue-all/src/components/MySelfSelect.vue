<template>
    <div>
        <my-selec :select-width="mysleWidth" :subject="mySubject" :select-content="myselectContent" @changeSelect="changeData" >
        </my-selec>
    </div>
</template>
<script>
import MySelfSelects from './my-self-selects.vue'

export default {
    name:'MySelfSelect',
    components:{
        'my-selec':MySelfSelects
    },
    data(){
        return {
            mysleWidth:200,
            mySubject:[
                {value:4,text:"小张"},
                {value:1,text:"小李"}, 
                {value:2,text:"小王"},
                {value:3,text:"小明"}],
            myselectContent:{
                value:0,text:"请选择"
            }
        }
    },
    methods:{
        changeData(a,b){
            console.log(a)
            console.log(b)
        }
    }
}
</script>
<style scoped>

</style>

