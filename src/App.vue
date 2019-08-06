<template>
  <div id="app">
    <router-view></router-view>
    <TabBer/>
    <loading/>
  </div>
</template>
<script>
import TabBer from "common/tabBer"
import Loading from "lib/loading/index.js"
export default {
  name:"App",
  components:{
    TabBer,
    Loading
  },
  //  created(){
  //    http("get","/vip/index/getVipHomeSchedular?version=6.0.3&referer=2").then((data)=>{
  //      console.log(data)
  //    })
  //   }
}
// /vip/index/getDiscountList?page=1&city_id=0&cate_id=0&discount_id=0&version=6.0.3&referer=2
// https://api.juooo.com/vip/index/getVipHomeSchedular?version=6.0.3&referer=2
</script>

<style lang="scss" scoped>

</style>

