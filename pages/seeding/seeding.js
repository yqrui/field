// pages/seeding/seeding.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    normal:'请填写资料',
    hint:'',
    plant_i:0,
    plant: ['-请选择-','水稻', '玉米', '空心菜', '土豆','番薯'],
    date:'',
    batch_i: 0,
    batch: ['-请选择-','B01', 'B02', 'B03', 'B04', 'B05'],
    weather_i:0,
    weather: ['-请选择-','晴朗','多云','小雨','中雨','暴雨'],
    fertilizer_i:0,
    fertilizer: ['-请选择-', '碳酸铵', '磷肥'],
    pesticide_i: 0,
    pesticide: ['-请选择-','无','敌敌畏','久效磷'],
    isspace: false, 
    plantspace: false, 
    batchspace: false, 
    datespace :false, 
    weatherspace :false, 
    fertilizerspace:false,
    f_c_space: false, 
    pesticidespace: false, 
    p_c_space: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(util.formatDate(new Date()));
    this.setData({
      date: util.formatDate(new Date()),
      hint: this.data.normal
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

  bindPlant: function (e) {
    console.log('植物品种为', e.detail.value);
    this.setData({
      plant_i: e.detail.value,
      isspace: false,
      plantspace: false,
      hint: this.data.normal
    })
  },
  bindBatch: function (e) {
    console.log("批次为", e.detail.value);
    this.setData({
      batch_i: e.detail.value,
      isspace: false,
      batchspace: false,
      hint: this.data.normal
    })
  },
  bindDate:function(e){
    console.log("播种时间为",e.detail.value);
    this.setData({
      date: e.detail.value
    })
  },
  bindWeather: function(e){
    console.log("天气为", e.detail.value);
    this.setData({
      weather_i: e.detail.value,
      isspace: false,
      weatherspace: false,
      hint: this.data.normal
    })
  },
  bandFertilizer: function(e){
    console.log("底肥为", e.detail.value);    
    this.setData({
      fertilizer_i: e.detail.value,
      isspace: false,
      fertilizerspace: false,
      hint: this.data.normal
    })
  },
  bindFconsumption: function(e){
    this.setData({
      isspace: false,
      f_c_space: false,
      hint: this.data.normal
    })
  },
  bandPesticide:function(e) {
    console.log("基质用药为",e.detail.value);
    this.setData({
      pesticide_i: e.detail.value,
      isspace: false,
      pesticidespace: false,
      hint: this.data.normal
    })
  },
  bindPconsumption: function(){
    this.setData({
      isspace: false,
      p_c_space: false,
      hint: this.data.normal
    })
  },

  formSubmit: function(e){//event
    console.log("表单数据为",e.detail.value)
    if (e.detail.value.plant == 0){
      // console.log("kong")
      this.setData({
        isspace: true,
        plantspace: true,
        hint: '植物品种不能为空'
      })
    } else
     if (e.detail.value.batch == 0){
      this.setData({
        isspace: true,
        batchspace: true,
        hint: '批次不能为空'
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
    } else 
    if (e.detail.value.pesticide == 0) {
      this.setData({
        isspace: true,
        pesticidespace: true,
        hint: '基质用药不能为空'
      })
    } else if (e.detail.value.p_consumption == 0) {
      this.setData({
        isspace: true,
        p_c_space: true,
        hint: '药剂用量不能为空'
      })
    } else{
      wx.request({
        url: 'http://localhost:8080/mini/servlet/MiniServlet',
        data:{
          plant: this.data.plant[e.detail.value.plant],
          batch: this.data.batch[e.detail.value.batch],
          date: this.data.date,
          weather: this.data.weather[e.detail.value.weather],
          fertilizer: this.data.fertilizer[e.detail.value.fertilizer],
          f_consumption: e.detail.value.f_consumption,
          pesticide: this.data.pesticide[e.detail.value.pesticide],
          p_consumption: e.detail.value.p_consumption,
          // seeding: e.detail.value
        },
        method: 'POST',
        header: {
          'content-type': 'application/json; charset=UTF-8'
        },
        //json格式且method方法为POST,不能通过request.getParameter获取数据
        //  x-www-form-urlencoded
        success:function(res){
          console.log("成功接收数据:")
          console.log(res.data)
        },
        fail:function(){

        },
        complete: function(){}
      })
    }
  },
  formReset: function(e){
    console.log("reset")
    this.setData({
      hint: this.data.normal,
      plant_i: 0,
      date: util.formatDate(new Date()),
      batch_i: 0,
      weather_i: 0,
      fertilizer_i: 0,
      pesticide_i: 0,
      isspace:false,
      plantspace: false,
      batchspace: false,
      datespace: false,
      weatherspace: false,
      fertilizerspace: false,
      f_c_space: false,
      pesticidespace: false,
      p_c_space: false
    })
  }

})

