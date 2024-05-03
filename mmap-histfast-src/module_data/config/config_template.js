/* note that mmap assumes ansi encoding for this file */
mMap['@@ENV_PKG_NAME-config'] = {
    wms: {
      url: 'http://geofgk.intra.malmo.se/geoserver/wms',
      layer: 'fgkdb:fastigheter_p_h',
      srs: 'EPSG:3008'
    },
    min_value: '1990-01-01',
    start_value: '1', /* Start value is subtracted in nbr years from today */
    title: 'Historiska fastighetsgränser',
    tooltip: 'Visa reglage'
}
