// pages/styles-demo/min-height/min-height.js
const domNameAndDataMap = {
  ['eg-min-height-rpx']: 'egMinHeightRpx',
  ['eg-min-height-vh']: 'egMinHeightVh',
  ['eg-min-height-percent']: 'egMinHeightPercent',
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    egMinHeightRpx: 375,
    egMinHeightVh: 10,
    egMinHeightPercent: 50,
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