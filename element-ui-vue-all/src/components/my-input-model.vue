<template>
    <div><span>{{value}}</span><input type="checkbox" :checked="checked" @change="doThis" :value="value"/></div>
</template>
<script>
export default {
    name:'MyInputModel',
    model: {
        prop: 'checked',
        event: 'change'
        },
    props: {
        checked: Boolean,
        value: String
        },
    methods: {
        doThis() {
            this.$emit('change', !this.checked);
        }
    }
}
</script>
<style scoped>

</style>
