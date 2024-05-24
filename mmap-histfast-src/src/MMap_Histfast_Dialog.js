export default class MMap_Histfast_Dialog { // eslint-disable-line
  constructor (params) {
    this.config = params.config
    this._dialog = null
    this._date = null
  }

  init () {
    if (!this._dialog) {
      var title = this.config.title
      this._dialog = new spatialmap.gui.Dialog({
        title: title,
        id: 'wms-mmap-histfast-sweco',
        width: 250,
        resizable: false// ,
        // closeHandler: spatialmap.Function.bind(this.closeHandler, this)
      })
    }
    var html = `
      <div class="mmap-histfast-sweco-content" style="padding:10px 10px;">
        <label for="mmap-histfast-sweco-slider" id="mmap-histfast-sweco-slider-label"></label><br><br>
        <input style="width:100%;" id="mmap-histfast-sweco-slider" type="range" min="0" max="1" value="1" id="fader" />
      </div>
    `
    this._dialog.addContentHTML(html)
    this.showDialog()

    var now = new Date()
    var start_year = now.getFullYear() - this.config.start_value // eslint-disable-line
    var start_val = `${this.cleanNbr(start_year)}-${this.cleanNbr(now.getMonth() + 1)}-${this.cleanNbr(now.getDate())}` // eslint-disable-line

    jq('#mmap-histfast-sweco-slider-label').html(start_val)
    this.min_value = this.config.min_value
    jq('#mmap-histfast-sweco-slider').attr('min', this.toTimeStamp(this.min_value))
    jq('#mmap-histfast-sweco-slider').attr('max', this.toTimeStamp('-1'))
    jq('#mmap-histfast-sweco-slider').attr('step', 24 * 60 * 60 * 1000) // Steps of one week
    jq('#mmap-histfast-sweco-slider').attr('value', this.toTimeStamp(start_val))
    jq('#mmap-histfast-sweco-slider').on('change', this._change.bind(this))

    var url = this.config.wms.url
    var layer = this.config.wms.layer
    var srs = this.config.wms.srs

    this.wms_source = new ol.source.ImageWMS({
      url,
      serverType: 'geoserver',
      params: {
        VERSION: '1.1.1',
        layers: layer,
        SRS: srs,
        transparent: true,
        format: 'image/png8',
        CQL_FILTER: this.fromTimeStamp() + ' >= fromdate AND ' + this.fromTimeStamp() + ' < todate'
      }
    })
    this.wms_layer = new ol.layer.Image({zIndex: Infinity, source: this.wms_source})
    cbKort._mapControl.map.addLayer(this.wms_layer)
  }
  _change (evt) {
    var timestamp = parseInt(jq('#mmap-histfast-sweco-slider').val(), 0)
    var d = new Date(timestamp)
    var prettyDate = d.getFullYear() + '-' + this.cleanNbr(d.getMonth() + 1) + '-' + this.cleanNbr(d.getDate())
    jq('#mmap-histfast-sweco-slider-label').html(prettyDate)
    this.wms_source.updateParams({
      CQL_FILTER: this.fromTimeStamp() + ' >= fromdate AND ' + this.fromTimeStamp() + ' < todate'
    })
  }
  showDialog () {
    this._dialog.show()
  }
  closeDialog () {
    this._dialog.closeDialog()
  }
  clear () {
    cbKort._mapControl.map.removeLayer(this.wms_layer)
  }
  toTimeStamp (date) {
    if (date === '-1') {
      return new Date().getTime()
    } else {
      var d = date.split('-')
      return new Date(parseInt(d[0], 10), parseInt(d[1], 10) - 1, parseInt(d[2], 10)).getTime()
    }
  }
  fromTimeStamp () {
    var d
    var timestamp = parseInt(jq('#mmap-histfast-sweco-slider').val(), 0)
    d = new Date(timestamp)
    return d.getFullYear() + '' + this.cleanNbr(d.getMonth() + 1) + '' + this.cleanNbr(d.getDate())
  }
  cleanNbr (nbr) {
    return nbr > 9 ? nbr : '0' + nbr
  }
  closeHandler () {
  }
}
