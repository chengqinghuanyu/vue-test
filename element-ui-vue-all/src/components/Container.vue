<template>
    <div>
        <h2>容器</h2>
        <el-container style="height:500px;border:1px solid #ddd">
            <el-aside width="200px" style="background-color:rgba(238,241,246)">
                <el-menu :default-openeds="['1','3']">
                    <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                        <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="3-1">选项一</el-menu-item>
                            <el-menu-item index="3-2">选项二</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <el-menu-item index="3-3">选项三</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="3-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
                </el-aside>
            <el-container>
                <el-header style="text-algin:right;font-size:12px;">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right:15px"></i>
                        <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>查看</el-dropdown-item>
                                <el-dropdown-item>新增</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                    </el-dropdown>
                     <span>尹鹏孝</span>
                </el-header>
                <el-main>
                    <el-table :data="tableData">
                        <el-table-column prop="date" label="日期" width="140">
                        </el-table-column>
                        <el-table-column style="color:blue" prop="name" label="姓名" width="120">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>


        </el-container>
    </div>
</template>
<script>
export default {
     name: 'Contain',
     data(){
         const item = {
             date:"2016-05-02",
             name:'尹鹏孝',
             address:"陕西商洛山阳"
         }
         return {
             tableData:Array(20).fill(item)
         }
     }
}
</script>
<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>


