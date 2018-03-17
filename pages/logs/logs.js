//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  clear: function (e) {
    wx.clearStorageSync()
    // try {
    //   wx.removeStorageSync('logs')
    // } catch (e) {
    //   // Do something when catch error
    // }
    this.setData({
      logs: wx.getStorageSync('logs')
    })
    console.log('清除',this.data.logs)
  }
})
