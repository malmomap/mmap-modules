===============================================================
SpatialMap, copyright Grontmij GIS&IT
===============================================================
$URL: http://vinkel.ghop.lan/svn/SPS/spatialmap/trunk/spatialmap/WEB-INF/config/modules/standard/themeactions/transparencychanger/readme.txt $
$Date: 2016-08-15
$Revision: 1374 $
$Author: MV/ RT $
===============================================================

Deprecates: none
Deprecated by: none

--------------------
metadata
--------------------

A themeaction for displaying information about a layer.


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
2016-06-15  3.9.3    NSH  Created.
2016-08-12  3.9.3    ELL  New version.
2014-12-18  3.8.2    ELL  Moved images from "images/metadata" to "images/modules/metadata".
