// pages/styles-demo/overflow/overflow.js
const domNameAndDataMap = {
  ['eg-overflow']: 'egOverflow',
  ['eg-height']: 'egHeight',
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    overflow: [
      {name: 'visible', value: 'visible', checked: 'checked'},
      {name: 'hidden', value: 'hidden'},
      {name: 'scroll', value: 'scroll'},
      {name: 'auto', value: 'auto'},
    ],
    egOverflow: 'visible',
    egHeight: 100,
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

  onRadioChange: function(e) {
    let { value } = e.detail
    this.setData({
      [domNameAndDataMap[e.currentTarget.dataset.egname]]: e.detail.value,
    })
  },

  onSlideChanging: function (e) {
    let { value } = e.detail
    this.setData({
      [domNameAndDataMap[e.currentTarget.dataset.egname]]: e.detail.value,
    })
  }
})