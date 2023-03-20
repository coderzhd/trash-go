// pages/home/home.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        wastename: '',
        ColorList: [
            {
                img:"../../assets/iconfont/kehuishouwu.png",
                title:"可回收垃圾"
            },
            {
                img:"../../assets/iconfont/youhailaji.png",
                title:"有害垃圾"
            },
            {
                img:"../../assets/iconfont/shilaji.png",
                title:"厨余垃圾" 
            },
            {
                img:"../../assets/iconfont/ganlaji.png",
                title:"其他垃圾"
            }
          ]
    },
    onClick:function(e){
        // console.log(JSON.stringify(e))
         var index = e.currentTarget.dataset.index
         wx.navigateTo({
             url: '/pages/detail/index?type=' + (index+1)
         })
    },
    goSearch:function(){
        wx.navigateTo({
            url: '/pages/search/search'
        })
    },
    goVideo:function(){
        wx.navigateTo({
          url: '/pages/video/video',
        })
    },
    goStudy:function(){
        wx.switchTab({
          url: '/pages/study/index',
        })
    },
    goTest:function(){
        wx.navigateTo({
          url: '/pages/testHome/home',
        })
    },
    goVoice:function(){
        wx.navigateTo({
          url: '/pages/ai/index',
        })
    },
    goCamera:function(){
        wx.navigateTo({
          url: '/pages/camera/camera',
        })
    },
    goNews:function(){
        wx.navigateTo({
          url: '/pages/news/news',
        })
    }
})