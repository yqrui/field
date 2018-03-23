// pages/detection/detection.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    normal: '请填写资料',
    hint: '请填写资料',
    plant_i: 0,
    plant: ['-请选择-', '水稻', '玉米', '空心菜', '土豆', '番薯'],
    date: '',
    position_i:0,
    position: ['-请选择-','A区','B区','C区'],
    loading: false,
    isspace: false,
    plantspace:false,
    positionspace:false,
    resultspace:false
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
  bindPlant: function (e) {
    console.log('植物品种为', e.detail.value);
    this.setData({
      plant_i: e.detail.value,
      isspace: false,
      plantspace: false,
      hint: this.data.normal
    })
  },
  bindDate: function (e) {
    // console.log("时间为", e.detail.value);
    this.setData({
      date: e.detail.value
    })
  },
  bindposition: function (e) {
    this.setData({
      isspace: false,
      position_i: e.detail.value,
      positionspace: false,
      hint: this.data.normal
    })
  },
  bindresult: function (e) {
    this.setData({
      isspace: false,
      resultspace: false,
      hint: this.data.normal
    })
  },
  formSubmit: function (e) {//event
    var that = this
    console.log(e.detail.value)
    if (e.detail.value.plant == 0){
      this.setData({
        isspace: true,
        plantspace: true,
        hint: '植物品种不能为空'
      })
    } else
    if (e.detail.value.position == 0) {
      this.setData({
        isspace: true,
        positionspace: true,
        hint: '取样地点不能为空'
      })
    }else
    if (e.detail.value.result == "") {
      this.setData({
        isspace: true,
        resultspace: true,
        hint: '检测结果不能为空'
      })
    } else
    {
      that.setData({
        loading: true
      })
      wx.request({
        url: 'http://localhost:8080/mini/servlet/MiniServlet',
        data: {
          date: this.data.date,
          // seeding: e.detail.value
        },
        position: 'POST',
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
  formReset:function(){
    this.setData({
      plant_i:0,
      position_i:0,
      loading: false,
      isspace: false,
      plantspace: false,
      positionspace: false,
      resultspace: false,
      hint:this.data.normal
    })
  }
})