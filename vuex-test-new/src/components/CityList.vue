<template>
    <div>
        <ul>
            <li v-for="(item,index) in cityArr" @click="backCity(index)">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'CityList',
    data(){
        return {
            cityArr:['北京','上海','广州','深圳','西安']
        }
    },
    methods:{
        backCity(index){
            this.$store.dispatch('setCityName',this.cityArr[index])
        }
    }
}
</script>
