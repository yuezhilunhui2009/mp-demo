// pages/styles-demo/position/position.js
const domNameAndDataMap = {
  ['eg-position-1']: 'egPosition1',
  ['eg-position-2']: 'egPosition2',
  ['eg-top-1']: 'egTop1',
  ['eg-top-2']: 'egTop2',
  ['eg-right-1']: 'egRight1',
  ['eg-right-2']: 'egRight1',
  ['eg-bottom-1']: 'egBottom1',
  ['eg-bottom-2']: 'egBottom2',
  ['eg-left-1']: 'egLeft1',
  ['eg-left-2']: 'egLeft2',
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    position: [
      {name: 'static', value: 'static', checked: 'checked'},
      {name: 'relative', value: 'relative'},
      {name: 'absolute', value: 'absolute'},
      {name: 'fixed', value: 'fixed'},
      {name: 'center', value: 'center'},
      {name: 'page', value: 'page'},
      {name: 'sticky', value: 'sticky'},
    ],
    egPosition1: 'static',
    egPosition2: 'static',
    egTop1: '0',
    egTop2: '0',
    egRight1: '0',
    egRight2: '0',
    egBottom1: '0',
    egBottom2: '0',
    egLeft1: '0',
    egLeft2: '0',
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