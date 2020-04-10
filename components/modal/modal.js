// components/modal/modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hideMask: {
      type: Boolean,
      value: false
    },
    height: {
      type: String,
      value: ''
    },
    hideMaskPhone: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
   
    bindGetUserInfo(res) {
      var that = this
      let info = res;
      if (info.detail.userInfo) {
        console.log("点击了同意授权");
        that.setData({
          hideMask: true,
          hideMaskPhone: false
        })
        console.log(res)
      } else {
        console.log("点击了拒绝授权");
      }
    },
    onGetPhoneNumber(e) {
      var that = this
      var getPhone = wx.getStorageSync('is_getPhone')
      if (e.detail.iv) {
        console.log(e.detail.iv)       
        that.setData({
          hideMask: true,
          hideMaskPhone: true
        })
        wx.setStorageSync('is_getPhone', true);
        wx.switchTab({
          url: '../../pages/usercenter/usercenter',
        })
      } else { // 用户拒绝授权
        // do something
      }
    },
    toLogin() {
      wx.navigateTo({
        url: '../../pages/login/login'
      })
    }
  },

})