export default{
    path:"/home",
    component:()=>import("views/home"),
    name:"home",
    meta:{
        tabBer:true,
        auth:false
    },
}