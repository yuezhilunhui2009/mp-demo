// pages/styles-demo/padding/padding.js
const domNameAndDataMap = {
  ['eg-padding-top']: 'egPaddingTop',
  ['eg-padding-right']: 'egPaddingRight',
  ['eg-padding-bottom']: 'egPaddingBottom',
  ['eg-padding-left']: 'egPaddingLeft',
  ['eg-padding']: 'egPadding',
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    egPaddingTop: 10,
    egPaddingRight: 10,
    egPaddingBottom: 10,
    egPaddingLeft: 10,
    egPadding: 10,
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
    const { value } = e.detail
    if (e.currentTarget.dataset.egname === 'eg-padding') {
      this.setData({
        egPaddingTop: value,
        egPaddingRight: value,
        egPaddingBottom: value,
        egPaddingLeft: value,
        egPadding: value,
      })
      return
    }

    this.setData({
      [domNameAndDataMap[e.currentTarget.dataset.egname]]: value,
    })
  },
})