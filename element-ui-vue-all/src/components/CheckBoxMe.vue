<template>
    <div>
        <my-checkbox :all="MyAll" :indeter="MyIndeter" :names="MyName" :children="MyChildren" :sls="MySls"  @select-bk-op="selectAll" @select-this-datas="selectThisOptions"></my-checkbox>
    </div>
</template>
<script>
import MyCheckbox from './my-checkbox';
export default {
    name:'CheckBoxMe',
    data(){
        return {
            MyAll:false,
            MyIndeter:true,
            MyName:"",
            MySls:[],
            MyChildren:[]
        }
    },
    components:{
        'my-checkbox':MyCheckbox
    },
    created() {
        var datas = [ 
                    {
                        label:'上海',
                        value:'sh'
                    },
                    {
                        label:'北京',
                        value:'bj'
                    }
                    ]
    
    this.MyChildren=datas
    this.MyAll = false
    this.MyIndeter=false;
    this.MyName="全选";
    this.MySls=[{
                        label:'北京',
                        value:'bj'
                    }];
        
    },
    methods:{
        selectAll(val){
            if(val){
                this.MySls = this.MyChildren
                //this.selectThisOptions(true)
                //his.MyChildren = 
            }else{
                this.MySls =[];
                //this.selectThisOptions(false)
            }
            this.MyIndeter = !this.MyIndeter
            let checkedCount = val.length;
            console.log(this.MySls)
        },
        selectThisOptions(value){
            let checkedCount = value.length;
            this.MyIndeter = checkedCount > 0 && checkedCount <= this.MyChildren.length;
            console.log(checkedCount);
            console.log(this.MyChildren.length)
            if(checkedCount === this.MyChildren.length){
                this.MyAll = true
            }else{
                this.MyAll = false
            }
            //this.MyAll = checkedCount === this.MyChildren.length;
            
            console.log(this.MyIndeter)
            
        }
    },
}
</script>
<style scoped>

</style>

