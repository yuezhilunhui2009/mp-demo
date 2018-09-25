Page({
  data: {
    list: [
      {
        id: 'box',
        name: '盒子',
        open: false,
        pages: ['width', 'min-width', 'max-width', 'height', 'min-height', 'max-height', 'padding', 'border', 'border-image', 'box-shadow', 'margin']
      },
      {
        id: 'layout',
        name: '布局',
        open: false,
        pages: ['display', 'float', 'visible', 'overflow']
      },
      {
        id: 'position',
        name: '定位',
        open: false,
        pages: ['position', 'z-index', 'top', 'right', 'bottom', 'left']
      },
      {
        id: 'background',
        name: '背景',
        open: false,
        pages: ['background', 'background-color', 'background-image', 'background-repeat', 'background-attachment', 'background-position']
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
