// pages/usercenter/usercenter.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: true,

    user_msg: false,
    username: '大米煮小米粥',
    pet: '2',
    product: '8',
    header_img: '../../images/user_head.jpg',
    user_data: [{
        data_title: '获赞',
        digital: '9522',
      url: '../awesome/awesome'
      },
      {
        data_title: '粉丝',
        digital: '3590'
      },
      {
        data_title: '关注',
        digital: '8',
        url: '../attention/attention'
      },
      {
        data_title: '收藏',
        digital: '68'
      }
    ],
    line_choose: [{
        title: '我的饼干',
        choose_icon: '../../images/my_pet.svg',
        url: '../binggan/binggan'
      },
      {
        title: '我的兑换',
        choose_icon: '../../images/my_pet.svg',
        url: '../exchange/exchange'
      },
      {
        title: '我的宠物',
        choose_icon: '../../images/choose_tag.svg',
        url: '../mypet/mypet'
      },
      {
        title: '我的作品',
        choose_icon: '../../images/my_video.svg',
        url: '../works/works'
      },
      {
        title: '联系客服',
        choose_icon: '../../images/customer.svg',
        url: ''
      },
      {
        title: '常见问题',
        choose_icon: '../../images/question.svg',
        url: ''
      }
    ]
  },
  toUsermsg(e) {
    wx.navigateTo({
      url: '../user_message/user_message',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  toLogin(e) {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  logout(e) {
    wx.showLoading({
      title: '退出登录中',
      success(res) {
        wx.getStorage({
          key: 'isLogin',
          success(res) {
            console.log(res)
            if (res.data == true) {
              wx.setStorageSync('isLogin', false);
            }
          }
        })
        wx.navigateTo({
          url: '../login/login'
        })
      },
      fail(res) {
        wx.showToast({
          title: '退出登录失败',
          icon: 'none',
          duration: 2000
        })
      }
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 200)

  },
  loginTip(e) {
    wx.showToast({
      title: '请登录后查看',
      icon: 'none',
      duration: 1000
    })
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
    var that = this
    var user_msg = that.data.user_msg
    var isLogin = wx.getStorageSync('isLogin')
    var getPhone = wx.getStorageSync('is_getPhone')
    // 授权登录
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo'] && getPhone) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res)
              that.setData({
                userInfo: res.userInfo,
                hasUserInfo: true,
              })
            }
          })
        } else {
          that.setData({
            userInfo: res.userInfo,
            hasUserInfo: false,
          })
        }
      }
    })
    wx.getStorage({
      key: 'isLogin',
      success(res) {
        if (res.data == false) {
          user_msg = false
          that.setData({
            user_msg: user_msg
          })
        } else {
          user_msg = true
          that.setData({
            user_msg: user_msg
          })
        }
      }
    })
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
    // wx.showNavigationBarLoading() //在标题栏中显示加载
    setTimeout(function() {
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
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