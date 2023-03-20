var timer = null;
Page({
  data: {
    categoryList:["可回收垃圾","有害垃圾","厨余垃圾","其他垃圾"],
    inter:'',
    windowWidth: 0,
    canvasShow: true,
    result: '',
    category:'',
    class_name:''
  },
    startPhoto: function(){
      var that = this
      console.log("我进来了")
      that.data.inter = setInterval(that.autotakePhoto, 300);
    },
    /**
   * 结束定时器
   */
    stopPhoto: function(){
      var that = this;
      clearInterval(that.data.inter)
    },
    onLoad() {
      this.ctx = wx.createCameraContext();
      var that = this;
      //屏幕宽度
      var sysInfo = wx.getSystemInfoSync()
      that.setData({
        windowWidth: sysInfo.windowWidth,
        windowHeight: 472
      })
      that.autotakePhoto();
      // that.data.inter = setInterval(that.autotakePhoto, 1000);
    },
   
      /**
   * 生命周期函数--监听页面卸载
   */
    onHide: function () {
      this.endInter()
    },
    takePhoto() {
      const ctx = wx.createCameraContext()
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          this.setData({
            src: res.tempImagePath
          })
          const tempImagePath = res.tempImagePath
          wx.uploadFile({
            filePath: tempImagePath,
            name: 'image',
            url: 'http://113.55.46.67:8000/get_image',
            method: 'POST',
            header:{
              'content-type': 'application/x-www-form-urlencoded'
            },
            formData:{
              openid: this.data.openid
            },
            success: (res)=>{
              console.log("路径是"+tempImagePath)
              var result = JSON.parse(res.data);
              // wx.redirectTo({
              //   url: '/pages/showResult/showResult?src=' + tempImagePath + "&index=" + result.first_label  + "&second_label=" + result.second_label,
              // })
              this.setData({
                category: "识别出的垃圾为："+this.data.categoryList[result.first_label],
                class_name: "垃圾类别为："+result.second_label
              })
            }
          })
        //   wx.previewImage({
        //     current: res.tempImagePath, // 当前显示图片的http链接
        //     urls: [res.tempImagePath] // 需要预览的图片http链接列表
        //   })
          
        }
      })
    },
    autotakePhoto() {
      console.log(" 开始拍照 takePhoto")
      var that = this
      var takephonewidth
      var takephoneheight
      that.ctx.takePhoto({
        quality: 'low',
        success: (res) => {
          // 获取图片真实宽高
          wx.getImageInfo({
            src: res.tempImagePath,
            success: function (res) {
              console.log("res.width:"+res.width);
              takephonewidth = res.width,
              takephoneheight = res.height
              // 测试
              // let ctx = null;
              //   wx.createSelectorQuery().select("#can").context(function (res) {
              //     ctx = res.context
              //     ctx.setLineWidth(25); // 设置圆环的宽度
              //     ctx.setStrokeStyle('#EAEAEA'); // 设置圆环的颜色
              //     ctx.setLineCap('round') // 设置圆环端点的形状
              //     ctx.beginPath(); //开始一个新的路径
              //     ctx.arc(70, 70, 50, 0, 2 * Math.PI, false);
              //     //设置一个原点(70,70)，半径为50的圆的路径到当前路径
              //     ctx.stroke(); //对当前路径进行描边
              //     ctx.draw();
              //   }).exec()
            }
          })
          wx.uploadFile({
            filePath: res.tempImagePath,
            name: 'image',
            // 需要更改
            url: 'http://192.168.43.209:8000/get_box',
            method: 'POST',
            header:{
              'content-type': 'application/x-www-form-urlencoded'
            },
            formData:{
              openid: this.data.openid
            },
            success: (res)=>{
              var result = JSON.parse(res.data);
              var ctx = null;
              wx.createSelectorQuery().select("#can").context(function(res){
                ctx = res.context
                for (let j = 0; j < result.list_num; j++) {
                  // 左边距、上边距、宽、高
                  console.log("result.list[j].xmin:"+result.list[j].xmin)
                  console.log("takephonewidth:"+takephonewidth)
                  var cavansl = result.list[j].xmin / takephonewidth * that.data.windowWidth 
                  console.log("cavansl:"+cavansl)
                  var cavanst = result.list[j].ymin / takephoneheight * that.data.windowHeight
                  var cavansw = (result.list[j].xmax - result.list[j].xmin) / takephonewidth * that.data.windowWidth
                  var cavansh = (result.list[j].ymax - result.list[j].ymin) / takephoneheight * that.data.windowHeight
                  var cavanstext = '垃圾'
                
                
                  ctx.setStrokeStyle('#31859c')//边框颜色
                  ctx.setLineWidth(3)
                  ctx.setFontSize(14);
                  ctx.setFillStyle("#07C160")//文本颜色
                  ctx.fillText(cavanstext, cavansl, cavanst - 2)
                  ctx.strokeRect(cavansl, cavanst, cavansw, cavansh)
                }
                ctx.draw();
              }).exec()
            }
          })
        }
      })
    },
    startRecord() {
      this.ctx.startRecord({
        success: (res) => {
          console.log('startRecord')
        }
      })
    },
    stopRecord() {
      this.ctx.stopRecord({
        success: (res) => {
          this.setData({
            src: res.tempThumbPath,
            videoSrc: res.tempVideoPath
          })
        }
      })
    },
    error(e) {
      console.log(e.detail)
    },
    showPopup() {
      this.setData({ show: true });
    },
  
    onClose() {
      this.setData({ show: false });
    }
    
  })