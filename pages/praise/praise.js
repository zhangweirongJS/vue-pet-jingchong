var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["视频", "点赞"],
    num_video: ["50", "312"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    video: [{
      video_src: '../../images/video_img.jpg',
      tag: '#小奶猫',
      video_description: '给我就KUBI定制的新家',
      user_head: '../../images/user_head.jpg',
      username: '十月',
      publish_time: '15:37',
      mark: '200',
      like: '68',
      forward: '123',
      icon_like: 'icon-likefill',
      checked: true
    },
    {
      video_src: '../../images/video_img.jpg',
      tag: '#小奶猫22',
      video_description: '给我就KUBI定制的新家',
      user_head: '../../images/user_head.jpg',
      username: '十月333',
      publish_time: '11:08',
      mark: '111',
      like: '55',
      forward: '22',
      icon_like: 'icon-likefill',
      checked: true
    },
    {
      video_src: '../../images/video_img2.jpg',
      tag: '#小奶猫22',
      video_description: '给我就KUBI定制的新家!!',
      user_head: '../../images/user_head.jpg',
      username: '十月333',
      publish_time: '11:08',
      mark: '202',
      like: '0',
      forward: '36',
      icon_like: 'icon-likefill',
      checked: true
    },
    {
      video_src: '../../images/video_img2.jpg',
      tag: '#小奶猫22',
      video_description: '给我就KUBI定制的新家',
      user_head: '../../images/user_head.jpg',
      username: '十月333',
      mark: '200',
      like: '99',
      forward: '120',
      icon_like: 'icon-likefill',
      checked: true
    }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  like(e) {
    var that = this;
    console.log(e)
    var index = e.currentTarget.dataset.index;
    var thisvideo = that.data.video;
    for (var i = 0; i < thisvideo.length; i++) {
      if (index == i) {
        if (thisvideo[i].checked == false) {
          thisvideo[i].icon_like = "icon-likefill"
          thisvideo[i].checked = true
        } else {
          thisvideo[i].icon_like = "icon-like"
          thisvideo[i].checked = false
        }
      }
    }
    that.setData({
      video: thisvideo
    })
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

  }
})