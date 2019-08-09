<template>
    <div class="ww">
        <HeaderT>
            <template v-slot>
                <v-touch 
                tag="span" 
                @tap="handleBack"
                >&lt;</v-touch>
            </template>    
        </HeaderT>
        <!-- 上 -->
        <div class="top" >
            <div class="top__bg" :style="{background:'url('+detailList.pic+')'}"></div>
            <div class="main">
                <div class="pic">
                    <img :src="detailList.pic" >    
                </div>   
                <div class="info">
                    <div class="title">{{detailList.show_name}}</div>
                    <div class="middle"></div>
                    <div class="price">￥{{detailList.price_range}}</div>
                </div>
            </div>
        </div>
        <!-- 中 -->
        <div class="date">
            <div class="time"><span>{{date}}</span></div>
            <div class="adress"><span>{{detailList.city?detailList.city.city_name:''}}</span><span>{{detailList.venue?detailList.venue.venue_name:''}}</span></div>
        </div>
        <!-- 下 -->
        <div class="card">
            <div><span>专享{{discount}}折起</span><span>最高省175元</span><span>开通99/年 &gt;</span></div>
        </div>
        <!-- 开卡 -->
        <div class="open"><span>开卡送: </span><span>开通橙PULS卡</span><span>送￥100 尊享V+权益</span></div>
        <!-- 入场 -->
        <div class="enter"><span>入&nbsp;场: </span><span>{{tipList.desc?tipList.desc:''}}</span></div>
        <!-- 图文 -->
        <p style="width:100%" class="text" v-html="showList.desc?showList.desc:''"></p>
        <!-- 按钮 -->
        <div class="button">
            <div class="kf">
                <div class="icon">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAb1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbw3/OPAAAAJHRSTlMAH4DvLAySB/Tg05n5rk3opHxiwKCKOhUP4qh0M9jNbli4hSkY6Xp9AAABR0lEQVQ4y52R6ZKCMBAGB8IREg4FEVA8drff/xlXsHZLNAhl/yJDJ1/NjHxInNuzBn22eSzztL7iH+W3c15eABRVllX3r9zt1YCqAxkJagXULs8C0UNaGwH21duCforKNWyfvT3o/UtRw1MxPsFVXrjCaTqmEjbiYAPlpGBIPZfopZjHczA+OPNk8HC8QD6zBLhM74VuMZxkxYZEZkgwf303VkFaur0yBWWbsZGCkcDlBYwUt59hAklk4egSj2CjwQiHHWexeOC7RB88ibNh5wYVyntRQoWRlIMsiXIgFYiWxQhWi6ujVzezfjzDwLv3A++Gga9e4Y0mUqBLcfINqKiRO7EXhOJmB9dYltmDkRU0CeQrvJ8TbGSGPgFI+tsS6hTO4ZyYMWKsAfhqZY4KvdtpRtRFZFlUWTnGLkRXnizQdwBdL5/yC+1CKknvBpjdAAAAAElFTkSuQmCC" alt="">
                </div>
                <div>客服</div>
            </div>
            <div class="btn">立即购买</div>
        </div>
        
    </div>
</template>

<script>
import {detailD_api} from "api/rebate"
import { async } from 'q';
export default {
    name :"Detail",
    props:["id","date","discount"],
    async created(){
        // console.log(this)
        let data=await detailD_api(this.$route.params.id);
        this.detailList=data.data.static_data
        this.showList=data.data.static_data.show_desc
        this.tipList=data.data.static_data.tips
        // this.date=this.$route.params.date
        console.log(data.data.static_data)
        console.log(data)
    },
    data(){
        return{
            detailList:[],
            showList:[],
            tipList:[],
        }
    },
    methods:{
        handleBack(){
            // alert(1111);
            this.$router.back();
        }
    }
}

</script>

