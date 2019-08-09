import http from "utils/http.js"

//专享折扣---全部
export const all_api=(count)=>http("get","/vip/index/getDiscountList?page="+count+"&city_id=0&cate_id=0&discount_id=0&version=6.0.3&referer=2")
//专享折扣---演唱会
export const concert_api=(count)=>http("get","/vip/index/getDiscountList?page="+count+"&city_id=0&cate_id=35&discount_id=0&version=6.0.3&referer=2")
//专享折扣---音乐会
export const musical_api=(count)=>http("get","/vip/index/getDiscountList?page="+count+"&city_id=0&cate_id=36&discount_id=0&version=6.0.3&referer=2")
//专享折扣---话剧歌剧
export const paly_api=(count)=>http("get","/vip/index/getDiscountList?page="+count+"&city_id=0&cate_id=37&discount_id=0&version=6.0.3&referer=2")
//专享折扣---儿童亲子
export const child_api=(count)=>http("get","/vip/index/getDiscountList?page="+count+"&city_id=0&cate_id=38&discount_id=0&version=6.0.3&referer=2")
//专享折扣---音乐剧
export const theater_api=(count)=>http("get","/vip/index/getDiscountList?page="+count+"&city_id=0&cate_id=79&discount_id=0&version=6.0.3&referer=2")
//专享折扣---戏曲综艺
export const opera_api=(count)=>http("get","/vip/index/getDiscountList?page="+count+"&city_id=0&cate_id=91&discount_id=0&version=6.0.3&referer=2")
//专享折扣---展览
export const show_api=(count)=>http("get","/vip/index/getDiscountList?page="+count+"&city_id=0&cate_id=99&discount_id=0&version=6.0.3&referer=2")
//专享折扣---舞蹈芭蕾
export const dance_api=(count)=>http("get","/vip/index/getDiscountList?page="+count+"&city_id=0&cate_id=86&discount_id=0&version=6.0.3&referer=2")

//城市列表
export const city_api=()=>http("get","/city/city/getHotCityList?version=6.0.3&referer=2")

//详情
export const detailD_api=(id)=>http("get","/Schedule/Schedule/getScheduleInfo?schedular_id="+id+"&version=6.0.3&referer=2")



