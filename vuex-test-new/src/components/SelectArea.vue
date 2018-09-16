<template>
    <div class="aui_state_box">
        <div class="aui_state_box_bg"></div>  
        <div class="aui_alert_zn aui_outer">            
            <div class="aui_inner">                    
            <div class="aui_titleBar">
                <div class="aui_title" style="cursor: move;">选择城市信息</div>
                <a href="javascript:;" class="aui_close" @click="close()">×</a>
            </div>                            
            <div class="aui_iconBg" style="background: transparent none repeat scroll 0% 0%;"></div>                      
            <div class="aui_content" style="padding: 0px; position:relative">
                <div id="" style="width: 900px; position:relative;">
                    <div class="data-result">
                        <em>最多选择 <strong>{{maxLength}}</strong> 项</em>
                        <span v-for="item in selected" :key="item.code"  class="svae_box aui-titlespan" code="item.code" name="item.name" @click="removeSpanArea(item)">{{item.name}}
                            <i>×</i>
                        </span>
                        </div>
                        <div class="data-error" style="display: none;">
                            最多只能选择 3 项
                        </div>                          
                        
                    <div class="data-tabs">
                        <ul>
                            <li @click="removeNodeArea('all')" data-selector="tab-all" class="active">
                                <a href="javascript:;">
                                    <span>全部</span><em></em>
                                </a>
                            </li>
                            <li v-for="item in aTatas" :key="item.code" data-code="item.code" data-name="item.name" class="active" @click="removeNodeArea('sub',item.code)">
                                <a href="javascript:;">
                                    <span>{{item.name}}</span><em></em>
                                </a>
                            </li>
                        </ul>
                        </div>
                        <div class="data-container data-container-city">
                        <div class="view-all" v-if="isAll">                             
                             <p class="data-title">热门城市</p>                              <div class="data-list data-list-hot">                              <ul class="clearfix">
                                 <li v-for="item in datahotcityxz" :key="item.code">
                                     <a  data-code="item" data-name="dataarrary[item][0]" class="d-item" @click="selectProvince('sub',dataarrary[item],item)">
                                         {{dataarrary[item][0]}}
                                         <label>0</label>
                                     </a>
                                </li>
                                </ul>
                                </div>
                                <p class="data-title">全部省份</p>                            <div class="data-list">
                                    <ul class="clearfix">
                                        <li v-for="item in dataCityxz" :key="item.code"><a href="javascript:;" data-code="item" data-name="dataarrary[item][0]" class="d-item" @click="selectProvince('sub',dataarrary[item],item)">{{dataarrary[item][0]}}<label>0</label></a>
                                        </li>
                                    </ul> 
                                </div>
                            </div>
                            <ul class="clearfix"  v-if="isSub">
                                <li class="" style="width:100%">
                                    <a href="javascript:;" class="d-item" data-code="selecteData.name" data-name="" @click="selectitemArea(selecteData)">{{selecteData.name}}<label>0</label></a>
                                </li>
                                <li v-for="item in  relations[con]" :key="item" >
                                    <a href="javascript:;" class="d-item" data-code="item" data-name="dataarrary[item][0]" @click="selectProvince('sub',dataarrary[item],'')">{{dataarrary[item][0]}}<label>0</label></a>
                                </li>
                                

                            </ul>
                        </div>
                        </div>                               
                        </div>                                               
                    </div>                                       
        <div class="aui_buttons">
            <button class="aui-btn aui-btn-primary" @click="saveCity" type="button">确定</button>
            <button class="aui-btn aui-btn-light" @click="close" type="button">取消</button>
        </div>
    </div>
    </div>
</template>
<script>
import  "../assets/css/city-area.css";
import cityDatas from '../assets/js/city-data.js'
console.log(cityDatas)
export default {
    name:'SelectArea',
    data(){
        return {
            maxLength:3,
            dataarrary:cityDatas.localDataCities.list,
            dataCityxz: cityDatas.localDataCities.category.provinces,
            datahotcityxz:cityDatas.localDataCities.category.hotcities,
            relations:cityDatas.localDataCities.relations,
            /*选择的结果*/
            selected:[],
            /*tab*/
            aTatas:[],
            /*全部*/
            isAll:true,
            isSub:false,
            con:0,
            /*被选择的区域*/
            selecteData:{
                name:'',
                code:''
            }
        }
    },
    methods:{
        saveCity(){},
        close(){

        },
        removeNodeArea(item,code){
            console.log(item)
            if(item === 'all'){
                this.aTatas=[]
            }else{
                // if(this.relations[code] != "undefined"){
                //     this.aTatas.pop()
                // }
                if(this.aTatas.length>1){

                }

                var myI =0;
                for(let i=0;i<this.aTatas.length;i++){
                    if(this.aTatas[code]== code){
                        myI = i
                    }
                }

                if(myI<this.aTatas.length-1){
                     this.aTatas.pop()
                }
            }
            this.selectProvince(item, null, code,''); 
            
        },
        removeSpanArea(obj){
            console.log(obj)
            for(let i=0;i<this.selected.length;i++){
                if(this.selected[i].code === obj.code){
                    this.selected.splice(i,1);
                }
            }
            //this.selected
        },
        selectProvince(type, obj,con,isremove){
            //console.log(type,con,isremove)
            this.con = con;
            // this.selected.push(mg)
            this.selecteData={
                code :con,
                name:obj[0]
            }
            console.log(this.selecteData)
            if (type == "all") {
                console.log(type)
                this.isSub=false;
                this.isAll=true;
            }else{
                if(this.selected.length>=this.maxLength){
                    return false
                }
                this.isSub=true;
                this.isAll=false;
                var mg ={
                    name:obj[0],
                    code:this.con
                }
                if (typeof(this.relations[this.con]) != "undefined") {
                    //console.log(con)
                    if (isremove != "remove") {
                        this.aTatas=[mg]
                     }
                    console.log(this.relations[this.con])
                }
            }
        },
        /*
        选择标题*/
        selectitemArea(ev){
            console.log(ev);
            if(this.maxLength>this.selected.length){
               var m = this.selected.some(function(val,index){
                    if(val.code == ev.code ){
                        
                    }
                })
                if(!m){
                    this.selected.push(ev)
                }
            }
            
        }

    }
};
</script>
<style>
</style>

