export default{
    path:"/list",
    component:()=>import("views/list"),
    name:"list",
    meta:{
        tabBer:true,
        auth:false
    },
}