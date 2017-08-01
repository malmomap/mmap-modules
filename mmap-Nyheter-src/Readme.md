---------------------------------------

### Nyheter module, copyright Sweco Position AB / Malmö Stad


#### Description:
This is a dialog-box containing information which will appear when a Spatialsuite or CSM map is loaded. This information can be adjusted by administrators in a config file and there is also a "do not show again" feature.
Different maps can have define different texts.

Terms:
[profile] refers to the profile name of the map. If a map is called MmapGatukontoret and is based on a mmapgatukontoret.xml file then [profile] = mmapgatukontoret

![image of Nyheter module] (https://github.com/malmomap/mmap-modules/blob/master/Images/newsdialog.png)

![image of Nyheter module] (http://github.com/malmomap/mmap-modules/blob/master/Images/newsdialog.png)


#### Changelog:

| Date | Version | Ini | Description |
|:------------- |:-------------|:-------------|:-----|
|2016-12-06 | 0.1.0 | NARI | init-Nyheter project |
|2017-04-05 | 0.2.0 | RAYT | Use create a pop-up with latest information at start. Tool ready to be accepted for acceptence test|
|2017-04-19 | 0.3.0 | RAYT | Ability to change font size for text and header now added|
|2017-04-26 | 0.4.0 | RAYT | Ability to override "do not show again" based on dates now added|
|2017-05-05 | 0.5.0 | RAYT | Messageboxes at profile and site level now available. Also one can have just messages and remove news box at both global and local level. There is also other small improvements|
|2017-05-09 | 0.6.0 | RAYT | New way of forcing the newsbox after "do not show again" is clicked by user. Repositing of information boxes with other small changes|



## Install

1. Include module in module init file `[site]\appbase\spatialmap\WEB-INF\config\modules.ini.xml`

  ``` xml
  	<module name="mmap-Nyheter" dir="custom/mmap-Nyheter" permissionlevel="public" />
  ```

2. Define tool in profile:
`[site]\appbase\spatialmap\WEB-INF\config\profiles\[profile].xml`

``` xml
  <tool module="mmap-Nyheter" name="mmap-Nyheter" ignore="not ModuleDefined('mmap-Nyheter')" />
```


3. To administrate the tool and alter the configurations
`[site]\appbase\spatialmap\WEB-INF\config\mmap-config\modules\mmap-Nyheter\config.js`



```
It is recommended to use Notepad editor++ (utf-8) when defining this file as there can be problems with ÄÖÅ characters.


mMap['mmap-Nyheter-config'] = {
  // ------------------------------[site]-----------------
  globalWarning: 'This is a global warning', // The global message that is to be displayed
  globalWarningHeader: 'Important!', // The header shown on the warning message
  globalWarningStatus: 'True', // choose either True or False If true then this will be shown on all profiles that have MmapNyheter installed.
  globalNyheterStatus: 'True', // choose either True or False If false then this will disable all Mmap nyheter on site.
  // ------------------------------this is for test_ray-----------------
  profile_malmogk_ray_status: 'True', // choose either True or False. If false then MmapNyheter will not be shown
  profile_malmogk_ray_warning: 'Server is down!', // Message to be displayed in the warning message
  profile_malmogk_ray_warningHeader: 'News!', //The header of the warning Message
  profile_malmogk_ray_warningStatus: 'True', // choose either True or False // If true then the message will be shown
  profile_malmogk_ray_info: 'This is a test profile. Get outta here', // An information pop up that will be shown once the profile is loaded
  profile_malmogk_ray_infoStatus: 'True', // if true then the information pop up will be shown
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


## Proposed developments
After 90 days the information box will once again reappear after "do not show again" is clicked.
Appearance needs to be improved further.
This will probably need to be completely responsive in the near future, a redo with bootstrap is probably needed which is compatiable with mobile devices.



## Contact
Raymond Timlin raymond.timlin@malmo.se (Gatukontoret, Malmö Stad)



#### Dependencies:
Bootstrap - this is built in as an external library, jquery and toastr which are both already available within the Spatialsuite product.



## Development enviroment
Requires [nodejs](https://nodejs.org/en/) installed.
Grunt-cli as a global package (only required to do once):
