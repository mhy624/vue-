export default{
    path:"/detailD/:id/:date",
    component:()=>import("views/detailD"),
    name:"detailD",
    meta:{
        tabBer:false,
        auth:false
    },
    props:true
}