<template>
  <div class="hello">
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
      <li>{{cards}}</li>
      <li>{{reversedMessage()}}</li>
      <li>{{fullName}}</li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      card:'goodBye',
      msg: 'Welcome to Your Vue.js App',
      firstName: 'Foo   ffff',
      lastName: 'Bar ddd  fffklop'
      
     // fullName: 'Foo Bar dddddd'
    }
  },
  computed:{
    /*计算属性用在表达式逻辑相对复杂的地方，计算属性可以方便维护，带有缓存机制，减少计算次数提高性能，对于任何复杂逻辑，都应当使用计算属性*/
      cards:function(){
        return this.card.split('').reverse().join('');
      },
      fullName:{
        //return this.firstName+this.lastName
        get:function(){
            return this.firstName+this.lastName;
        },
        set:function(newValue){
            var names = newValue.split(' ');
            this.firstName = names[0];
            this.lastName = names[names.length-1]
        }
      },
      /* fullName:function(){
        计算属性既可以是一个对象的get,set方法的返回值，也可以是一个function方法
        return this.firstName+this.lastName
      } */
  },
  wath:{
    /*Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。*/
   /*  firstName:function(val){
      this.fullName = val+'   '+this.lastName;
    },
    lastName:function(val){
      this.fullName = this.firstName +" "+val
    } */
  },
  methods:{
    /*methos方法不会缓存数据*/
    reversedMessage:function(){
      return  this.card.split('').reverse().join('');
    }
  },

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
