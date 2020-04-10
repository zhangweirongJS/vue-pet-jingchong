// pages/publish/publish.js
const app = getApp()
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideMask: false,
    src: '../../images/camera.svg',
    titleArr: ["主角", "主题"],
    // chooseArr: ["选择宠物", "选择主题"],
    choose_pet: ["选择宠物", "熊猫", "奶油"],
    choose_tag: ["选择主题", "吸猫", "小可爱", "汪星人", "掉毛，好烦恼！", "宠物短知识"],
    // theme_title: null,
    pet_index: 0,
    tag_index: 0,
    textarea: ''
  },
  chooseImage: function(type) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        that.setData({
          // tempFilePath可以作为img标签的src属性显示图片
          src: res.tempFilePaths[0],
        })
      }
    })
  },
  changePet: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      pet_index: e.detail.value
    })
  },
  changeTag: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      tag_index: e.detail.value
    })
  },
  textarea(e) {
    console.log(e.detail.value)
    this.setData({
      textarea: e.detail.value
    })
  },
  publish() {
    var that = this
    var textarea = this.data.textarea
    var tag_index = this.data.tag_index
    var pet_index = this.data.pet_index
    var time = util.formatTime(new Date());

    var choose_tag = this.data.choose_tag[tag_index]
    var choose_pet = this.data.choose_pet[pet_index]
    var array = [{
      video_src: '../../images/video_img2.jpg',
      tag: '#' + choose_tag,
      video_description: textarea,
      user_head: '../../images/user_head.jpg',
      username: '十月333',
      publish_time: time,
      pet: choose_pet,
      mark: '888',
      like: '22',
      forward: '330',
      icon_like: 'icon-like',
      checked: true
    }]
    var video = wx.getStorageSync('video')
    if (textarea == 0) {
      wx.showToast({
        title: '请填写发布内容',
        icon: 'none',
        duration: 2000
      })
    } 
    if (tag_index == 0 || pet_index == 0){
      console.log("adg")
      var thisvideo = [{
        video_src: '../../images/video_img2.jpg',
        tag: '',
        video_description: textarea,
        user_head: '../../images/user_head.jpg',
        username: '十月333',
        publish_time: time,
        pet: choose_pet,
        mark: '888',
        like: '22',
        forward: '330',
        icon_like: 'icon-like',
        checked: true
      }]
      wx.setStorageSync('video', thisvideo.concat(video))
      wx.switchTab({
        url: '../index/index',
      })
    }
    else {
      // var thisvideo = array.conact(video)
      // wx.setStorageSync('video', thisvideo)
      wx.setStorageSync('video', array.concat(video))
      wx.switchTab({
        url: '../index/index',
      })
    }

    // console.log(array)



  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var isLogin = wx.getStorageSync('isLogin')
    var getPhone = wx.getStorageSync('is_getPhone')
    // 授权登录
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo'] && getPhone == false) {
          // 已经授权信息 没授权手机号
          that.setData({
            hideMask: true,
            hideMaskPhone: false
          })
        } else if (res.authSetting['scope.userInfo'] && getPhone) {
          // console.log(123)
          that.setData({
            hideMask: true,
            hideMaskPhone: true
          })
        } else if (!res.authSetting['scope.userInfo'] && !isLogin) {
          console.log(111)
          // 已经授权信息 没授权手机号
          that.setData({
            hideMask: false,
            hideMaskPhone: true
          })
        } else if (isLogin) {
          that.setData({
            hideMask: true,
            hideMaskPhone: true
          })
        }
      }
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
    var choose_tag = this.data.choose_tag
    var that = this
    console.log(choose_tag)
    let theme_title = wx.getStorageSync('theme_title')
    for (var i = 0; i < choose_tag.length; i++) {
      if (choose_tag[i] == theme_title) {
        that.setData({
          tag_index: i
        })
      }
    }
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