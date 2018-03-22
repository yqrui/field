// pages/plan/plan.js

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
    startflag: true,
    endflag: true,
    start: '',
    end: '',
    isspace: false,
    plantspace: false,
    batchspace: false,
    landspace: false,
    amountspace: false,
    startspace: false,
    endspace: false,
    outputspace: false,
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

  bandPlant: function (e) {
    // console.log('植物品种')
    this.setData({
      isspace: false,
      plantspace: false,
      hint: this.data.normal
    })
  },
  bandBatch: function (e) {
    // console.log('批次')
    this.setData({
      isspace: false,
      batchspace: false,
      hint: this.data.normal
    })
  },
  bandLand: function (e) {
    console.log('种植地点为' + e.detail.value)
    this.setData({
      land_i: e.detail.value,
      isspace: false,
      landspace: false,
      hint: this.data.normal
    })
  },
  bindAmount: function (e) {
    this.setData({
      isspace: false,
      amountspace: false,
      hint: this.data.normal
    })
  },
  bindStart: function (e) {
    console.log('开始时间', e.detail.value)
    this.setData({
      startflag: false,
      start: e.detail.value,
      isspace: false,
      startspace: false,
      hint: this.data.normal
    })
  },
  bindEnd: function (e) {
    this.setData({
      endflag: false,
      end: e.detail.value,
      isspace: false,
      endspace: false,
      hint: this.data.normal
    })
  },
  bindOutput: function (e) {
    this.setData({
      isspace: false,
      outputspace: false,
      hint: this.data.normal
    })
  },
  formSubmit: function (e) {
    console.log("表单数据为" + e.detail.value)
    var that = this
    // if(e.detail.value.plant == ""){
    //   this.setData({
    //     isspace: true,
    //     plantspace:true,
    //     hint:'植物品种不能为空'
    //   })
    // }else 
    // if (e.detail.value.batch == ""){
    //   this.setData({
    //     isspace: true,
    //     batchspace: true,
    //     hint: '批次不能为空'
    //   })
    // } else
    // if (e.detail.value.land == 0) {
    //   this.setData({
    //     isspace: true,
    //     landspace: true,
    //     hint: '种植地点不能为空'
    //   })
    // } else
    // if (e.detail.value.amount == "") {
    //   this.setData({
    //     isspace: true,
    //     amountspace: true,
    //     hint: '种植数量不能为空'
    //   })
    // } else
    // if (e.detail.value.start == "") {
    //   this.setData({
    //     isspace: true,
    //     startspace: true,
    //     hint: '开始时间不能为空'
    //   })
    // } else
    // if (e.detail.value.end == "") {
    //   this.setData({
    //     isspace: true,
    //     endspace: true,
    //     hint: '结束时间不能为空'
    //   })
    // } else
    if (e.detail.value.output == "") {
      this.setData({
        isspace: true,
        outputspace: true,
        hint: '预期产量不能为空'
      })
    } else {
      that.setData({
        loading: true
      })
      wx.request({
        url: 'http://localhost:8080/mini/servlet/MiniServlet',
        data: {
          plant: e.detail.value.plant,
          //输入
          batch: e.detail.value.batch,
          //输入
          land: this.data.land[e.detail.value.land],
          amount: e.detail.value.amount,
          start: e.detail.value.start,
          end: e.detail.value.end,
          output: e.detail.value.output,
          // plan: e.detail.value
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
            // wx.redirectTo({
            //   url: '../index/index'
            // })
          }, 500),
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
      land_i: 0,
      startflag: true,
      endflag: true,
      hint: this.data.normal,
      isspace: false,
      plantspace: false,
      batchspace: false,
      landspace: false,
      amountspace: false,
      startspace: false,
      endspace: false,
      outputspace: false,
    })
  }
})