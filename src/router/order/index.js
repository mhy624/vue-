export default{
    path:"/order",
    component:()=>import("views/order"),
    name:"order",
    meta:{
        tabBer:true,
        auth:false
    },
}