// pages/styles-demo/display/display.js
const domNameAndDataMap = {
  ['eg-parent-display']: 'egParentDisplay',
  ['eg-child-display']: 'egChildDisplay',
  ['eg-flex-direction']: 'egFlexDirection',
  ['eg-flex-wrap']: 'egFlexWrap',
  ['eg-justify-content']: 'egJustifyContent',
  ['eg-align-content']: 'egAlignContent',
  ['eg-align-items']: 'egAlignItems',
  ['eg-flex-basis']: 'egFlexBasis',
  ['eg-flex-grow-1']: 'egFlexGrow1',
  ['eg-flex-grow-2']: 'egFlexGrow2',
  ['eg-flex-grow-3']: 'egFlexGrow3',
  ['eg-flex-grow-4']: 'egFlexGrow4',
  ['eg-flex-shrink-1']: 'egFlexShrink1',
  ['eg-flex-shrink-2']: 'egFlexShrink2',
  ['eg-flex-shrink-3']: 'egFlexShrink3',
  ['eg-flex-shrink-4']: 'egFlexShrink4',
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    display: [
      {name: 'none', value: 'none'},
      {name: 'inline', value: 'inline'},
      {name: 'block', value: 'block', checked: 'checked'},
      {name: 'list-item', value: 'list-item'},
      {name: 'inline-block', value: 'inline-block'},
      {name: 'table', value: 'table'},
      {name: 'inline-table', value: 'inline-table'},
      {name: 'table-caption', value: 'table-caption'},
      {name: 'table-cell', value: 'table-cell'},
      {name: 'table-row', value: 'table-row'},
      {name: 'table-column', value: 'table-column'},
      {name: 'flex', value: 'flex'},
    ],
    flexDirection: [
      {name: 'row', value: 'row', checked: 'checked'},
      {name: 'row-reverse', value: 'row-reverse'},
      {name: 'column', value: 'column'},
      {name: 'column-reverse', value: 'column-reverse'},
    ],
    flexWrap: [
      {name: 'nowrap', value: 'nowrap', checked: 'checked'},
      {name: 'wrap', value: 'wrap'},
      {name: 'wrap-reverse', value: 'wrap-reverse'},
    ],
    justifyContent: [
      {name: 'flex-start', value: 'flex-start', checked: 'checked'},
      {name: 'flex-end', value: 'flex-end'},
      {name: 'center', value: 'center'},
      {name: 'space-between', value: 'space-between'},
      {name: 'space-around', value: 'space-around'},
    ],
    alignContent: [
      {name: 'flex-start', value: 'flex-start'},
      {name: 'flex-end', value: 'flex-end'},
      {name: 'center', value: 'center'},
      {name: 'space-between', value: 'space-between'},
      {name: 'space-around', value: 'space-around'},
      {name: 'stretch', value: 'stretch', checked: 'checked'},
    ],
    alignItems: [
      {name: 'flex-start', value: 'flex-start'},
      {name: 'flex-end', value: 'flex-end'},
      {name: 'center', value: 'center'},
      {name: 'baseline', value: 'baseline'},
      {name: 'stretch', value: 'stretch', checked: 'checked'},
    ],
    egParentDisplay: 'block',
    egChildDisplay: 'block',
    egFlexDirection: 'row',
    egFlexWrap: 'nowrap',
    egJustifyContent: 'flex-start',
    egAlignContent: 'stretch',
    egAlignItems: 'stretch',
    egFlexBasis: '100',
    egFlexGrow1: '0',
    egFlexShrink1: '0',
    egFlexGrow2: '0',
    egFlexShrink2: '0',
    egFlexGrow3: '0',
    egFlexShrink3: '0',
    egFlexGrow4: '0',
    egFlexShrink4: '0',
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