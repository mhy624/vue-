<template>
    <div>
        <!-- 顶部-->
        <header>
            <span>&lt;</span>
            <span>{{title}}</span>
            <span>···</span>
        </header>
        <!-- 导航菜单  -->
        <nav>
            <div class="tab">
                    <ul>  
                        <router-link 
                        v-for="(item,index) in list" 
                        :key="index" 
                        tag="li"
                        :to="item.adress">{{item.name}}</router-link>
                    </ul>
            </div>
            <v-touch class="tab__right" @tap="handleToggle()" tag="div">
                <span>筛选<i>Y</i></span>    
            </v-touch>
            <div :class="flag?'List List1':'List'"></div>
            <v-touch :class="flag?'List2 List1':'List2'" @tap="handleToggle()" tag="div"></v-touch>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Header",
    props:{
        title:{
            type:String,
            default:"专享折扣"
        }
    },
    data(){
        return{
            list:[
                {
                   name:"全部",
                   adress:"/rebate/all" 
                },
                {
                    name:"演唱会",
                    adress:"/rebate/concert" 
                },
                {
                    name:"音乐会",
                    adress:"/rebate/musical" 
                },
                {
                    name:"话剧歌剧",
                    adress:"/rebate/play" 
                },
                {
                    name:"儿童亲子",
                    adress:"/rebate/child" 
                },
                {
                    name:"音乐剧",
                    adress:"/rebate/theater" 
                },
                {
                    name:"戏曲综艺",
                    adress:"/rebate/opera" 
                },
                {
                    name:"展览",
                    adress:"/rebate/show" 
                },
                {
                    name:"舞蹈芭蕾",
                    adress:"/rebate/dance" 
                }
            ],
            flag:true,
            num:0
        }
    },
    methods:{
        handleToggle(){
            this.flag=!this.flag
        }
    }
};
</script>

<style>
header {
    width: 100%;
    height: 0.44rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    position: fixed;
    background: #fff;
    z-index: 9;
    top: 0;
}
header > span {
    display: block;
    font-size: 0.18rem;
    text-align: center;
}
header > span:nth-child(1),
header > span:nth-child(3) {
    width: 12.8%;
    height: 100%;
    line-height: 0.44rem;
}
/* 导航菜单 */
nav {
    width: 100%;
    height: 0.5rem;
    display: flex;
    border-bottom: 1px solid #eee;
    position: fixed;
    z-index: 10;
    top: 0.44rem;
    background: #fff;
}
.tab {
    width: 2.93rem;
    height: 100%;
    padding: 0 0 0 0.15rem;
}
.tab > ul {
    height: 0.5rem;
    width: 100%;
    display: flex;
    overflow-x: auto;
    align-items: center;
}
.tab > ul > li {
    font-size: 0.16rem;
    padding: 0.05rem;
    margin-right: 0.13rem;
    flex-shrink: 0;
}
.tab > ul > .router-link-exact-active {
    color: #ff6743;
    border-bottom: 1px solid #ff6743;
}
/* 筛选 */
.tab__right > span {
    display: block;
    margin: 0.17rem 0;
    padding-left: 0.05rem;
    line-height: 0.16rem;
    font-size: 0.16rem;
    border-left: 0.015rem solid #e0e0e0;
}
/* 动画 */
.List{
    width:78.4%;
    height:6.23rem;
    background: #ffffff;
    transition:all .3s;
    position: absolute;
    right: 0;
    z-index:11;
    }
.List2{
    width:100%;
    height:6.23rem;
    background:rgba(0,0,0,0.3);
    transition:all .3s;
    position: absolute;
    right: 0;
}
.List1{
    transform: translateX(100%);       
}
</style>
