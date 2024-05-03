const mMap = global.mMap || {}

console.log('Histfast Sweco module version: __VERSION__')

import MMap_histfast from './MMap_Histfast'  // eslint-disable-line

// prefix gloabl class as MMap_histfast_sweco since sokigo are using MMap_histfast
mMap.MMap_histfast_sweco = MMap_histfast // eslint-disable-line

global.mMap = mMap
