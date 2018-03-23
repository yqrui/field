// pages/planting/planting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    loading: false,
    normal: '请填写资料',
    hint: '请填写资料',
    weather_i: 0,
    weather: ['-请选择-', '晴朗', '多云', '小雨', '中雨', '暴雨'],
    temperaturearray: [],
    temperature_i: [35, 0],
    temperature: '',
    watering: true,
    method_i: 0,
    method: ['-请选择-','浇灌','滴管','喷灌','漫灌'],
    isspace: false,
    weatherspace: false,
    temperaturespace: false,
    tptspace: true,
    humidityespace: false,
    w_c_space: false,
    methodspace: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var num = [], tpt = [];
    for (var i = 0; i <= 9; ++i)
      num[i] = i;
    for (var i = -10; i <= 50; ++i)
      tpt[i + 10] = i;
    this.setData({
      temperaturearray: [tpt, num]
    })
    // console.log(this.data.temperaturearray);

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

  bindWeather: function (e) {
    // console.log(e)
    this.setData({
      weather_i: e.detail.value,
      isspace: false,
      weatherspace: false,
      hint: this.data.normal
    })
  },
  bindTemperature: function (e) {
    // console.log(e)
    this.setData({
      temperature: this.data.temperaturearray[0][e.detail.value[0]] + '.' + this.data.temperaturearray[1][e.detail.value[1]],
      isspace: false,
      temperaturespace: false,
      tptspace: false,
      hint: this.data.normal
    })
    console.log(this.data.temperature)
  },
  bindHumidity: function (e) {
    this.setData({
      isspace: false,
      humidityspace: false,
      hint: this.data.normal
    })
  },
  bindWatering: function (e) {
    if(e.detail.value)
      this.setData({
        watering: true,
      })
    else{
      this.setData({
        watering: false,
      })
    }
      console.log(this.data.watering)
  },
  bindWconsumption: function (e) {
    this.setData({
      isspace: false,
      w_c_space: false,
      hint: this.data.normal
    })
  },
  bindMethod: function (e) {
    this.setData({
      method_i:e.detail.value,
      isspace: false,
      methodspace: false,
      hint: this.data.normal
    })
  },
  formSubmit: function (e) {
    var that = this;
    console.log(e.detail.value)
    if (e.detail.value.weather == 0) {
      this.setData({
        isspace: true,
        weatherspace: true,
        hint: "天气不能为空"
      })
    }else
    if (this.data.temperature == "") {
      this.setData({
        isspace: true,
        temperaturespace: true,
        hint: "温度不能为空"
      })
    } else 
    if (e.detail.value.humidity == "") {
      this.setData({
        isspace: true,
        humidityspace: true,
        hint: "相对湿度不能为空"
      })
    } else
    if (e.detail.value.w_consumption == "") {
      this.setData({
        isspace: true,
        w_c_space: true,
        hint: "浇水量不能为空"
      })
    } else
    if (e.detail.value.method == 0) {
      this.setData({
        isspace: true,
        methodspace: true,
        hint: "浇水方式不能为空"
      })
    } else
     {
      that.setData({
        loading: true
      })
      wx.request({
        url: 'http://localhost:8080/mini/servlet/MiniServlet',
        data: {
          // batch: this.data.batch[e.detail.value.batch],
          // date: this.data.date,
          weather: this.data.weather[e.detail.value.weather],
          // fertilizer: this.data.fertilizer[e.detail.value.fertilizer],
          // f_consumption: e.detail.value.f_consumption,
          // pesticide: this.data.pesticide[e.detail.value.pesticide],
          // p_consumption: e.detail.value.p_consumption,
          // seeding: e.detail.value
        },
        method: 'POST',
        header: {
          'content-type': 'application/json; charset=UTF-8'
        },
        //json格式且method方法为POST,不能通过request.getParameter获取数据
        //  x-www-form-urlencoded
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
      loading:false,
      hint: this.data.normal,
      weather_i:0,
      temperature_i: [35, 0],
      temperature:'',
      watering: false,
      isspace: false,
      weatherspace: false,
      temperaturespace: false,
      tptspace: true,
      humidityspace: false,
      w_c_space: false,
      method_i:0,
      methodspace: false
    })
  }

})