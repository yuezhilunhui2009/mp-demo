Page({
  data: {
    list: [
      {
        id: 'network',
        name: '网络',
        open: false,
        pages: ['download', 'request', 'web-socket', 'upload']
      }, {
        id: 'multi-media',
        name: '多媒体',
        open: false,
        pages: ['audio', 'camera', 'real-time-audio', 'video', 'font', 'image', 'background-audio', 'record-audio']
      }, {
        id: 'file',
        name: '文件',
        open: false,
        pages: ['file']
      }, {
        id: 'cache',
        name: '数据缓存',
        open: false,
        pages: ['cache']
      }, {
        id: 'location',
        name: '位置',
        open: false,
        pages: ['location']
      }, {
        id: 'device',
        name: '设备',
        pages: ['network', 'accelerometer', 'clipboard', 'compass', 'contact', 'gyroscope', 'beacons', 'motion', 'battery', 'phone-call', 'scan-code', 'vibrate', 'memery-warning', 'blue-tooth', 'nfc', 'screen', 'wifi']
      }, {
        id: 'gui',
        name: '界面',
        pages: ['pull-down-refresh', 'next-tick', 'menu', 'tips', 'scroll', 'animation', 'window', 'background', 'tab-bar', 'top-bar', 'navigation-bar']
      }, {
        id: 'ad',
        name: '开放能力',
        pages: ['ad', 'open-data', 'web-view']
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
