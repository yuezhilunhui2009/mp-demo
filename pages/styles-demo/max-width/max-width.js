// pages/styles-demo/max-width/max-width.js
const domNameAndDataMap = {
  ['eg-max-width-rpx']: 'egMaxWidthRpx',
  ['eg-max-width-vw']: 'egMaxWidthVw',
  ['eg-max-width-percent']: 'egMaxWidthPercent',
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    egMaxWidthRpx: 375,
    egMaxWidthVw: 10,
    egMaxWidthPercent: 50,
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