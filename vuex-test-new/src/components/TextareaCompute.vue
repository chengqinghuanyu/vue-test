 <template>
 <div :class="{'textarea-limits':myClass}">
  <textarea :class="[supserClass]" :maxlength="maxLength" @input="descArea" v-model="dataIntroduct" :placeholder="myPlaceholder"></textarea>
  <span class="num-desc">{{dataIntroduct.length}}/{{maxLength}}</span>
  </div>


  
 </template>
<script>
export default {
    name:'TextareaCompute',
    props:{
        maxLength:{
            type:Number,
            default:200
        },
        myPlaceholder:{
            type:String,
            default:'myPlaceholder'
        },
        myClass:{
            type:Boolean,
            default:true
        },
        supserClass:{
            type:String,
            default:'set-limite-area'
        }
    },
    data(){
        return{
        dataSurplus:'',
        dataIntroduct:''
        }
    },
    methods:{
        descArea(){
            var textVal = this.dataSurplus.length;
                this.surplus = this.dataMaxLength - textVal;
            this.$emit('get-area-data',this.dataIntroduct)
        }
    }
}
</script>
<style scoped>
.textarea-limits{
 
}
.textarea-limits .a-sp{
  color: #42b983;
  background: #000;
   width: 600px;
  min-height: 200px;
}
.bp{
    width: 300px
}
</style>

