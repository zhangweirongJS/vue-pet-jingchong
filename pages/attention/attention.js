// pages/attention/attention.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    con_null: false,
    attention_item: [{
        user_head: '../../images/user_head.jpg',
        username: '大米煮小米',
        pet: '未添加宠物~',
        atten: '已关注'
      },
      {
        user_head: '../../images/buou_head.jpg',
        username: '绿豆红豆',
        pet: '呼呼-猫、喋喋-狗',
        atten: '已关注'
      },
      {
        user_head: '../../images/video_img2.jpg',
        username: '鸡蛋儿',
        pet: '布丁',
        atten: '互相关注'
      },
      {
        user_head: '../../images/user_head.jpg',
        username: '大米煮小米',
        pet: '未添加宠物~',
        atten: '已关注'
      }
    ]
  },
  cancel_atten(e) {
    var that = this
    var thisid = e.currentTarget.dataset.id;
    var attention_item = this.data.attention_item;
    attention_item.splice(thisid, 1);
    that.setData({
      attention_item: attention_item
    })
    if (attention_item.length == 0) {
      that.setData({
        con_null: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var attention_item = this.data.attention_item;
    if (attention_item.length == 0) {
      that.setData({
        con_null: false
      })
    } else {
      that.setData({
        con_null: true
      })
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