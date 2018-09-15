<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>vuex-操作数据</h2>
    <div>{{count}}</div>
    <button @click="add">增加</button>
    <button @click="dest">减少</button>
    <h2>vuex-修改数据同级组件</h2>
    <CityList></CityList>
    <HomeCity></HomeCity>
    <h2>vuex-设置表单的双向数据绑定</h2>
    <Form></Form>
    <h2>get请求数据</h2>
    <ul>
      <li v-for="m in list" :key="m.id">
         <span>{{m.name}}</span>--<span>{{m.num}}</span>
         <span>{{m.age}}</span>--<span>{{m.sex}}</span>
      </li>
    </ul>
    <h2>处理POST请求</h2>
    <div><label >用户名</label>
    <input v-model="uesrInfo.name">
    </div>
    <div>
    <label >电话</label>
    <input v-model="uesrInfo.tel">
    </div>
    <div>
    <label>地址</label>
    <input v-model="uesrInfo.address">
    </div>
    <div>
    <label>图像</label>
    <input v-model="uesrInfo.himg">
    </div>
    <button @click="submit">提交</button>

    <h2>设定区域</h2>
    <textarea-compute :max-length="myMaxLength" :my-placeholder="myPlaceholder" @get-area-data="getAreaDatas" :supser-class="supserClass"></textarea-compute>

    <textarea-compute :max-length="myMaxLength" :my-placeholder="myPlaceholder" @get-area-data="getAreaDatas" :supser-class="myClass"></textarea-compute>
  </div>
</template>

<script>
import CityList from './CityList'
import HomeCity from './HomeCity'
import Form from './Form'

import TextareaCompute from './TextareaCompute'
export default {
  name: 'HelloWorld',
  components:{
    CityList,HomeCity,Form,TextareaCompute
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  data () {
    return {
      msg: 'vue精进',
      list:[],
      uesrInfo:{
        name:'',
        address:'',
        tel:'',
        himg:''
      },
      myMaxLength:300,
      myPlaceholder:'请输入',
      supserClass:'a-sp',
      myClass:'bp'
      
    }
  },
  created() {
    console.log(11)
    let that = this;
    this.$axios.get('/api/getdatas',{
      params: {
        ID: 12345
      }
    }).then(function(res){
      console.log(res)
      if(res.data.data.length){
        that.list = res.data.data
        console.log(that.list)
      }
    }).catch(function(err){
      console.log(err)
    })
  },
  methods:{
    add:function(){
      //this.$store.mutations.commit('increment')
      //return this.$store.state.count++
      this.$store.commit('increment')
      //this.$store.dispatch('metype',this.$store.state)
    },
    dest(){
      this.$store.commit('desincurrent')
    },
    submit(){
      let that = this;
      that.uesrInfo = JSON.parse(JSON.stringify(that.uesrInfo));
      this.$axios.post('/api/submit/userinfo',{
          name:that.uesrInfo.name,
          address:that.uesrInfo.address,
          tel:that.uesrInfo.tel,
          himg:that.uesrInfo.himg
      }).then(function(res){
        console.log(res)
      }).catch(function(err){
        console.log(err)
      })
      
    },
    getAreaDatas(v){
      console.log(v);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
