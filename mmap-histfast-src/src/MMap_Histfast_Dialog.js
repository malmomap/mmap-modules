export default class MMap_Histfast_Dialog { // eslint-disable-line
  constructor (params) {
    this.config = params.config
    this._dialog = null
    this._date = null
  }

  init () {
    if (!this._dialog) {
      var title = this.config.title
      this._dialog = new Dialog({
        title: title,
        id: 'wms-histfast',
        width: 250,
        resizable: false,
        closeHandler: SpatialMap.Function.bind(this.closeHandler, this)
      })
    }
    var html = `
      <div class="histfast-content" style="padding:10px 10px;">
        <label for="histfast-slider" id="histfast-slider-label"></label><br><br>
        <input style="width:100%;" id="histfast-slider" type="range" min="0" max="1" value="1" id="fader" />
      </div>
    `
    this._dialog.addContentHTML(html)
    this.showDialog()

    var now = new Date()
    var start_year = now.getFullYear() - this.config.start_value // eslint-disable-line
    var start_val = `${this.cleanNbr(start_year)}-${this.cleanNbr(now.getMonth() + 1)}-${this.cleanNbr(now.getDate())}` // eslint-disable-line

    jq('#histfast-slider-label').html(start_val)
    this.min_value = this.config.min_value
    jq('#histfast-slider').attr('min', this.toTimeStamp(this.min_value))
    jq('#histfast-slider').attr('max', this.toTimeStamp('-1'))
    jq('#histfast-slider').attr('step', 24 * 60 * 60 * 1000) // Steps of one week
    jq('#histfast-slider').attr('value', this.toTimeStamp(start_val))
    jq('#histfast-slider').on('change', this._change.bind(this))

    var url = this.config.wms.url
    var layer = this.config.wms.layer
    var srs = this.config.wms.srs
    this.wms_layer = new OpenLayers.Layer.WMS('Histfast_WMS', url, {
      layers: layer,
      SRS: srs,
      transparent: true,
      format: 'image/png8',
      CQL_FILTER: this.fromTimeStamp() + ' >= fromdate AND ' + this.fromTimeStamp() + ' < todate'
    }, {
      singleTile: true,
      ratio: 1
    })
    cbKort.mapObj.map.addLayer(this.wms_layer)
  }
  _change (evt) {
    var timestamp = parseInt(jq('#histfast-slider').val(), 0)
    var d = new Date(timestamp)
    var prettyDate = d.getFullYear() + '-' + this.cleanNbr(d.getMonth() + 1) + '-' + this.cleanNbr(d.getDate())
    jq('#histfast-slider-label').html(prettyDate)
    this.wms_layer.mergeNewParams({
      CQL_FILTER: this.fromTimeStamp() + ' >= fromdate AND ' + this.fromTimeStamp() + ' < todate'
    })
  }
  showDialog () {
    this._dialog.showDialog()
  }
  closeDialog () {
    this._dialog.closeDialog()
  }
  clear () {
    cbKort.mapObj.map.removeLayer(this.wms_layer)
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
    var timestamp = parseInt(jq('#histfast-slider').val(), 0)
    d = new Date(timestamp)
    return d.getFullYear() + '' + this.cleanNbr(d.getMonth() + 1) + '' + this.cleanNbr(d.getDate())
  }
  cleanNbr (nbr) {
    return nbr > 9 ? nbr : '0' + nbr
  }
  closeHandler () {
  }
}
