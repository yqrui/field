// pages/colonization/colonization.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    normal: '请填写资料',
    hint: '请填写资料',
    land_i: 0,
    land: ['-请选择-', 'A区', 'B区', 'C区'],
    time: '',
    weather_i: 0,
    weather: ['-请选择-', '晴朗', '多云', '小雨', '中雨', '暴雨'],
    fertilizer_i: 0,
    fertilizer: ['-请选择-', '碳酸铵', '磷肥'],
    isspace: false,
    landspace: false,
    timespace: false,
    weatherspace: false,
    fertilizerspace: false,
    f_c_space: false,
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      time: util.formatDate(new Date())
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

  bindLand: function(e){
    console.log('种植地点')
    this.setData({
      land_i: e.detail.value,
      isspace: false,
      landspace: false,
      hint: this.data.normal
    })
  },
  bindTime: function (e) {
    console.log('种植时间')
    this.setData({
      time: e.detail.value,
      isspace: false,
      timespace: false,
      hint: this.data.normal
    })
  },
  bindWeather: function (e) {
    console.log("天气为", e.detail.value);
    this.setData({
      weather_i: e.detail.value,
      isspace: false,
      weatherspace: false,
      hint: this.data.normal
    })
  },
  bandFertilizer: function (e) {
    console.log("底肥为", e.detail.value);
    this.setData({
      fertilizer_i: e.detail.value,
      isspace: false,
      fertilizerspace: false,
      hint: this.data.normal
    })
  },
  bindFconsumption: function (e) {
    this.setData({
      isspace: false,
      f_c_space: false,
      hint: this.data.normal
    })
  },
  formSubmit: function (e) {//event
    var that = this
    console.log("表单数据为",e.detail.value)
    if (e.detail.value.land == 0){
      this.setData({
        isspace: true,
        landspace: true,
        hint: '种植地点不能为空'
      })
    } else
    if (e.detail.value.weather == 0) {
      this.setData({
        isspace: true,
        weatherspace: true,
        hint: '天气不能为空'
      })
    } else 
    if (e.detail.value.fertilizer == 0) {
      this.setData({
        isspace: true,
        fertilizerspace: true,
        hint: '底肥用料不能为空'
      })
    } else 
    if (e.detail.value.f_consumption == "") {
      this.setData({
        isspace: true,
        f_c_space: true,
        hint: '底肥用量不能为空'
      })
    } else {
      that.setData({
        loading: true
      })
        // setTimeout(function () {
        //   that.setData({
        //     loading: false
        //   })
        //   wx.showToast({
        //     title: '发送成功',
        //     icon: 'success',
        //     duration: 2000
        //   })
        // }, 1000);
        // setTimeout(function () {//设置延时
        //     wx.navigateTo({
        //       url: '../index/index'
        //     })
        // }, 2000);
        wx.request({
          url: 'http://localhost:8080/mini/servlet/MiniServlet',
          data: {
            land: e.detail.value.batch,
            time: this.data.time,
            weather: this.data.weather[e.detail.value.weather],
            fertilizer: this.data.fertilizer[e.detail.value.fertilizer],
            f_consumption: e.detail.value.f_consumption,
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
              // duration: 2000
            })
            setTimeout(function () {
              wx.navigateTo({
                url: ''
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
    console.log("reset")
    this.setData({
      hint: this.data.normal,
      land_i: 0,
      date: util.formatDate(new Date()),
      weather_i: 0,
      fertilizer_i: 0,
      isspace: false,
      landspace: false,
      timespace: false,
      weatherspace: false,
      fertilizerspace: false,
      f_c_space: false,
      loading: false
    })
  }
})