<template>
  <div class="hello">
    <div id="example-3">
  <button @click="cust = !cust">
    Toggle render
  </button>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight" type="transition"
    :duration="{ enter: 5000, leave: 8000 }" appear mode="in-out">
    <p v-if="cust" key="custs">hello-cust</p>
    <p v-else  key="custsa">hello-cust-else</p>
  </transition>
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
    <button v-on:click="show = !show">
    Toggle
  </button>
    <transition name="fade">
      <p v-if="show">AAAA</p>
    </transition>

    <!--


      vue中的动画指令是被包裹在 transition中，
      动画包括进入和离开

      进入包括 
      name-enter
      name-enter-active,
      name-enter-to,
      name-leave
      name-leave-active
      name-laeve-to

----动画的几个阶段----
      name-enter,
      name-enter-active,
      name-enter-to,
      name-leave,
      name-leave-active,
      name-leave-to
    -->
    <button @click="show1=!show1">toggle</button>
<transition name="slide-fade">

  <div v-if="show1">
      展示show1
  </div>
</transition>


<button @click="showbounce=!showbounce">点击</button>
<transition name="bounce">
  <div v-if="showbounce"> bounce-to-bounce</div>
</transition>




  </div>

</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show:true,
      show1:true,
      showbounce:true,
      cust:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped stylus>
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
.fade-enter-active,.fade-leave-active{
  transition: opacity 0.5s;
}
.fade-enter,.fade-leave{
  opacity:0
}
.slide-fade-enter,.slide-fade-leave{
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter-active,.slide-fade-leave-active{
   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
