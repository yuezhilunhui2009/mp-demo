// pages/styles-demo/margin/margin.js
const domNameAndDataMap = {
  ['eg-margin-top']: 'egMarginTop',
  ['eg-margin-right']: 'egMarginRight',
  ['eg-margin-bottom']: 'egMarginBottom',
  ['eg-margin-left']: 'egMarginLeft',
  ['eg-margin']: 'egMargin',
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isMarginAuto: false,
    egMarginTop: 10,
    egMarginRight: 10,
    egMarginBottom: 10,
    egMarginLeft: 10,
    egMargin: 10,
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
    if (e.currentTarget.dataset.egname === 'eg-margin') {
      this.setData({
        egMarginTop: value,
        egMarginRight: value,
        egMarginBottom: value,
        egMarginLeft: value,
        egMargin: value,
      })
      return
    }

    this.setData({
      [domNameAndDataMap[e.currentTarget.dataset.egname]]: value,
    })
  },

  onRadioChange: function(e) {
    const { value } = e.detail
    const margin = value === 'true' ? 'auto' : 10

    this.setData({
      isMarginAuto: value === 'true',
      egMarginTop: margin,
      egMarginRight: margin,
      egMarginBottom: margin,
      egMarginLeft: margin,
      egMargin: margin,
    })
  }
})