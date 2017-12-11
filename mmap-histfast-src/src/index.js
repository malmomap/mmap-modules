const mMap = global.mMap || {}

console.log('Histfast module version: __VERSION__')

import MMap_histfast from './MMap_Histfast'  // eslint-disable-line

mMap.MMap_histfast = MMap_histfast // eslint-disable-line

global.mMap = mMap
