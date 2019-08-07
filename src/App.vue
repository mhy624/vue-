<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>  
    <TabBer v-if="$route.meta.tabBer"/>
    <!-- <Loading/> -->
  </div>
</template>
<script>
import TabBer from "common/tabBer"
// import Loading from "lib/loading/index.js"
export default {
  name:"App", 
  components:{
    TabBer,
    // Loading
  },

}
</script>

<style lang="scss" scoped>

</style>

