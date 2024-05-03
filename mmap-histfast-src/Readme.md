

---------------------------------------

### SpatialMap, copyright Sweco Position AB


#### Replaces:

#### Description:
Modulen visualiserar historiska fastigheter i Malmö. Med hjälp av ett reglage kan man justera från vilken tidpunkt fastighetslinjer ska visas.

#### Parameters:

#### Dependencies:

#### Changelog:


| Date | Version | Ini | Description |
|:------------- |:-------------|:-------------|:-----|
|2017-12-04 | 0.3.0 | NARI | Adjust to work with CSM 4.4. Adjust namespace to mmap-histfast-sweco since sokigo plugin now uses mmap-histfast-sweco  |
|2017-12-04 | 0.2.2 | NARI | Added endpoint in docs |
|2017-12-04 | 0.2.1 | NARI | Fix pink tiles bug and extend documentation. |
|2016-11-23 | 0.2.0 | NARI | A complete type 2 module |
|2016-10-05 | 0.1.0 | ACHR | First version |

# Modul Historiska fastigheter

## Install

1. Define datasource in `[site]\appbase\spatialmap\WEB-INF\config\datasources\custom\[profile]`

  ``` xml
  <!-- mmap-histfast-sweco -->
   <endpoint endpointtype="shapefile" name="randomHistfastEndpoint123">
        <dir>[cbinfo.data.dir]/shp</dir>
    </endpoint>
    <datasource endpoint="randomHistfastEndpoint123" name="ds_mmap-histfast-sweco">
        <shapefile>histfast</shapefile>
    </datasource>
  ```
2. Include module in `[site]\appbase\spatialmap\WEB-INF\config\[profile]_modules.xml`

  ``` xml
  	<module name="mmap-histfast-sweco" dir="custom/mmap-histfast-sweco" permissionlevel="public" />
  ```

3. If needed: define a theme group in `[site]\appbase\spatialmap\WEB-INF\config\profiles\includes\custom\[profile]_themegroups.xml`

  ``` xml
  <!-- mmap-histfast-sweco -->
	<themegroup displayname="mMap" name="mmap" type="checkbutton" expanded="false" selectable="true" />

  ```

4. Define theme in `[site]\appbase\spatialmap\WEB-INF\config\profiles\includes\custom\[profile]_themes.xml`

  ``` xml
  <include src="[module:mmap-histfast-sweco.dir]/profiles/includes/themes.xml" mustexist="false" onlychildnodes="true" ignore="not ModuleDefined('mmap-histfast-sweco')" />

  ```

5. Define tool in `[site]\appbase\spatialmap\WEB-INF\config\profiles\includes\custom\[profile]_tools.xml`

  ``` xml
  <!-- mmap-histfast-sweco -->
  <tool module="mmap-histfast-sweco" name="themeaction-mmap-histfast-sweco" ignore="not ModuleDefined('mmap-histfast-sweco')" />
  ```

## Configuration
The default fetched config will be the template config in `[module]/config/config_template.js`. To override the default configuration, copy and rename the default config from `[module]/config/config_template.js` to `[cbinfo.config.dir]/mmap-config/modules/mmap-histfast-sweco/config.js`. The new config.js will deploy on top of the default configuration.

##### Configuration parameters
| Parameter | Default value | Description |
|:-------------|:-------------|:-----|
|wms.url |  "http://fkmap.malmo.se/wms" | wms url |
|wms.layer | "sbk:fastigheter_p_h" | wms layer to use |
|wms.srs |  "EPSG:3008" | SRS code |
|min_value |  "2004-03-13" | Lowest selectable date in the tool |
|start_value |  "1" | how many years back the slider should start at |
|title |  "Historiska fastighetsgränser" | Dialog title |
|tooltip | "Visa reglage" | Button tooltip |

## Development enviroment

Requires [nodejs](https://nodejs.org/en/) installed.
Grunt-cli as a global package (only required to do once):

`npm install grunt-cli -g`

```
git clone [git repository]
npm install
```
Rename `dev_env.cfg.template` to `dev_env.cfg` and set your module copy directory.

Start windows development enviroment with (the spsurl parameter is optional and is set to localhost:8080 by default):

`grunt devserver --spsurl="localhost:8080"`.

Start unix development enviroment with:
`grunt devserverunix --spsurl="localhost:8080"`.

Now open a web browser and go to `http://localhost:8000`.

## Build

Build distribution version with `grunt dist`
