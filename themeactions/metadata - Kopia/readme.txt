===============================================================
SpatialMap, copyright Grontmij GIS&IT
===============================================================
$URL: http://vinkel.ghop.lan/svn/SPS/spatialmap/trunk/spatialmap/WEB-INF/config/modules/standard/themeactions/transparencychanger/readme.txt $ 
$Date: 2014-08-12 17:39:04 +0200 (Tue, 12 Aug 2014) $
$Revision: 1374 $ 
$Author: ell $
=============================================================== 

Deprecates: none
Deprecated by: none

--------------------
metadata
--------------------

A themeaction for displaying information about a geometry.


--------------------
INSTALLATION
--------------------

1: Installation

1.a:  Add the following line to the modules file:

    <module name="metadata" dir="custom/themeactions/metadata" permissionlevel="public" />

1.b: Add the tool to a profile:

    <tool module="metadata" name="metadata" />


--------------------
DEPENDENCIES
--------------------

Requires the themeselectoractive module.

--------------------
CHANGES
--------------------

Date        Version  Ini  Description
2014-06-27  3.7.0    NSH  Created.
2014-09-03  3.8.0    ELL  Made the icon skinable.
2014-12-18  3.8.2    ELL  Moved images from "images/metadata" to "images/modules/metadata".
