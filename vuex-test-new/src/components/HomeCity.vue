<template>
    <div>
        {{city}}
    </div>

</template>
<script>
export default {
    name:'HomeCity',
    computed:{
        city(){
            //return this.$store.state.city
            return this.$store.getters.getCityFn
        }
    },
    data(){
        return {}
    }
}
</script>

