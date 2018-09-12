<template>
    <form>
        <!-- <input :value="message"> -->
         <input v-model="message">
        <div>aa{{message+'ps'}}</div>
    </form>
</template>
<script>

import { mapState } from 'vuex';
export default {
    name:'From',
    computed:{
        //...mapState({
            //message:state=>state.obj.message
            message:{
                get(){
                    return this.$store.state.obj.message
                },
                set(value){
                    console.log(value)
                    this.$store.commit('getValue',value)
                }
            }
        //}),
    },
    methods:{
        // getValue(e){
        //     this.$store.commit('getValue',e.target.value)
        // }
    }
}
</script>
<style scoped>

</style>

