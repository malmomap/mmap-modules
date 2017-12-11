import MMap_Histfast_Dialog from './MMap_Histfast_Dialog' // eslint-disable-line

export default class MMap_histfast { // eslint-disable-line
  constructor (params) {
    this.config = params.config

    this.dialog = new MMap_Histfast_Dialog({ // eslint-disable-line
      config: this.config
    })

    cbKort.events.addListener('THEME_CHANGED', this.eventListener.bind(this))
    themeActions.registerAction(this.themeAction())
    this.remove_buttons()
  }
  themeAction () {
    var tooltip = this.config.tooltip

    return new ThemeAction({
      name: 'themeaction-mmap-histfast',
      actionfunction: this.actionfunction.bind(this),
      conditionfunction: this.conditionfunction.bind(this),
      buttonoptions: {
        tooltip: tooltip,
        icon: '[module:mmap-histfast.webdir]/images/kugghjul.png'
      }
    })
  }
  actionfunction (theme, button) {
    var themeActive = theme.visible
    themeActive ? this.dialog.showDialog() : false
  }
  conditionfunction (theme) {
    var t = theme.name === 'theme-mmap-histfast'
    // var t = this.config.themes[theme.name]
    if (!t) {
      return false
    }
    return true
  }
  remove_buttons () { // eslint-disable-line
    var theme = themeActions.themegroup.getTheme('theme-mmap-histfast')
    var actions = theme.actions
    var i = 0
    while (i < actions.length) {
      if (actions[i].name !== 'themeaction-mmap-histfast' && actions[i].name !== 'metadata') {
        theme.actions.splice(i, 1)
        i--
      }
      i++
    }
  }
  eventListener (evt, theme) {
    var visible = theme.visible
    var themeName = theme.name
    if (themeName === 'theme-mmap-histfast' && !visible) {
      this.dialog.clear()
      this.dialog.closeDialog()
    } else if (themeName === 'theme-mmap-histfast' && visible) {
      this.dialog.init({
        config: this.config
      })
    }
  }
}
