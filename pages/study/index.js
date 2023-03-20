//获取音频上下文
const backgroundAudioManager = wx.getBackgroundAudioManager();
// var vitem=document.getElementsByClassName("video-item");
Page({

    /**
     * 页面的初始数据
     */
	data: {
		isLoadedAll: false,
		musicIndex: null,
		videoIndex: null,
		currentTabsIndex: 0,
		pageIndex: 1,
		videoList: [
			{
				'coverimg': "cloud://cloud1-5gq9js3gd06c5e11.636c-cloud1-5gq9js3gd06c5e11-1311093666/small_study_video/视频和图/封面1.png",
				'description':"欢迎收看垃圾分类小学习",
				'id':"41",
				'resource_add':"cloud://cloud1-5gq9js3gd06c5e11.636c-cloud1-5gq9js3gd06c5e11-1311093666/small_study_video/视频和图/垃圾分类1.mp4",
				'title':" 第1期 垃圾分类小学习",
				'type':"1"
			},
			{
				'coverimg': "cloud://cloud1-5gq9js3gd06c5e11.636c-cloud1-5gq9js3gd06c5e11-1311093666/small_study_video/视频和图/封面2.png",
				'description': "",
				'id': "42",
				'resource_add': "cloud://cloud1-5gq9js3gd06c5e11.636c-cloud1-5gq9js3gd06c5e11-1311093666/small_study_video/视频和图/垃圾分类2.mp4",
				'title': " 第2期 垃圾分类小学习",
				'type': "1"
			},
			{
				'coverimg': "cloud://cloud1-5gq9js3gd06c5e11.636c-cloud1-5gq9js3gd06c5e11-1311093666/small_study_video/视频和图/封面3.png",
				'description': "",
				'id': "43",
				'resource_add': "cloud://cloud1-5gq9js3gd06c5e11.636c-cloud1-5gq9js3gd06c5e11-1311093666/small_study_video/视频和图/垃圾分类3.mp4",
				'title': " 第3期 垃圾分类小学习",
				'type': "1"
			},
			{
				'coverimg': "cloud://cloud1-5gq9js3gd06c5e11.636c-cloud1-5gq9js3gd06c5e11-1311093666/small_study_video/视频和图/封面4.png",
				'description': "",
				'id': "44",
				'resource_add': "cloud://cloud1-5gq9js3gd06c5e11.636c-cloud1-5gq9js3gd06c5e11-1311093666/small_study_video/视频和图/垃圾分类4.mp4",
				'title': " 第4期 垃圾分类小学习",
				'type': "1"
			},
		],
		audioList:[
			{
				'coverimg': "cloud://cloud1-5gq9js3gd06c5e11.636c-cloud1-5gq9js3gd06c5e11-1311093666/small_study_video/视频和图/封面1.png",
				'description': "“垃圾是放错了地方的资源，是地球上惟一一种不断增长、永不枯竭的资源”！",
				'id': "50",
				'resource_add': "cloud://cloud1-5gq9js3gd06c5e11.636c-cloud1-5gq9js3gd06c5e11-1311093666/small_study_video/视频和图/垃圾分类2.mp3",
				'title': "为什么要垃圾分类",
				'type': "1"	
			},
			{
				'coverimg': "cloud://cloud1-5gq9js3gd06c5e11.636c-cloud1-5gq9js3gd06c5e11-1311093666/small_study_video/视频和图/封面2.png",
				'description': "随着我国的发展壮大，其实国家对于垃圾治理，环境保护是下了很大决心的。早在上海实行垃圾分类前，国家就提出了要努力养成垃圾分类的好习惯，以改善生活环境，为绿色和可持续发展做出贡献。",
				'id': "51",
				'resource_add': "cloud://cloud1-5gq9js3gd06c5e11.636c-cloud1-5gq9js3gd06c5e11-1311093666/small_study_video/视频和图/垃圾分类3.mp3",
				'title': "怎么进行垃圾分类",
				'type': "1"
			}
		]
	},

    /**
     * 生命周期函数--监听页面加载
     */
	onLoad: function (options) {
		//加载数据
		//这里数据写死，假装我是在服务器拿到的数据
	},

	//tap切换
	onTabsItemTap: function (event) {
		var index = event.currentTarget.dataset['index'];
		this.setData({
			currentTabsIndex: index
		});
		//tab切换时停止音乐播放
		backgroundAudioManager.stop();

		//tab切换时停止视频播放
		var videoContextPrev = wx.createVideoContext('video' + this.data.videoIndex);
		videoContextPrev.stop();

		//将当前播放视频、音频的index设置为空
		this.setData({
			musicIndex: null,
			videoIndex: null,
		})
	},

	//展开
	//原本没有upStatus这个字段，所以默认值为false
	upDown(event) {
		var index = event.currentTarget.dataset['index'];
		this.data.videoList[index].upStatus = !this.data.videoList[index].upStatus;
		
		// var tof=this.data.videoList[index].upStatus;
		// if (this.data.videoList[index].upStatus==true){
		// 	vitem.style.height=700+'rpx';
		// }
		// else if(this.data.videoList[index].upStatus==false){
		// 	vitem.style.height=550+'rpx';
		// }
			
		this.setData({
			videoList: this.data.videoList
		})
	},
	//播放音频
	musicPlay(event) {
		var src = event.currentTarget.dataset['src'];
		var index = event.currentTarget.dataset['index'];
		this.setData({
			musicIndex: index,
			audioSrc: src
		});
		
		backgroundAudioManager.src = src;
		backgroundAudioManager.play()

	},
	//停止音频
	musicPause(event) {
		this.setData({
			musicIndex: null
		});
		backgroundAudioManager.pause();
	},
	//播放视频
	videoPlay(event) {
		var length = this.data.videoList.length;
		var index = event.currentTarget.dataset['index'];

		if (!this.data.videoIndex) { // 没有播放时播放视频
			this.setData({
				videoIndex: index
			})
			var videoContext = wx.createVideoContext('video' + index)
			videoContext.play()
		} else {
			//停止正在播放的视频
			var videoContextPrev = wx.createVideoContext('video' + this.data.videoIndex)
			videoContextPrev.stop()
			//将点击视频进行播放
			this.setData({
				videoIndex: index
			})
			var videoContextCurrent = wx.createVideoContext('video' + index)
			videoContextCurrent.play()
		}
	},

	// onReachBottom: function () {
	// 	if (!this.data.isLoadedAll) {
	// 		this.data.pageIndex++;
	// 		this._loadData(this.data.id, this.data.pageIndex);
	// 	}
	// }
})