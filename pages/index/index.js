// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[],
    obj:{
      id:0,
      value:'a',
    },
  
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

  Delete: function(){
    console.log('点击了删除')
    
  },

  Add: function(){
    this.data.obj.id = this.data.obj.id + 1,
    // this.data.array=this.data.array.concat(this.data.obj),
    this.setData({
      array: this.data.array.concat(this.data.obj)
    })
    //需要setData，页面相应的数据才能渲染
    // console.log('点击了添加', this.data.array)
  }


})