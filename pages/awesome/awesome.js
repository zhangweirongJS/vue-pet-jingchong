// pages/awesome/awesome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    con_null: false,
    awesome: [{
        user_head: '../../images/user_head.jpg',
        username: '大米煮小米',
        product: '#小可爱',
        time: '2019-8-12 14:20',
        right: 0
      },
      {
        user_head: '../../images/panda_head.jpg',
        username: '绿的红豆',
        product: '#小可爱',
        time: '2019-8-02 10:30',
        right: 0
      },
      {
        user_head: '../../images/user_head.jpg',
        username: '大米煮小米',
        product: '#小可爱',
        time: '2019-8-12 14:20',
        right: 0
      },
      {
        user_head: '../../images/buou_head.jpg',
        username: '大米煮小米',
        product: '萌萌哒',
        time: '2019-8-12 14:20',
        right: 0
      }
    ],
    delBtnWidth: 160,
  },
  drawStart: function(e) {
    // console.log("drawStart");  
    var touch = e.touches[0]

    for (var index in this.data.awesome) {
      var item = this.data.awesome[index]
      item.right = 0
    }
    this.setData({
      awesome: this.data.awesome,
      startX: touch.clientX,
    })

  },
  drawMove: function(e) {
    var touch = e.touches[0]
    var item = this.data.awesome[e.currentTarget.dataset.index]
    var disX = this.data.startX - touch.clientX

    if (disX >= 20) {
      if (disX > this.data.delBtnWidth) {
        disX = this.data.delBtnWidth
      }
      item.right = disX
      this.setData({
        awesome: this.data.awesome
      })
    } else {
      item.right = 0
      this.setData({
        awesome: this.data.awesome
      })
    }
  },
  drawEnd: function(e) {
    var item = this.data.awesome[e.currentTarget.dataset.index]
    if (item.right >= this.data.delBtnWidth / 2) {
      item.right = this.data.delBtnWidth
      this.setData({
        awesome: this.data.awesome,
      })
    } else {
      item.right = 0
      this.setData({
        awesome: this.data.awesome,
      })
    }
  },
  //点击删除按钮事件
  delItem: function(e) {
    var that =this
    //获取列表中要删除项的下标
    var index = e.target.dataset.index;
    var awesome = this.data.awesome;
    //移除列表中下标为index的项
    awesome.splice(index, 1);
    //更新列表的状态
    that.setData({
      awesome: awesome
    });
    if (awesome.length == 0) {
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
    var awesome = this.data.awesome;
    if (awesome.length == 0) {
      console.log(885)
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