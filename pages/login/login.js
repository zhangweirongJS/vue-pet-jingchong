// pages/login/login.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneVal: '',
    pwdVal: '',
  },

  //bindinput验证input框 手机号的值
  loginPhone: function(e) {
    var phone = e.detail.value;
    this.setData({
      phoneVal: phone
    })
    if (phone.length > 11) {
      wx.showToast({
        title: '手机号输入有误',
        icon: 'none',
        duration: 2000
      })
    }
  },
  loginPwd: function(e) {
    var pwd = e.detail.value;
    this.setData({
      pwdVal: pwd
    })
  },
  loginBtnClick(e) {
    var that = this
    var inputphone = that.data.phoneVal;
    var inputpwd = that.data.pwdVal;
    var testname = app.globalData.user1;
    var checkphone = /^1[34578]\d{9}$/
    // console.log(inputpwd)

    if (inputphone == '' || !(checkphone.test(inputphone))) {
      //验证手机号为空及格式不正确
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 2000
      })
    } else if (inputpwd == '') {
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 2000
      })
    } else if (inputphone != testname.username) {
      wx.showToast({
        title: '没有此用户',
        icon: 'none',
        duration: 2000
      })
    } else if (inputpwd != testname.password) {
      wx.showToast({
        title: '密码输入错误',
        icon: 'none',
        duration: 2000
      })
    } else if (inputphone == testname.username && inputpwd == testname.password) {
      wx.showLoading({
        title: '登录中',
        success(res) {
          wx.getStorage({
            key: 'isLogin',
            success(res) {
              if (res.data == false) {
                wx.setStorageSync('isLogin', true);
              }
            }
          })
          wx.switchTab({
            url: '../usercenter/usercenter'
          })
        },
        fail(res) {
          wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
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
  onShareAppMessage: function() {

  }
})