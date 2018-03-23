// pages/harvest/harvest.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    normal: '请填写资料',
    hint: '请填写资料',
    plant_i: 0,
    plant: ['-请选择-', '水稻', '玉米', '空心菜', '土豆', '番薯'],
    date:'',
    weather_i: 0,
    weather: ['-请选择-', '晴朗', '多云', '小雨', '中雨', '暴雨'],
    weatherspace:false,
    methodspace: false,
    areaspace:false,
    weightspace:false,
    operatorspace:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      date: util.formatDate(new Date()),
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  bindDate: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindWeather: function (e) {
    this.setData({
      weather_i: e.detail.value,
      isspace: false,
      weatherspace: false,
      hint: this.data.normal
    })
  },
  bindMethod: function (e) {
    this.setData({
      isspace: false,
      methodspace: false,
      hint: this.data.normal
    })
  },
  bindarea: function (e) {
    this.setData({
      isspace: false,
      areaspace: false,
      hint: this.data.normal
    })
  },
  bindWeight: function (e) {
    this.setData({
      isspace: false,
      weightspace: false,
      hint: this.data.normal
    })
  },
  bindoperator: function (e) {
    this.setData({
      isspace: false,
      operatorspace: false,
      hint: this.data.normal
    })
  },
  formSubmit: function (e) {//event
    var that = this
    console.log("表单数据为",e.detail.value)
    // if (e.detail.value.weather == 0){
    //   this.setData({
    //     isspace: true,
    //     weatherspace: true,
    //     hint: '天气不能为空'
    //   })
    // } else
    // if (e.detail.value.method == "") {
    //   this.setData({
    //     isspace: true,
    //     methodspace: true,
    //     hint: '晾晒方式不能为空'
    //   })
    // }else
    // if (e.detail.value.area == "") {
    //   this.setData({
    //     isspace: true,
    //     areaspace: true,
    //     hint: '采收面积不能为空'
    //   })
    // } else
      // if (e.detail.value.weight == "") {
      //   this.setData({
      //     isspace: true,
      //     weightspace: true,
      //     hint: '采收重量不能为空'
      //   })
      // } else
    // if (e.detail.value.operator == "") {
    //   this.setData({
    //     isspace: true,
    //     operatorspace: true,
    //     hint: '采收重量不能为空'
    //   })
    // } else
     {
      that.setData({
        loading: true
      })
      wx.request({
        url: 'http://localhost:8080/mini/servlet/MiniServlet',
        data: {
          date: this.data.date,
          weather: this.data.weather[e.detail.value.weather],
          // seeding: e.detail.value
        },
        method: 'POST',
        header: {
          'content-type': 'application/json; charset=UTF-8'
        },
        success: function (res) {
          that.setData({
            loading: false
          })
          wx.showToast({
            title: '提交成功',
            icon: 'success',
          })
          setTimeout(function () {
            wx.navigateTo({
              url: '../index/index'
            })
          }, 500);
          console.log("成功接收数据:")
          console.log(res.data)
        },
        fail: function () {
          that.setData({
            loading: false
          })
          wx.showToast({
            title: '未知错误',
            icon: 'none'
          })
        },
        complete: function () { }
      })
    }
  },
  formReset: function (e) {
    this.setData({
      hint: this.data.normal,
      date: util.formatDate(new Date()),
      weather_i: 0,
      isspace: false,
      weatherspace: false,
      methodspace: false,
      areaspace: false,
      weightspace: false,
      operatorspace: false,
      loading: false,
    })
  }
})