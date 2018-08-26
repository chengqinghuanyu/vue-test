<template>
    <div>
        <h2>表格组件的使用</h2>
        <el-table :data="tableData" style="width: 100%" stripe border :row-class-name="tableRowClassName" max-height="400" ref="selectTable" highlight-current-row @current-change="handleCurrentChange" :default-sort="{prop: 'date', order: 'zim'}" show-summary sum-text="合计" :span-method="summaryMths">
            <el-table-column type="selection" width="55" ></el-table-column>
            <el-table-column  type="index" width="50" fixed label="序号"></el-table-column>
            <el-table-column prop="date" label="日期" width="180" ></el-table-column>
            <el-table-column type="expand" label="详情">
                <template slot-scope="props">
                 <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="商品名称">
                        <span>{{ props.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="所属店铺">
                        <span>{{ props.row.shop }}</span>
                    </el-form-item>
                    <el-form-item label="商品 ID">
                        <span>{{ props.row.id }}</span>
                    </el-form-item>
                    <el-form-item label="店铺 ID">
                        <span>{{ props.row.shopId }}</span>
                    </el-form-item>
                    <el-form-item label="商品分类">
                        <span>{{ props.row.category }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址">
                        <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="商品描述">
                        <span>{{ props.row.desc }}</span>
                    </el-form-item>
                </el-form>
            </template>
            </el-table-column>
            <el-table-column label="基本信息">
                <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column label="地址">
                    <el-table-column prop="province" label="省市"></el-table-column>
                    <el-table-column prop="city" label="区"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                    <el-table-column prop="zip" label="邮编"></el-table-column>
                </el-table-column>
            </el-table-column>
            <el-table-column prop="beizhu" label="备注"  width="80" sortable :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"  :filter-method="filterTag">
                <template slot-scope="scope">
                    <el-tag
                    :type="scope.row.tag === '家' ? 'primary' : 'success'"
                    disable-transitions>{{scope.row.tag}}</el-tag>
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
                    <el-button type="danger" size="mini" @click="handleDelte(scope.$index,scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    <div style="margin-top: 20px">
        <el-button @click="setCurrent(tableData[0])">选中第一行</el-button>
        <el-button @click="setCurrent()">取消选择</el-button>
    </div>
    </div>
</template>
<script>
export default {
    name:"Tables",
    data(){
        var arr = [];
        var item={
          date: 20180824,
          name: '尹鹏孝',
          province: '北京',
          city: '北京',
          address: '天通苑北地铁',
          zip: 200,
          beizhu:'VVVMMMM',
          tag: '公司',
          id: 12987122,
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          shop: '王小虎夫妻店',
          shopId: '10333'
          };
          
        for(let i=0;i<100;i++){
            setTimeout(function(){
                !function(j){
                    var jd = JSON.stringify(item);
                    var ds = JSON.parse(jd);
                    ds.id=j;
                    var bk = Math.ceil(Math.random()*30);
                    ds.date=bk>20180824?bk:bk-7;
                    ds.name="张文远";
                    ds.shopId=j;
                    arr.push(ds);
                }(i)
            },i);
            
        }
        arr.push({
                date: '2018-08-24',
                name: '尹鹏孝',
                province: '北京',
                city: '北京',
                address: '天通苑北地铁',
                zip: 200,
                beizhu:'家',
                tag: '家',
                id: '12987122',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                shop: '王小虎夫妻店',
                shopId: '10333'
        })
        return {
            tableData:arr,
            currentRow: null
        }
    },
    methods:{
        tableRowClassName({row,rowIndex}){
            if(rowIndex === 1){
                return 'warning-row'
            }else if(rowIndex === 3){
                return 'success-row'
            }
            return ''
        },
        handleCurrentChange(row){
            console.log(row)
            this.currentRow = row;
        },
        setCurrent(val){
            console.log(val);
            //var bk = this.$refs.selectTable.queryAll(".el-table_1_column_1")
            //console.log(bk);
            console.log(this.tableData[0])
            this.$nextTick(()=>{
                this.$refs.selectTable.setCurrentRow(val)
            })
            
        },
        filterTag(){

        },
        handleDelte(index,row){

            console.log(index);
            console.log(row);
        },
        handleEdit(index,row){
            console.log(index);
            console.log(row);
        },
        summaryMths({ row, column, rowIndex, columnIndex }){
            if (rowIndex % 2 === 0) {
                if (columnIndex === 0) {
                    return [1, 2];
                } else if (columnIndex === 1) {
                    return [0, 0];
                }
            }
        }
    }
}
</script>
<style scoped>
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>


