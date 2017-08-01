===============================================================
SpatialMap
===============================================================
$Date: @@ENV_PKG_DATE $
$Author: @@ENV_PKG_AUTHOR $
$Package Version: @@ENV_PKG_VERSION $
$CSM Version: @@ENV_PKG_CSMVERSION $

===============================================================


--------------------
@@ENV_PKG_NAME


--------------------
@@ENV_PKG_DESCRIPTION

--------------------
INSTALLATION
--------------------



1. Include module in `[site]\appbase\spatialmap\WEB-INF\config\[profile]_modules.xml`

  ``` xml
  	<module name="@@ENV_PKG_NAME" dir="custom/@@ENV_PKG_NAME" permissionlevel="public" />
  ```

2. define tool in the desired profile:
``` xml
    <tool module="@@ENV_PKG_NAME" name="@@ENV_PKG_NAME" ignore="not ModuleDefined('@@ENV_PKG_NAME')" />
```



--------------------
CONFIGURATION
--------------------

The default fetched config will be the template config in `[module]/config/config_template.js`. To override the default configuration, copy and rename the default config from `[module]/config/config_template.js` to `[cbinfo.config.dir]/mmap-config/modules/mmap-Nyheter/config.js`. The new config.js will deploy on top of the default configuration.

The config file includes sources that shows the maps parameters and lang parameters. You do not have to change the lang parameters.
If you want to delete one of the map select the all parameters from that map, for instance if you want to delete Eniro then just delete (or set to ignore) from the config file.

mMap['mmap-Nyheter-config'] = {
  // ------------------------------[site]-----------------
  globalWarning: 'This is a global warning', // The global message that is to be displayed
  globalWarningHeader: 'Important!', // The header shown on the warning message
  globalWarningStatus: 'True', // choose either True or False If true then this will be shown on all profiles that have MmapNyheter installed.
  globalNyheterStatus: 'True', // choose either True or False If false then this will disable all Mmap nyheter on site.
  // ------------------------------this is for test_ray-----------------
  [profile]_status: 'True', // choose either True or False. If false then Nyheter will not be shown
  [profile]_warning: 'Server is down!', // Message to be displayed in the warning message
  [profile]_warningHeader: 'News!', //The header of the warning Message
  [profile]_warningStatus: 'True', // choose either True or False // If true then the message will be shown
  [profile]_info: 'This is a test profile. Get outta here', // An information pop up that will be shown once the profile is loaded
  [profile]_infoStatus: 'True', // if true then the information pop up will be shown
  [profile]_title: 'Nyheter!',
  [profile]_nyheter1: 'Farthinder på gång',
  [profile]_nyheter2: 'Övergångställe ska vara klar i slutet av februari',
  [profile]_nyheter3: 'GCM passage arbetet har inte börjat',
  [profile]_nyheter4: '3.12 version ska komma ut i april 2018',
  [profile]_nyheter5: '',
  [profile]_nyheter6: '',
  [profile]_nyheter7: '',
  [profile]_nyheter8: '',
  [profile]_nyheter9: '',
  [profile]_nyheter10: '',
  [profile]_closeButton: 'close',
  [profile]_newsFontSize: '16px',
  [profile]_headerFontSize: '18px',
  [profile]_version: '1.1',
    // ------------------------------[profile2]-----------------
  [profile2]_status: 'True', // choose either True or False
  [profile2]_warning: 'Server is down!',
  [profile2]_warningHeader: 'News!',
  [profile2]_warningStatus: 'True', // choose either True or False
  [profile2]_title: 'Nyheter!',
  [profile2]_nyheter1: 'Nya funktioner ute i april',
  [profile2]_nyheter2: 'Vi ska bearbete hur vi jobbar med cykelvägar',
  [profile2]_nyheter3: 'GCM passage kommer i maj',
  [profile2]_nyheter4: '',
  [profile2]_nyheter5: '',
  [profile2]_nyheter6: '',
  [profile2]_nyheter7: '',
  [profile2]_nyheter8: '',
  [profile2]_nyheter9: '',
  [profile2]_nyheter10: '',
  [profile2]_closeButton: 'stäng',
  [profile]_newsFontSize: '12px',
  [profile]_headerFontSize: '14px',
  [profile]_date: '26/04/2017',
}
```


## Configuration
The default fetched config will be the template config in `[module]/config/config_template.js`. To override the default configuration, copy and rename the default config from `[module]/config/config_template.js` to `[cbinfo.config.dir]/mmap-config/modules/mmap-mockup/config.js`. The new config.js will deploy on top of the default configuration.


##### Configuration parameters
| Parameter | Default value | Description |
|:-------------|:-------------|:-----|
|globalWarning:  |  'This is a global warning'  | The message that will appear on all profiles (with module installed) on site|
|globalWarningHeader:  |  'True'  | An opportunity to not show the newsbox if set to false|
|globalWarningStatus:  |  'Important!'  | Title to be placed on the global message|
|globalNyheterStatus:  |  'True'  | Removes the news dialogbox from all profiles on site where installed if set to false|
|[profile]_status:  |  'True'  | An opportunity to not show the newsbox if set to false|
|[profile]_warning:  |'Server is down!'| This is the message that will appear on the site level warning      |
|[profile]_warningHeader:   |'Update'| This will be the title of the warning feature                   |
|[profile]_warningStatus:   |  'True!| Set to true if the warning message is to be visible otherwise false|
|[profile]_info:   |  'Map is currently undergoing changes'| Info message to be displayed|
|[profile]_infoStatus:   |  'False'| Information message will not be displayed|
|[profile]_title:   |  'News!'                           | This will feature on the header                    |
|[profile]_nyheter1 |  'New version launched next month'        | The first line of text that will appear         |
|[profile]_nyheter9 |  'GIS workshops will be held on the 15th' | The ninth line of text that will appear |
|[profile]_nyheter10 |   | Any line which is left empty will be automatically removed. At the moment there is a maximum of 10 lines. |
|[profile]_closeButton |  'Close' | The text that will appear on the button that closes the information box |
|[profile]_newsFontSize |  '26px' | The size of the text |
|[profile]_headerFontSize |  '30px' | The size of the header text |
|[profile2]_version |  '1.1' | 'If this is changed' |
|[profile2]_title: |  'Latest information' | This will feature on the header for a second profile |
|[profile2]_nyheter1 |  'New tool to provide information under development'        | The first line of text that will appear on a second profile |
|[profile2]_nyheter9 |  'Population data is been updated for 2017' | The ninth line of text that will appear on a second profile |
|[profile2]_closeButton |  'Shutdown' | The text that will appear on the button that closes the information box on a second profile |
