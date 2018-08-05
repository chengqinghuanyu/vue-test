<template>
  <div class="hello">
    <keep-alive>
      <hello-ypx v-bind:is="currentTabComponent">
        <div  slot="bbb">ploo</div>
      </hello-ypx>
    </keep-alive>

    <div>

        <hello-ypx>
        <div  slot="bbb">ploo</div>
      </hello-ypx>
    </div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <div>
      <input type="checkbox" :checked="checked" @change="$emit('change',$event.target.checked)">
      <input @focus.native="onFocus" placeholder="哈哈哈">
    </div>

  </div>
</template>


<script>
import HelloYpx from '@/components/HelloYpx'
export default {
  name: 'HelloWorld',
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    goit(){
      this.$emit('big-bounse','ouy')
    },
    onFocus(){
      console.log(111);
    }
  },
  components:{
    HelloYpx
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

<!--
动态组件的keep-alive用法：
keep-alive用于缓存组件及其数据，避免多次渲染带来的性能和体验。


-->
