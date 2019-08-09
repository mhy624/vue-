export default{
    path:"/detailD/:id/:date/:discount",
    component:()=>import("views/detailD"),
    name:"detailD",
    meta:{
        tabBar:false,
        auth:false
    },
    props:true
}