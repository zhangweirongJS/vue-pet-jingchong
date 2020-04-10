//index.js
//获取应用实例
const app = getApp()

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  data: {
    hideMask: false,
    hideMaskPhone: true,

    tabs: ["推荐", "关注"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    // video: []

    video: [{
        video_src: '../../images/video_img.jpg',
        tag: '#小奶猫',
        video_description: '给我就KUBI定制的新家',
        user_head: '../../images/user_head.jpg',
        username: '十月',
        publish_time: '15:37',
        mark: '200',
        like: '68',
        forward: '123',
        icon_like: 'icon-likefill',
        checked: true
      },
      {
        video_src: '../../images/video_img.jpg',
        tag: '#小奶猫22',
        video_description: '给我就KUBI定制的新家',
        user_head: '../../images/user_head.jpg',
        username: '十月333',
        publish_time: '11:08',
        mark: '111',
        like: '55',
        forward: '22',
        icon_like: 'icon-like',
        checked: false
      },
      {
        video_src: '../../images/video_img2.jpg',
        tag: '#小奶猫22',
        video_description: '给我就KUBI定制的新家!!',
        user_head: '../../images/user_head.jpg',
        username: '十月333',
        publish_time: '11:08',
        mark: '202',
        like: '0',
        forward: '36',
        icon_like: 'icon-like',
        checked: false
      },
      {
        video_src: '../../images/video_img2.jpg',
        tag: '#小奶猫22',
        video_description: '给我就KUBI定制的新家',
        user_head: '../../images/user_head.jpg',
        username: '十月333',
        mark: '200',
        like: '99',
        forward: '120',
        icon_like: 'icon-like',
        checked: true
      }
    ],

  },
  cancel() {
    this.setData({
      hidden: true
    })
  },
  confirm() {
    this.setData({
      nocancel: !this.data.nocancel
    })
  },
  onLoad: function() { 
    var that = this; 
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  //事件处理函数
  Todetails: function() {
    wx.navigateTo({
      url: '../details/details'
    })
  },
  like(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var thisvideo = that.data.video;
    for (var i = 0; i < thisvideo.length; i++) {
      if (index == i) {
        if (thisvideo[i].checked == false) {
          thisvideo[i].like = parseInt(thisvideo[i].like) + 1;
          thisvideo[i].icon_like = "icon-likefill"
          thisvideo[i].checked = true
        } else {
          thisvideo[i].like = parseInt(thisvideo[i].like) - 1;
          thisvideo[i].icon_like = "icon-like"
          thisvideo[i].checked = false
        }

      }
    }
    that.setData({
      video: thisvideo
    })
  },
  toTheme(e) {
    wx.navigateTo({
      url: '../theme/theme',
    })
  },
  toTask(e) {
    wx.navigateTo({
      url: '../task/task',
    })
  },
  onShareAppMessage: function(res) {
    if (res.from == 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
      return {
        imageUrl: '../../images/video_img.jpg',
        title: '给我KUBI定制的新家',
        path: '../details/details'
      }
    }
    return {
      title: '首页',
      path: '../index/index'
    }
  },
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    setTimeout(function() {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  onShow: function() {
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
          console.log(123)
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

    let vx = wx.getStorageSync('video')
    that.setData({
      video: vx
    })
    // wx.getStorage({
    //   key: 'isLogin',
    //   success(res) {
    //     console.log(res)
    //     if (res.data == false) {
    //       that.setData({
    //         hideMask: true
    //       })
    //     } else {
    //       that.setData({
    //         hideMask: false
    //       })
    //     }
    //   }
    // })
  }

})