// pages/pic/pic.js
var perday = {
  "pic_src": "../../images/suliaodai.png",
  "title":"使用后的塑料袋",
  "category": 3,
  "decs": "在扔塑料袋的情况下要留意一些地方，我们应当把塑料袋里边的垃圾先清除干净，再对塑料袋进行投放处理。假如里边装有食物残渣、剩菜剩饭等湿垃圾或者厨余垃圾，那么我们应当先把里面的食物残渣倒在湿垃圾桶或者厨余垃圾桶中，随后把塑料袋再扔到干垃圾桶或者其他垃圾桶中，那样才是正确的垃圾分类方法。"
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
      categoryList:["可回收物","有害垃圾","厨余垃圾","其他垃圾"],
      perday:{
        "pic_src": "../../images/suliaodai.png",
        "title":"使用后的塑料袋",
        "category": "其他垃圾",
        "decs": "在扔塑料袋的情况下要留意一些地方，我们应当把塑料袋里边的垃圾先清除干净，再对塑料袋进行投放处理。假如里边装有食物残渣、剩菜剩饭等湿垃圾或者厨余垃圾，那么我们应当先把里面的食物残渣倒在湿垃圾桶或者厨余垃圾桶中，随后把塑料袋再扔到干垃圾桶或者其他垃圾桶中。"
      }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      // 发送请求，每日一题的图片地址，名称，分类，描述
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
    goSearch:function(){
        wx.navigateTo({
            url: '/pages/search/search'
        })
    },
    goCamera:function(){
        wx.navigateTo({
          url: '/pages/camera/camera',
        })
    },
    goAlbums:function(){
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success (res) {
              // tempFilePath可以作为img标签的src属性显示图片
              const tempFilePaths = res.tempFilePaths
              wx.navigateTo({
                url: '/pages/showResult/showResult?src=' + tempFilePaths + "&index=" + 1,
              })
            }
          })
    }
})