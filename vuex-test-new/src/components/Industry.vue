<template>
    <div>
    <dl class="clearfix" v-for="item in listDatas" :key="item.fid">
    <dt class="all-title">{{item.fname}}:</dt>
        <dd class="all-title-dd selected-industry">
            <ul class="clearfix">
                <li v-for="fd in item.childs" :key="fd.cid">
                    <span>{{fd.name}}</span>
                    <div class="industry-s" style="" ref="gettop">
                        <template v-for="pf in fd.smallIndustry">
                            <a :href="pf.link"   :key="pf.id">
                                {{pf.content}}
                            </a> 
                        </template>
                    </div>
                </li> 
            </ul>
        </dd>
    </dl>
    </div>
</template>

<script>
export default {
    name:'Industry',
    props:['listDatas'],
    data(){
        return {
            
        }
    },
    mounted() {
        console.log(this.$refs.gettop);
    },
    methods:{
    }
}
</script>
<style scoped>
.clearfix:after{
    clear: both;
    content: "";
    width: 100px;
    zoom: 1;
    position: absolute;
    z-index: 0;
}
.all-title,.all-title-dd{
    float: left;
}
.all-title-dd{
    overflow: visible;
}
.industry-s{
    display: none;
    
}
.all-title-dd{
    margin-left: 0;
}
.selected-industry ul{
    list-style: none;
    position: relative;
    width: 795px;
    margin: 0;
}
.selected-industry li{
    float: left;
    margin-right: 10px;
    
}
.selected-industry li:hover{
    background: #eee
}
.selected-industry li span{
    position: relative;
}
.selected-industry li:hover .industry-s{
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 2;
    background: #eee;
    padding: 10px 20px 10px 40px;
}
.industry-s a{
   float: left;
}
</style>

