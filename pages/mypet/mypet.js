// pages/add_pet/add_pet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pet_item: [{
        id: 1,
        pet_head: '../../images/panda_head.jpg',
        pet_name: 'panda(熊猫)',
        pet_old: '2岁',
        pet_variety: '品种：英短蓝白'
      },
      {
        id: 2,
        pet_head: '../../images/naiyou_head.jpg',
        pet_name: '奶油',
        pet_old: '1岁',
        pet_variety: '品种：美短加白/起司猫'
      },
      {
        id: 3,
        pet_head: '../../images/buou_head.jpg',
        pet_name: 'jackson',
        pet_old: '2岁',
        pet_variety: '品种：布偶猫'
      }
    ]
  },
  add_pet(e){
    wx.navigateTo({
      url: '../add_pet/add_pet',
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