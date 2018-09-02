<template>
    <div>

  <my-checkbox v-model="fruit.apple" value="apple"></my-checkbox><!-- 下行注释的语法糖 -->
        <!-- <my-checkbox :checked="fruit.apple" @change="val => {fruit.apple = val}" value="apple"></my-checkbox> -->
            
<my-checkbox v-model="fruit.peach" value="peach"></my-checkbox><!-- 下行注释的语法糖 -->
<!-- <my-checkbox :checked="fruit.peach" @change="val => {fruit.peach = val}" value="peach"></my-checkbox> -->
            

    </div>
</template>
<script>
import MyInputModel from './my-input-model'
export default {
    name:'MyModelTest',
    data() {
        return {
            fruit: {
                //数据
                apple: true,
                peach: false
            }
        }
    },
    components:{
        'my-checkbox':MyInputModel
    }
}
</script>
<style scoped>

</style>
