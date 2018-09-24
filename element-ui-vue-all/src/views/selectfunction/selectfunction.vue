<template>
<div>
    <form action="">
        <div id="super_citys">
        <div class="provinces">
        <input class="input1" type="hidden" value="0" name="">
        <input class="input2" type="hidden" value="0" name="">
        <div>请选择省份</div>
        <ul class="shadow_ul">
        <li><input type="hidden" value="0"><span>请选择省份</span></li>
        </ul>
        </div>
        <div class="city">
        <input class="input1" type="hidden" value="0" name="">
        <input class="input2" type="hidden" value="0" name="">
        <div>请选择城市</div>
        <ul>
        <li><input type="hidden" value="0"><span>请选择城市</span></li>
        </ul>
        </div>
        <div class="area">
        <input class="input1" type="hidden" value="0" name="">
        <input class="input2" type="hidden" value="0" name="">
        <div>请选择地区</div>
        <ul>
        <li><input type="hidden" value="0"><span>请选择地区</span></li>
        </ul>
        </div>
        <input type="button" class="btn" value="提交">
        </div>
</form>
</div>
</template>
<script>
import "../../assets/css/pro-area-city-tree-combines.css";
import {city1,city2} from  "../../assets/js/city.js";
console.log(city1)
console.log(city2)
import "../../assets/js/index.js";
export default {

};
</script>
<style>
</style>