<style scoped>
.ww{
    width:100%;
    height: 100%;
    overflow-y: auto;
}
.top{
    width: 100%;
    height:2.296rem;
    overflow: hidden;
    position: relative;
    background-color:rgba(0,0,0,0.1);
}
.top__bg{
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: blur(30px);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
}
.main{
    width: 100%;
    height:1.856rem;
    margin-top: .44rem; 
    padding: 0 .15rem .2rem;
    display:flex;

}
.pic{
    width:1.1rem;
    height:1.5rem;
    margin-top: .15rem;
}
.pic>img{
    width:1.1rem;
    height:1.5rem;
}
.info{
    width:2.2rem;
    height:1.445rem;
    margin:.2rem 0 0 .15rem;
}
.info>.title{
    width:100%;
    height:.6rem;
    font-weight: 700; 
    font-size:.18rem;
    color: #ffffff;
}
.info>.middle{
    width: 100%;
    height:.17rem;
    margin-top:.11rem;
}
.info>.price{
    width:100%;
    height:.54rem;
    margin:.02rem 0 .08rem; 
    font-weight: 700; 
    font-size: .14rem;
    padding-top:.35rem;
    color: #ffffff;
}
.date{
    width:100%;
    height:1.11rem;
    padding:.295rem .15rem .215rem;
}
.date>.time{
    width: 3.05rem;
    font-weight: 700;
    font-size: .18rem;
}
.date>.adress{
    width:3.05rem;
    margin-top:.16rem;
    font-weight: 700; 
    font-size: .18rem;
    line-height:.18rem;
}
.date>.adress>span:nth-child(1){
    display: inline-block;
    margin-right:.05rem;
    padding-right: .05rem;
    border-right: 2px solid #000;
}
.card{
    width: 100%;
    height: .69rem;
    padding:0 .15rem .2rem;
}
.card>div{
    width: 3.45rem;
    height: .49rem;
    background: linear-gradient(-50deg,#ff9a34,#ff4d4a);
    border-radius: 0.066665rem;
}
.card>div>span{
    font-size:.16rem;
    color: #fff;
    margin-top: .15rem;
    display: inline-block;
}

.card>div>span:nth-child(1){
    font-size:.14rem;
    margin-left: .35rem;
    margin-right: .2rem;
}

.card>div>span:nth-child(2){
    margin-right: .35rem;
}

.card>div>span:nth-child(3){
    margin-left: .2rem;
    font-size:.12rem;
}

.open{
    height:.54rem;
    padding:.15rem 0;
    margin:0 .15rem;
    border-bottom:1px solid #eee;
}

.open>span:nth-child(2),
.open>span:nth-child(3){
    float: left;
}

.open>span:nth-child(3){
    color: #ff6743;
    margin-left:.15rem;
}

.enter{
    height:.73rem;
    padding:.15rem 0;
    margin:0 .15rem;
    border-bottom:1px solid #eee;
}
.open>span:nth-child(1),
.enter>span:nth-child(1){
    display: block;
    color:#999 ;
    font-size:.16rem;
    float: left;
    margin-right:.2rem; 
}

.open>span:nth-child(2),
.open>span:nth-child(3),
.enter>span:nth-child(2){
    display: block;
    font-size:.14rem;
    line-height: .16rem;
    margin-top: .04rem;
}

.text{
    width:100%;
    padding:.15rem;
    font-size:.14rem;
}
.text>p{
    width:100%;
}
.text>p>img{
    width:3.75rem;
}

.button{
    width:100%;
    height:.49rem;
    position:absolute;
    bottom:0;
    background: #fff;
    display: flex;
}
.button>.kf{
    width:14%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.button>.kf>.icon>img{
    margin-left:.15rem;
    width:.2rem;
    height:.2rem;
}
.button>.btn{
    background-image: linear-gradient(-50deg,#ff4d4a,#ff9a34),linear-gradient(#fefefe,#fefefe);
    width: 86%;
    font-size: .18rem;
    text-align: center;
    line-height:.49rem;
    font-weight:700;
    color: #fff;
}
</style>
