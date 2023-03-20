//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
  },
  onShow: function() {
    this.setData({
      logs: this.formatLogs()
    })
  },
  // 拿到缓存并格式化日期数据
  formatLogs: function(){
    let newList = [];
    (wx.getStorageSync('logs') || []).forEach(log => {
      console.log(log.date)
      if(log.date){
        log['date'] = util.formatTime(new Date(log.date));
        newList.push(log);
      }
    })
    console.log(newList)
    return newList;
  }
})
