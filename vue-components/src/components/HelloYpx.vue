<template>
  <div class="Ypx">
      {{msg}}ppppp
      <slot name="aaa">kiopl----</slot>
      <slot name="bbb"></slot>
  </div>
</template>


<script>

export default {
  name: 'HelloYpx',
  //inheritAttrs: false,
  inheritAttrs:false,//禁止继承属性
  model:{
    prop:'checked',
    event:'change'
  },
  computed:{
    inputListener:function(){
      var vm = this;
      return Object.assign({},this.$listeners,{
        input:function(event){
          console.log(11);
          vm.$emit('input',event.target.value)
        }
      })
    }
  },
  props:{
    checked:{
      type:Boolean,
      defualt:true
    },
    propA:{
      defualt:100,
      type:Number
    },
    propB:{
      type:Function,
      defualt:function(){
        return {hello:'hi'}
      }
    }
  },
  data () {
    return {
      msg: 'Ypx'
    }
  },
  methods:{
    goit(){
      this.$emit('big-bounse','ouy')
    },
    onFocus(){
      console.log(111);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


<!--插槽时的规则

父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。

父组件的内容在父组件调用，子组件内容在子组件调用
-->
