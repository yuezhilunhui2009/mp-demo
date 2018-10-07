// pages/framework-demo/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 简单数据
    message: 'mp-demo示例文案',
    // 列表数据
    list: [
      'm-demo列表示例文案',
      'm-demo列表示例文案',
      'm-demo列表示例文案',
      'm-demo列表示例文案',
      'm-demo列表示例文案'
    ],
    // 条件
    VIEW_TRUE: true,
    VIEW_FALSE: false,
    // 模板数据
    templateA: {
      message: 'this is template A instance'
    },
    templateB: {
      message: 'this is template B instance'
    }
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

  eventHandler: function (e) {
    console.log(e, e.currentTarget.id)
  },
})