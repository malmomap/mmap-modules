const mMap = global.mMap || {}

console.log('Mockup module version: __VERSION__')

import MMap_Mockup from './MMap_Mockup' // eslint-disable-line

mMap.MMap_Mockup = MMap_Mockup // eslint-disable-line

global.mMap = mMap
