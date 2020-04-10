// pages/theme/theme.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theme: [{
        theme_title: '吸猫',
        theme_num: '2142',
        theme_id: 0
      },
      {
        theme_title: '小可爱',
        theme_num: '1223',
        theme_id: 1
      },
      {
        theme_title: '汪星人',
        theme_num: '256',
        theme_id: 2
      },
      {
        theme_title: '掉毛，好烦恼！',
        theme_num: '0',
        theme_id: 3
      },
      {
        theme_title: '宠物短知识',
        theme_num: '99',
        theme_id: 4
      }
    ]
  },
  toPublish(e) {
    console.log(e)
    let theme_title = wx.getStorageSync('theme_title')
    var index = e.currentTarget.dataset.index;
    for (var i = 0; i < this.data.theme.length; i++) {
      if (index == i) {
        var thisthemetitle = this.data.theme[i].theme_title
        wx.setStorageSync('theme_title', thisthemetitle)
        console.log(thisthemetitle)
        wx.switchTab({
          url: '../publish/publish'
        })
      }
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