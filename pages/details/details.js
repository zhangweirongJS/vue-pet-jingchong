// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideComment: true,
    comment_content: [{
        userhead: '../../images/user_head.jpg',
        username: '筱晓曦',
        comment_info: '可爱哦~'
      },
      {
        userhead: '../../images/buou_head.jpg',
        username: '大米煮小米',
        comment_info: '哇哦哈哈哈哈或~'
      },
      {
        userhead: '../../images/user_head.jpg',
        username: '筱晓曦',
        comment_info: '可爱哦~'
      },
      {
        userhead: '../../images/panda_head.jpg',
        username: '熊猫猫',
        comment_info: '这是什么猫鸭~'
      },
      {
        userhead: '../../images/user_head.jpg',
        username: '小布丁',
        comment_info: '哈哈哈哈好棒~'
      },
      {
        userhead: '../../images/user_head.jpg',
        username: '熊猫猫',
        comment_info: '这是什么猫鸭~'
      }
    ],
    details: [{
        video_src: '../../images/video_img2.jpg',
        tag: '#小奶猫',
        video_description: '给我就KUBI定制的新家',
        user_head: '../../images/user_head.jpg',
        username: '十月',
        publish_time: '15:37',
        mark: '200',
        like: '68',
        forward: '123',
        attention: '关注',
        icon_like: 'icon-likefill',
        like_color: '#e5e8f1',
        checked: false,
        click_attention: 'click_attention'
      },
      {
        video_src: '../../images/video_img.jpg',
        tag: '#小狗子',
        video_description: '顽皮狗子',
        user_head: '../../images/user_head.jpg',
        username: '十月11',
        publish_time: '15:37',
        mark: '11',
        like: '0',
        forward: '3',
        checked: true
      }
    ]
  },
  like(e) {
    var that = this;
    var thisdetails = that.data.details;
    console.log(thisdetails[0].checked)

    if (thisdetails[0].checked == false) {

      thisdetails[0].like = parseInt(thisdetails[0].like) + 1;
      thisdetails[0].like_color = "#ffbc00"
      thisdetails[0].checked = true
    } else {
      thisdetails[0].like = parseInt(thisdetails[0].like) - 1;
      thisdetails[0].like_color = "#e5e8f1"
      thisdetails[0].checked = false
    }
    that.setData({
      details: thisdetails
    })
  },
  click_attention() {
    var that = this;
    var thisdetails = that.data.details;
    if (thisdetails[0].attention == '关注') {
      thisdetails[0].attention = '已关注'
      thisdetails[0].click_attention = 'concerned'
    } else {
      thisdetails[0].attention = '关注'
      thisdetails[0].click_attention = 'click_attention'
    }
    that.setData({
      details: thisdetails
    })
  },
  comment() {
    this.setData({
      hideComment: false,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  onShareAppMessage: function(res) {
    if (res.from == 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '给我KUBI定制的新家鸭',
      path: 'details'
    }
  }
})