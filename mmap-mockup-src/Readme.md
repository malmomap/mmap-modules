

---------------------------------------

### SpatialMap, copyright Sweco Position AB


#### Replaces:

#### Description:
This is a template js-project of type 2. It will use an external library (swal2) to trigger an alert on the page.

#### Parameters:

#### Dependencies:

#### Changelog:


| Date | Version | Ini | Description |
|:------------- |:-------------|:-------------|:-----|
|2016-04-10 | 0.2.0 | NARI | add to mmap repo |
|2016-12-06 | 0.1.0 | NARI | init mockup project |

# Mockup module

## Install

1. Include module in `[site]\appbase\spatialmap\WEB-INF\config\[profile]_modules.xml`

  ``` xml
  	<module name="mmap-mockup" dir="custom/mmap-mockup" permissionlevel="public" />
  ```

2. define tool:
``` xml
  <!-- mockup -->
  <tool module="mmap-mockup" name="mmap-mockup" ignore="not ModuleDefined('mmap-mockup')" />
```

## Configuration
The default fetched config will be the template config in `[module]/config/config_template.js`. To override the default configuration, copy and rename the default config from `[module]/config/config_template.js` to `[cbinfo.config.dir]/mmap-config/modules/mmap-mockup/config.js`. The new config.js will deploy on top of the default configuration.


##### Configuration parameters
| Parameter | Default value | Description |
|:-------------|:-------------|:-----|
|message |  "This is a mockup module" | The message that the alert will print |


## Development enviroment

Requires [nodejs](https://nodejs.org/en/) installed.
Grunt-cli as a global package (only required to do once):

`npm install grunt-cli -g`

Install dependencies: `npm install`

Rename `dev_env.cfg.template` to `dev_env.cfg` and set your module copy directory.

Start windows development enviroment with

`grunt devserver --spsurl="mySpsUrl"`.

Start unix development enviroment with:

`grunt devserverunix --spsurl="mySpsUrl"`.

**Note:** The spsurl parameter is optional and is set to http://localhost:8080 by default.

To run with a specific profile, add the following flag:

`--profile="myprofile"`.

Now open a web browser and go to `http://localhost:8000`.

## Build

Build distribution version with `grunt dist`. This will result in a type 1 module with all content in the *dist* catalogue.
