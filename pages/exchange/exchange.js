// pages/exchange/exchange.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    con_null: true,
    exchange: [{
        change_time: '2019-08-16',
        change_img: '../../images/video_img.jpg',
        change_title: '123',
        change_binggan: '10',
        change_success: '已付款',
        add_name: '筱晓曦',
        add_phone: '13416940902',
        address: '广东省深圳市福田区呀呀呀'
      },
      {
        change_time: '2019-08-16',
        change_img: '../../images/video_img2.jpg',
        change_title: '玩具',
        change_binggan: '300',
        change_success: '已付款',
        add_name: '筱晓曦',
        add_phone: '13416940902',
        address: '广东省深圳市福田区呀呀呀'
      },
      {
        change_time: '2019-08-15',
        change_img: '../../images/video_img.jpg',
        change_title: '零食',
        change_binggan: '180',
        change_success: '已付款',
        add_name: '筱晓曦',
        add_phone: '13416940902',
        address: '广东省深圳市福田区呀呀呀'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var exchange = this.data.exchange;
    if (exchange.length == 0) {
      that.setData({
        con_null: false
      })
    } else {
      that.setData({
        con_null: true
      })
    }
    var result = [];
    var hash = {};
    for (var i = 0; i < exchange.length; i++) {
      var key = (typeof exchange[i]) + exchange[i];
      if (!hash[key]){
        result.push(exchange[i]);
        hash[key] = true;
      }
      console.log(123);

    }
    return result;

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