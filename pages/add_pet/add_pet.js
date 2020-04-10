// pages/add_pet/add_pet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choose_sex: ['请选择', 'GG', 'MM','保密'],
    pet: ['请选择', 'GG', 'MM', '保密'],
    Sex_index: 0,
    date: '请选择',
    img: '../../images/pet_head.svg'
  },
  //选择照片
  choosePet(e) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        that.setData({
          img: res.tempFilePaths,
        })
      }
    })
  },
  //选择宠物性别
  chooseSex: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      Sex_index: e.detail.value
    })
  },
  //选择宠物出生日期
  chooseDate: function(e) {
    this.setData({
      date: e.detail.value
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
  onShareAppMessage: function() {

  }
})