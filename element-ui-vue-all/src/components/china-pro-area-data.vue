<template>
    <div>
        <el-cascader
 
      size="large"
 
      :options="options"
 
      v-model="selectedOptions"
 
      @change="handleChange"></el-cascader>
    </div>
</template>
<script>
import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'
export default {
    name:'chinaproareadata',
     data () {
      return {
 
        options: regionData,
 
        selectedOptions: []
 
      }
 
    },
 
 
 
    methods: {
 
      handleChange (value) {
 
        console.log(value)
 
      }
 
    }

}
</script>
<style scoped>

</style>

