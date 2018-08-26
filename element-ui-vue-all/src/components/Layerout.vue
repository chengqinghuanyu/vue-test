
<template>
<div>
  <h2>布局</h2>
<el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        
    </el-row>
    <el-row :gutter="40">
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>

<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" justify="center" :gutter="30">

  <el-col :span="6">
    <div class="grid-content bg-purple"></div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content bg-purple-light"></div>
  </el-col>
</el-row>

<el-row :gutter="40">
  <el-col :sm="8" :xm="6" :lg="3" :xl="7">
    <div class="grid-content bg-purple"></div>
  </el-col>
  <el-col :sm="4" :xm="6" :lg="9" :xl="5">
    <div class="grid-content bg-purple-light"></div>
  </el-col>
  <el-col :sm="4" :xm="6" :lg="9" :xl="5">
    <div class="grid-content bg-purple"></div>
  </el-col>
  <el-col :sm="8" :xm="6" :lg="3" :xl="7">
    <div class="grid-content bg-purple bg-purple-light"></div>
  </el-col>
</el-row>
</div>
</template>
<script>
export default {
  name:"Layerout"
}
</script>
<style scoped>

.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

