// pages/styles-demo/width/width.js
const domNameAndDataMap = {
  ['eg-width-px']: 'egWidthPx',
  ['eg-width-rpx']: 'egWidthRpx',
  ['eg-width-vw']: 'egWidthVw',
  ['eg-width-percent']: 'egWidthPercent',
  ['eg-width-rem']: 'egWidthRem',
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    egWidthPx: 100,
    egWidthRpx: 375,
    egWidthVw: 10,
    egWidthPercent: 50,
    egWidthRem: 3.75,
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

  onSlideChanging: function (e) {
    this.setData({
      [domNameAndDataMap[e.currentTarget.dataset.egname]]: e.detail.value,
    })
  },
})