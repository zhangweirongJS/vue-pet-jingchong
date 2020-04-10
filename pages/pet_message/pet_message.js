// pages/pet_message/pet_message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    pet: [{
        id: 1,
        headimg: '../../images/panda_head.jpg',
        name: 'Panda/熊猫',
        variety: '英国短毛猫',
        sex: 'GG',
        old: '2岁',
        zan: '6656'
      },
      {
        id: 2,
        headimg: '../../images/naiyou_head.jpg',
        name: '奶油',
        variety: '美短/起司猫',
        sex: 'GG',
        old: '1岁',
        zan: '2005'
      },
      {
        id: 3,
        headimg: '../../images/buou_head.jpg',
        name: 'jackson',
        variety: '布偶猫',
        sex: 'MM',
        old: '2岁',
        zan: '888'
      }
    ],
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
        icon_like: 'icon-like',
        checked: false
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
        icon_like: 'icon-like',
        checked: false
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
        icon_like: 'icon-like',
        checked: true
      }
    ]
  },
  Todetails(e) {
    wx.navigateTo({
      url: '../details/details'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var options = options;
    var thispet = that.data.pet;
    console.log(options)
    for (var i = 0; i < thispet.length; i++) {
      if (options.id == thispet[i].id) {
        that.setData({
          index: i
        })
      }
    }
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})