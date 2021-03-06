export const state = () => ({
    advantage:[
        {
            id:1,
            title:'主流开发技术',
            desc:'公司的产品采用目前主流的开发技术，具有跨平台、可扩展、开放、安全、分布等特性，适应主流PC、手机端、移动端平台。',
            color:'#235ABE'
        },
        {
            id:2,
            title:'拥有成熟产品',
            desc:'经过多年的发展，世栋已经成为一家直接面向最终用户的，并且拥有自己成熟产品的互联网+企业。',
            color:'#09BEAF'
        },
        {
            id:3,
            title:'量身制定方案 ',
            desc:'拥有丰富的活动策划执行及整体营销推广经验，与多家企事业单位展开了良好的合作。',
            color:'#E74155'
        },
        {
            id:4,
            title:'主流开发',
            desc:'根据品牌及企业特质度身定做推广方式。',
            color:'#FFC313'
        },
        {
            id:5,
            title:'提高企业效率',
            desc:'秉承为中国的企业和消费用户提供优秀的产品并以一流的咨询服务使客户能最大限度地发挥系统的功能，提高企业的效率，做好对外形象及活动推广宣传，提高知名度。',
            color:'#FF8C22'
        },
        {
            id:6,
            title:'多语种服务',
            desc:'多语种服务目前涉及服务语种有中文简体、英语、日语、韩语、法语、德语、西班牙语、中文繁体、俄语、意大利语、马来语、印尼语、泰语、阿拉伯语。',
            color:'#65B3D5'
        }
    ],
    cWidth:0
})

export const mutations = {
    setWindow(state) {
      state.cWidth = document?.body?.clientWidth;
    }
  }