<template>
<div>
    
    --{{use.name}}---{{use.age}}
    <ul class="food-list-box">

      <li v-for="food in foods" :id="food.id" class="food-list">
        <img :src="food.mainImg">
        <div>菜品名称：{{food.name}}</div>
        <div>
        <span>原价:{{food.price}}</span>
        <span v-if="food.isDiscount=='1'">折扣价:{{food.discountPrice}}</span>
        </div>
        <!-- <span v-if="food.isSpec=='1'">
                <span @click="gethasSpec(food.hasSpec)">选规格</span>
        </span> -->
        <div class="controls-nums">
            
            
             
            
            <template v-if="food.isSpec=='1'" >
                <template v-if="food.nums>0">
                    <span class="dec" @click="decNums(food)">-</span>
                    <span class="nums">{{food.nums}}</span>
                </template>
               
                    <span @click="gethasSpec(food.hasSpec,food.id)">+</span>
            </template>
            <template v-else>
                 <template v-if="food.nums>0">
                    <span class="dec" @click="decNums(food)">-</span>
                    <span class="nums">{{food.nums}}</span>
                </template>
            <span class="add" @click="addNums(food)">+</span>
            </template>
        </div>
  </li>
    </ul>
    <Spec :foods-id="myId" :spec-obj="spec" :is-show="isShow" @setshow="getShow" @setDecspecnum="decSpecNum" @setAddspecnum="addSpecNum"></Spec>
    <Carts></Carts>
  </div>
</template>
<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import Spec from '../spec/spec'
import Carts from '../carts/carts'
import bus from '../../eventBus/eventBus.js'
export default {
 name:'foods',
 data(){
     return {
         spec:{
             type:Array(),
             default:[] 
         },
        isShow:false,
        myId:0
     }
 },
  computed:{
    ...mapGetters(['use','foods','carts']) 
  },
  methods:{
      gethasSpec(obj,id){
          console.log(obj)
          //return obj
          this.spec = []
          this.spec = obj;
          this.isShow = true
          this.myId = id
          //console.log(this.myId)
      },
      getShow(){
          this.isShow = false;
          console.log(this.isShow)
      },
      addNums(obj){
          console.log(obj);
          this.foods.map(function(value,index){
              console.log(value)
              if(value.id === obj.id){
                  value.nums += 1;
              }
          })
      },
      decNums(obj){
         this.foods.map(function(value,index){
              console.log(value)
              if(value.id === obj.id){
                  value.nums -= 1;
              }
          })
      },
      decSpecNum(obj){
          var that = this;
          this.foods.map(function(value,index){
              if(value.id === that.myId){
                  value.hasSpec.map(function(curV,curI){
                      if(curV.id === obj.id){
                          curV.num-=1;
                          value.nums-=1;
                      }
                  })
              }
          })
      },
      addSpecNum(obj){
          console.log(obj)
          console.log(this.myId);
          var that = this;
          that.foods.map(function(value,index){
              if(value.id === that.myId){
                  value.hasSpec.map(function(curV,curI){
                      if(curV.id === obj.id){
                          curV.num+=1;
                          value.nums+=1;
                      }
                  })
              }
          })
          
      },
    ...mapMutations({
      setUse:'SET_USE',
      setFoods:'SET_FOODS',
      setCart:'SET_CART'
    }),
    ...mapActions(['useAsyn','cartAsyn'])
    
  },
  components:{
      Spec,
      Carts
  }
}
</script>

<style scoped lang="stylus">
*
    padding:0
    margin:0
.food-list-box
    display:flex
    flex-flow:column
    box-sizing border-box
    .food-list
        width 50%
        box-sizing border-box
        img 
            width :100%
.controls-nums
    margin-top 0.9rem 
.dec,.add
    font-size 1rem
.nums
    font-size 1rem
    margin-left 0.5rem
    margin-right 0.5rem

</style>
