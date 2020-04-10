// components/comment/comment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hideComment: {
      type: Boolean,
      value: false
    },
    height: {
      type: String,
      value: ''
    },
    all_comment: {
      type: String,
      value: '523'
    },
    comment_content: {
      type: Array,
      value: [{}]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // hideComment: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close_comment() {
      this.setData({
        hideComment: true
      })
    }
  }
})