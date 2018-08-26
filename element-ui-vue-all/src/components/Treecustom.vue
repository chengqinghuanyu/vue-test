<template>
    <div class="custom-tree-container">
        <h2>
            自定义节点内容
        </h2>
        <div class="block">
            <p>使用 render-content</p>
            <article>render-content需要指定渲染函数，该函数返回需要的节点内容即可，渲染函数的用法请参考 Vue 文档</article>
        </div>
        <el-tree :data="datas5" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false" :render-content="renderContent"></el-tree>

        <div class="block">
            <p>使用 slot-content</p>
            <article>使用 scoped slot 会传入两个参数node和data，分别表示当前节点的 Node 对象和当前节点的数据</article>
        </div>
        <el-tree :data="datas6"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
        <span class="custom-tree-node" slot-scope="{node,data}">
            <span>{{node.label}}</span>
            <span>
                <el-button type="text" size="min" @click="()=>append(data)">添加</el-button>
                <el-button type="text" size="min" class="warning" @click="()=>remove(node,data)">删除</el-button>
            </span>
        </span>
      </el-tree>
    </div>
</template>
<script>
 let id = 1000;
export default {
    name:'Treecustom',
    data(){
        const data = [{
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
            datas5:JSON.parse(JSON.stringify(data)),
            datas6:JSON.parse(JSON.stringify(data))
        }
    },
    methods:{
       append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>);
      }
    }
}
</script>
<style scoped>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>


