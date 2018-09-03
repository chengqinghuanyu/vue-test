<template>
    <div>
    <h2>省市县级联</h2>
      <ca-area-data></ca-area-data>
      <h2>过滤数字后两位：</h2>
      <input class="number__input" type="number" @input="oninput" :placeholder="placeholder">
    </div>
    
</template>
<script>
import chinaproareadata from './china-pro-area-data'
export default {
    name:'ChinaProAreaData',
    components:{
        'ca-area-data':chinaproareadata
    },
    data(){
        return {
            placeholder: '请输入数值'
            }    
    },
    computed:{
        inpNum:{
            get:function(){
                return this.oldNum;
            },
            set:function(newValue){
                this.oldNum=newValue.replace(/[^\d]/g,'');
            }
        }
    },
    methods:{
         oninput(e) {
        // 通过正则过滤小数点后两位
        e.target.value = (e.target.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null;
        console.log(e.target.value)
    }
    }
}
//
</script>

<style>
input[type=number].number__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.number__input {
  border: 1px solid #ccc;
}
</style>

