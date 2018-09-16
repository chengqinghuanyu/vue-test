<template>
  <div class="block">
    <span class="demonstration">推荐时间</span>
    <el-date-picker
      v-model="value4"  unlink-panels="false"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    name:'TimeRange',
    data() {
      return {
        value4: [new Date(2014, 0, 1, 0, 0), new Date(2018, 8, 18, 18, 10)],
      };
    }
  };
</script>