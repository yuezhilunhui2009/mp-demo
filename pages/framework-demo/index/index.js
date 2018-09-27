Page({
  data: {
    list: [
      {
        id: 'config',
        name: '配置',
        open: false,
        pages: ['global-config', 'page-config']
      }, {
        id: 'logic-layer',
        name: '逻辑层',
        open: false,
        pages: ['register-program', 'scene-value', 'register-page', 'router', 'module']
      }, {
        id: 'view-layer',
        name: '视图层',
        open: false,
        pages: ['wxml', 'wxss', 'base-component', 'wxs', 'wxml-cover-state', 'reponsive-viewport']
      }, {
        id: 'custom-component',
        name: '自定义组件',
        open: false,
        pages: ['template-and-style', 'constructor', 'event', 'behaviors', 'relation', 'abstruct-node', 'extentions', 'third-part']
      }, {
        id: 'plugins',
        name: '插件',
        open: false,
        pages: ['develop', 'use', 'api-limit', 'component-limit', 'function-page']
      }, {
        id: 'base-function',
        name: '基础能力',
        pages: ['network', 'storage', 'file-system', 'split-packages', 'multi-thred-worker']
      }, {
        id: 'hardware-function',
        name: '硬件能力',
        pages: ['blue-tooth', 'nfc', 'wifi']
      }, {
        id: 'open-function',
        name: '开放能力',
        pages: ['user-info', 'forward-message', 'launch-app', 'message', 'card', 'qr-code', 'data-analysis', 'nearby-mp']
      }, {
        id: 'useability',
        name: '可用性',
        pages: ['debug', 'runtime', 'operation-principle', 'performance']
      },
      {
        id: 'library',
        name: '基础库',
        pages: ['version', 'native-relation', 'old-version-compatible', 'updated-log']
      }
    ]
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  }
})
