mMap['@@ENV_PKG_NAME-config'] = {
    wms: {
      url: 'http://fkmap.malmo.se/wms',
      layer: 'sbk:fastigheter_p_h',
      srs: 'EPSG:3008'
    },
    min_value: '2000-03-13',
    start_value: '1', /* Start value is subtracted in nbr years from today */
    title: 'Historiska fastighetsgränser',
    tooltip: 'Visa reglage'
}
