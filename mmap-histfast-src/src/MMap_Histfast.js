import MMap_Histfast_Dialog from './MMap_Histfast_Dialog' // eslint-disable-line

export default class MMap_histfast { // eslint-disable-line
  constructor (params) {
    this.config = params.config

    this.dialog = new MMap_Histfast_Dialog({ // eslint-disable-line
      config: this.config
    })

    cbKort.events.addListener('THEME_VISIBILITY_CHANGED', this.eventListener.bind(this))
    themeActions.registerAction(this.themeAction())
    this.remove_buttons()
  }
  themeAction () {
    var tooltip = this.config.tooltip
    return new spatialmap.ThemeAction({
      name: 'themeaction-mmap-histfast-sweco',
      actionfunction: this.actionfunction.bind(this),
      conditionfunction: this.conditionfunction.bind(this),
      buttonoptions: {
        tooltip: tooltip,
        icon: '[module:mmap-histfast-sweco.webdir]/images/kugghjul.png'
      }
    })
  }
  actionfunction (theme, button) {
    var themeActive = theme.isVisible()
    themeActive ? this.dialog.showDialog() : false
  }
  conditionfunction (theme) {
    var t = theme.name === 'theme-mmap-histfast-sweco'
    // var t = this.config.themes[theme.name]
    if (!t) {
      return false
    }
    return true
  }
  remove_buttons () { // eslint-disable-line
    var theme = themeActions._themegroup.getTheme('theme-mmap-histfast-sweco')
    if (!theme) return
    var actions = theme.getActions()
    var i = 0
    while (i < actions.length) {
      if (actions[i].name !== 'themeaction-mmap-histfast-sweco' && actions[i].name !== 'metadata') {
        theme.actions.splice(i, 1)
        i--
      }
      i++
    }
    // Attempt to remove DOM
    var domId = theme.domId
    var parent = document.getElementById(domId)
    var actionDoms;
    try {
      actionDoms = parent.querySelector('.actions>ul').children
    } catch (error) { 
      return
    }

    var i = 0
    while (i < actionDoms.length) {
      if (!actionDoms[i].id.endsWith('themeaction-mmap-histfast-sweco') && !actionDoms[i].id.endsWith('metadata')) {
        actionDoms[i].remove()
        i--
      }
      i++
    }
  }
  eventListener (evt, theme) {
    var visible = theme.isVisible()
    var themeName = theme.name
    if (themeName === 'theme-mmap-histfast-sweco' && !visible) {
      this.dialog.clear()
      this.dialog.closeDialog()
    } else if (themeName === 'theme-mmap-histfast-sweco' && visible) {
      this.dialog.init({
        config: this.config
      })
    }
  }
}
