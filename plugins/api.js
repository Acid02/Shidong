// import request from './axios';
import qs from 'qs';
// // 1.获取图片验证码
// export const getImgCode = () => {
//     return request({
//         url: '/image/code',
//         method: 'get',
//         // 图片验证码 response类型设置成blob，图片才能显示出来
//         responseType: "blob"
//     })
// }
const MIDDLE_API = {
    //主题
    getTheme:{
        path:'theme_front_api/Public/Theme/'
    },
    //场所
    getCoupon:{
        path:'coupon_china_api/Public/PlaceFront/'
    },
    //活动
    getLuckydraw:{
        path:'/luckydraw_api/Public/Luckydraw'
    },
    //用户信息
    getUser:{
        path:'user_api/Public/User/'
    },
    //订单
    getOrder:{
        path:'paySys2.0/order_out_api/public/'
    },
    //商城
    getMall:{
        path:'paySys2.0/product_front_api/public/'
    },
    //支付
    getPay:{
        path:'getWxopenid/getwxmin_coupon_payparams.php'
    }
};
let { getTheme } = MIDDLE_API;
export default function ({ app, $axios, redirect },inject) {
    const API = {};
    const base = {
        M1:'https://wxapi.sh-datastone.com/', //用户、主题
        M2:'https://api2.sh-datastone.com/',  //产品，订单
        M3:'https://api.sh-datastone.com/',   //场所
        M4:'http://222.73.31.223/',           //测试
        M5:'https://api3.sh-datastone.com/',	  //主题
      }
    // 主题id图片组
    API.selPic = async ({url=getTheme.path,data={},urlType='M5'}={}) => {
        let params = {
            ...{
               service: "Pic.selPic",
               themeid: 1403,
               state: 1,
               pagesize:100,
            },
            ...data
        }
        let { data:result } = await $axios({
            url: base[urlType]+url,
            method: 'post',
            data:qs.stringify(params)
        })
        return result
    };
    app.api = API;
    inject('api',API)
  }