/* note that mmap assumes ansi encoding for this file */
mMap['@@ENV_PKG_NAME-config'] = {
    wms: {
      url: 'http://geofgk.intra.malmo.se/geoserver/wms',
      layer: 'fgkdb:fastigheter_p_h',
      srs: 'EPSG:3008'
    },
    min_value: '1998-06-01',
    start_value: '5', /* Start value is subtracted in nbr years from today */
    title: 'Historiska fastighetsgr�nser',
    tooltip: 'Visa reglage'
}
