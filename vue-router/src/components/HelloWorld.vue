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
    </ul>
    <router-link to="home1">home1</router-link>
    <!--router replace会调用 router.repalce()-->
    <router-link :to="{path:'home'}" replace>home</router-link>

    <router-link :to="{ name:'user', params: { userId: 123 }}">User</router-link>

    <!--append-->
    <router-link :to="{ path: 'relative/path'}" append :active-class="bs">add  </router-link>

    <router-link tag="div">hello-tag</router-link>
    <router-link to="/" exact>方法</router-link>

<transition>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</transition>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<script>
/*
export default {
  var RouteCOnfig={
    path:'/a',
    component:GoHome,
    name:'gohome',
    components:{
      a,b
    },
    redirect:function(){}||'/'||location,
    props:false,
    alias:'aa',
    children:[
      {
          name:'aa',
          component:Gos,
      }
    ],
    beforeEnter:
  };
  model="hash"(所有)||'history'(h5)||'abstract'(node)
  base:'/app/'

  router.app({

  })

  router.mode=""

  router.currentRoute

  router.push(location,complate,onAbort);
  router.replace(location,complate,onAbort);
  router.go();
  router.back();
  router.forward();

  router.resolve(location,current,append);
  router.addRoutes([
    'a',
    'b'
  ])
  router.onReady(function go(){

  })

  router.onError(function(){
    this.$router
    this.$route
    $route.name
    $route.redirectedFrom

    $route.matched//路由的嵌套的值
    $route.hash
    $route.path
    $route.params
    $route.query
    $route.fullPath
  })

}
*/
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
