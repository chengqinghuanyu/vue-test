<template>
<div>
  <el-select v-model="myOtpValue"
    multiple
    filterable
    remote
    reserve-keyword
     placeholder="请选择职位对接人"
    :remote-method="remoteMethod"
    :loading="loading" :popper-append-to-body="true" @change="setCurDatas" @blur="getCurDatas">
    <el-option
      v-for="item in myOptions"
      :key="item.id"
      :label="item.label"
      :value="item.value" >
       <span style="float: left">{{ item.label }}</span>
       <span style="float: left">{{ item.id }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </el-option>
  </el-select>
  </div>
</template>

<script>
  export default {
    props:[
        'states',
    ],
    data() {
      return {
        myOptions:[],
        myOtpValue: [],
        loading:false
      }
    },
    mounted() {
       //console.log(this.states)
        var myobj = this.states
        this.newStates = JSON.parse(JSON.stringify(myobj));
        //console.log(this.newStates)
        this.list = this.newStates.map(item => {
        return { 
            value: item.value,
            id: item.id,
            label: item.label 
            };
      });
    },
    methods:{
        remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.myOptions = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
          console.log(this.myOptions)
        } else {
          this.myOptions = [];
        }


        
      },
      getCurDatas(obj){
          this.$emit('my-selectval',this.myOptions,obj)
      },
      setCurDatas(obj){
          this.$emit('my-set-selectval',obj)
      }
    }
  }
</script>