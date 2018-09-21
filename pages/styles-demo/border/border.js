// pages/styles-demo/border/border.js
const domNameAndDataMap = {
  ['eg-border-width']: 'egBorderWidth',
  ['eg-border-color']: 'egBorderColor',
  ['eg-border-radius']: 'egBorderRadius',
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    borderStyleTypes: [
      {name: '无边框', value: 'none'},
      {name: '隐藏边框', value: 'hidden'},
      {name: '点状', value: 'dotted'},
      {name: '虚线', value: 'dashed'},
      {name: '实线', value: 'solid', checked: 'true'},
      {name: '双线', value: 'double'},
      {name: '3D凹槽', value: 'groove'},
      {name: '3D凸槽', value: 'ridge'},
      {name: '3D凹边', value: 'inset'},
      {name: '3D凸边', value: 'outset'},
    ],
    egBorderStyle: 'solid',
    egBorderWidth: 10,
    egBorderColor: 0,
    egBorderRadius: 0,
    egBorderColorHex: '#000000',
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
    let { value } = e.detail
    if (e.currentTarget.dataset.egname === 'eg-border-color') {
      this.setData({
        egBorderColor: value,
        egBorderColorHex: `#${value.toString(16)}`,
      })
      return
    }

    this.setData({
      [domNameAndDataMap[e.currentTarget.dataset.egname]]: e.detail.value,
    })
  },

  onRadioChange: function(e) {
    this.setData({
      egBorderStyle: e.detail.value,
    })
  }
})