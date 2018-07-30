<template>
<div class="spec-list-v" :hidden="!isShow">
    <span @click="close" class="close">X</span>
    <ul class="spec-list-box" :id="foodsId">
        <li v-for="spec in specObj" class="spec-list">
            <span>{{spec.name}}</span>
            <span>原价：{{spec.price}}</span>
            <span v-if="spec.isDiscount=='1'">
                折扣价：{{spec.discountPrice}}
            </span>
            <template v-if="spec.num>0">
                <span @click="decspecnum(spec)">-</span>
                <span>{{spec.num}}</span>
            </template>
            <template>
                <span @click="addspecnum(spec)">+</span>
            </template>
            <div @click="showDetail(spec)">展示详情</div>
        </li>


    </ul>
  </div>
</template>
<script>
import bus from '../../eventBus/eventBus.js'
export default {
 name:'Spec',
 props:['specObj','isShow','foodsId'],
 data(){
     return {
         show:false
     }
 },
 created(){
     
 },
 mounted(){
    bus.$on('changes',(msg)=>{
            this.msg=msg;
            console.log('兄弟组件接收datas')
            console.log(this.msg)
            })
 },
 methods:{
     close(){
         this.$emit('setshow')
         //this.show = !this.show
     },
     decspecnum(obj){
         this.$emit('setDecspecnum',obj)
     },
     addspecnum(obj,foodsId){

         this.$emit('setAddspecnum',obj)
     },
     showDetail(fod){
         bus.$emit('details',fod);
     }
 }
}
</script>

<style scoped lang="stylus">
*
    padding:0
    margin:0
.spec-list-v 
    position :fixed
    left 0
    right 0
    bottom 0
    top 0
    background:rgba(0,0,0,0.8)
    z-index :10000   
    width 100%
    height 100%
.spec-list-box
    position:absolute
    left :0
    right: 0
    top: 30%
    color:#111
    background :#fff
    display:flex
    flex-flow:column
.close
    color #ffffff
    font-size 1.5rem       

</style>
