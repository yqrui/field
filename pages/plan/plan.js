// pages/plan/plan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start_f:true,
    end_f: true,
    land_i:0,
    land:['请选择','A区','B区','C区'],
    start:'',
    end:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  bandLand: function(e){
    // console.log(e.detail.value)
    this.setData({
      land_i: e.detail.value
    })
  },
  bindStart: function(e){
    // console.log('开始时间',e.detail.value)
    this.setData({
      start_f:false,
      start: e.detail.value
    })
  },
  bindEnd: function (e) {
    this.setData({
      end_f: false,
      end: e.detail.value
    })
  },

  formSubmit: function(e){
    console.log(this.data.land[e.detail.value.land])
  },
  formReset: function(e){
    this.setData({
      land_i:0,
      start_f: true,
      end_f: true,
    })
  }
})