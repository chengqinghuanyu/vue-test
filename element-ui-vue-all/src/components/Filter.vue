<template>
<div>
    <h2>过滤</h2>
    <p>在需要对节点进行过滤时，调用 Tree 实例的filter方法，参数为关键字。需要注意的是，此时需要设置filter-node-method，值为过滤函数。</p>
    <el-input placeholder="输入关键字过滤" v-model="filterText"></el-input>
    <el-tree  class="filter-tree" :data="data2" :props="defaultProps" default-expand-all :filter-node-method="filterNode"  ref="tree2">
    </el-tree>
</div>
</template>
<script>
export default {
    name:'Fileter',
    data(){
        var arr2=[{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }];
        return {
            filterText:'',
            data2:arr2,
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    watch:{
        filterText(val){
            this.$refs.tree2.filter(val);
        }
    },
    methods:{
        filterNode(value,data){
            if(!value){
                return false;
            }
            return data.label.indexOf(value)!==-1;
        }
    }
}
</script>

<style scoped>

</style>

