<template>
<div>
    <div v-for="(index,acart) in cartsDatas " key="index">
        名称：
        价格：
        数量：
        <span @click="getDatas">发发发</span>
    </div>
</div>
</template>
<script>
import bus from '../../eventBus/eventBus.js'
export default {
    name:'Carts',
    props:['cartsToDatas'],
    data(){
        return {
            cartsDatas:[{
                id: 2,
                count: 10,
                price: 33,
                discountPrice: 30,
                mainImg: 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=8b046e1e0646f21fd6345853c6266b31/8c1001e93901213fe4c06e3958e736d12e2e9567.jpg',
                isDiscount: 1,
                detailImg: '',
                dinnerFree: 1,
                isVip: 0,
                isSpec: 0,
                name: 'hello',
                discrip: 'nnn你好你好年后',
                isNew: 0,
                isHot: 1,
                nums: 0
            }]
        }
    },
    mounted() {
        bus.$on("details",function(ds){
            console.log(ds)
        })
    },
    methods:{
        getDatas(){
            var datas = this.cartsDatas
            console.log('兄弟组件datas')
            bus.$emit('changes',datas)
        },
        
    }
}


</script>
<stylus>

</stylus>



