// pages/showResult/showResult.js
const category= [
    {
        logo: "../../assets/iconfont/kehuishouwu.png",
        title: "可回收垃圾",
        content: "适宜回收利用和资源化利用的，如：玻、金、塑、 纸、衣。",
        desc: "酱油瓶、玻璃杯、平板玻璃、易拉罐、饮料瓶、 洗发水瓶、塑料玩具、书本、报纸、广告单、 纸板箱、衣服、床上用品等。"
    },{
        logo: "../../assets/iconfont/youhailaji.png",
        title: "有害垃圾",
        content: "对人体健康或者自然环境造成直接或潜在危害的废弃物。",
        desc: "废电池、油漆桶、荧光灯管、废药品及其包装物等。",
    },{
        logo: "../../assets/iconfont/shilaji.png",
        title: "厨余垃圾",
        content: "日常生活垃圾产生的容易腐烂的生物质废弃物。",
        desc: "剩菜剩饭、瓜皮果核、花卉绿植、过期食品等。"
    },{
        logo: "../../assets/iconfont/ganlaji.png",
        title: "其他垃圾",
        content: "除有害垃圾、厨余垃圾、可回收垃圾以外的其他生活废弃物",
        desc: "餐盒、餐巾纸、湿纸巾、卫生间用纸、塑料袋、 食品包装袋、污染严重的纸、烟蒂、纸尿裤、 一次性杯子、大骨头、贝壳、花盆、陶瓷等",
    }]
Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: '',
        show: false,
        category_img:'',
        category_name:'',
        category_content:'',
        category_decs:'',
        second_lable:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(options.src){
            this.setData({
                src: options.src
            })
        }
        if(options.index){
            console.log(options.index)
            var index = options.index;
            this.setData({
                category_img: category[index].logo,
                category_name: category[index].title,
                category_content: category[index].content,
                category_decs: category[index].desc,
                second_label: options.second_label
            })
        }
        
    },    
      showPopup() {
        this.setData({ show: true });
      },
    
      onClose() {
        this.setData({ show: false });
      },
      

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    goCamera:function(){
        wx.navigateTo({
          url: '/pages/camera/camera',
        })
    },
})