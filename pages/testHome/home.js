// pages/home/home.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  toTestPage: function(e){
    let testId = e.currentTarget.dataset['testid'];
    wx.navigateTo({
      url: '/pages/test/test?testId='+testId
    })
  }
})