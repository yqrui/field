// pages/seeding/seeding.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    plant_i:0,
    array: ['请选择','水稻', '玉米', '空心菜', '土豆','番薯'],
    date:'',
    batch: ['请选择','B01', 'B02', 'B03', 'B04', 'B05'],
    batch_i: 0,
    insecticide: ['无','敌敌畏','久效磷'],
    insecticide_i: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(util.formatDate(new Date()));
    this.setData({
      date: util.formatDate(new Date())
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

  bindPlantChange: function (e) {
    // console.log('植物品种为', e.detail.value);
    this.setData({
      plant_i: e.detail.value,
    })
  },
  bindBatchChange: function (e) {
    console.log("批次为", e.detail.value);
    this.setData({
      batch_i: e.detail.value
    })
  },
  bindDateChange:function(e){
    // console.log("播种时间为",e.detail.value);
    this.setData({
      date: e.detail.value
    })
  },
  bandInsecticideChange:function(e) {
    console.log("基质用药为",e.detail.value);
    this.setData({
      insecticide_i: e.detail.value
    })
  },

  formSubmit: function(e){
    
    wx.request({
      url: 'http://dev.wxapp-union.com/setForm',
      data:{
        plant:[],
        batch:[]
      },
      method: 'POST',
      header: {
          'content-type': 'application/json; charset=UTF-8'
      },
      success:function(res){
        console.log(res.data)
      },
      fail:function(){

      },
      complete: function(){}
    })
  },
  formReset: function(e){
    console.log("reset")
  }

})

