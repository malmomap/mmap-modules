// banner text 2017
// banner text 2017
// banner text 2017
require('es6-promise').polyfill() // swal needs this to function in IE
// import { default as swal } from 'sweetalert2' /* importera in andra moduler */

export default class MMap_Nyheter { // eslint-disable-line
  constructor (params) {
    this.config = params.config
    this.makeAlert2()
    // this.layerWork()
  }

  makeAlert2 () {
    var karta = cbKort.profile // eslint-disable-line
    var globalWarning = this.config.globalWarning
    var globalNyheterStatus = this.config.globalNyheterStatus
    var globalWarningStatus = this.config.globalWarningStatus
    var globalWarningHeader = this.config.globalWarningHeader
    var headerTitle = this.config[karta + '_title']
    var warning = this.config[karta + '_warning']
    var profilInfo = this.config[karta + '_info']
    var profilWarningHeader = this.config[karta + '_warningHeader']
    var profilWarningStatus = this.config[karta + '_warningStatus']
    var profilInfoStatus = this.config[karta + '_infoStatus']
    var profilStatus = this.config[karta + '_status']
    var profilVersionText = this.config[karta + '_version']
    // var beginHour = this.config[karta + '_beginHour']
    var closeButton = this.config[karta + '_closeButton']
    // var update = this.config[karta + '_update']
    var nyheter = karta + '_nyheter'
    var newFontSize = this.config[karta + '_newsFontSize']
    var headerFontSize = this.config[karta + '_headerFontSize']
    var newsDate = this.config[karta + '_date']
          // Define the local storage
    var storageDate = window.localStorage.getItem('todaysDate')
    // var clickDate = window.localStorage.getItem('clickDate')
    // window.localStorage.setItem('todaysDate', todaysDate)

    var profilVersion = window.localStorage.getItem('profil version')

// Get the news items and place them in an array
    var variables = []
    // Loop through all the items that are in the config file
    for (var name in this.config) {
      var strNyheter = String(name.indexOf(nyheter))
      window.console.log(strNyheter)
      // Matching the relevant news items
      if (String(strNyheter) === '0') {
        var keyValue = this.config[name]// }
        variables.push(keyValue)
        keyValue = ''
        window.console.log(strNyheter + name)
      }
    }

    // Profile warning if true
    if (profilWarningStatus === 'True') {
      toastr.warning(warning, profilWarningHeader, { positionClass: 'toast-top-center', timeOut: 0, extendedTimeOut: 0 }) // eslint-disable-line
    }

    // Global warning if true

    if (profilInfoStatus === 'True') {
      toastr.info(profilInfo, { positionClass: 'toast-top-center', timeOut: 0, extendedTimeOut: 0 }) // eslint-disable-line
    }

    // Global warning if true
    if (globalWarningStatus === 'True') {
      toastr.errorSticky(globalWarning, globalWarningHeader, { positionClass: 'toast-top-center' }) // eslint-disable-line
      // toastr.success('Hello World', 'New Message', { timeOut: 5000 }) // eslint-disable-line
    }

// Creating the main dialog box
    jq('body').append('<div id="infoSida"></div>') //eslint-disable-line
    jq('#infoSida').append('<div id="startHeader">' + headerTitle + '</div>') //eslint-disable-line
    jq('#infoSida').resizable() //eslint-disable-line
    jq('#infoSida').draggable() //eslint-disable-line
    // jq('body').append('<div id="nyheterRuta"></div>') //eslint-disable-line
    // jq('#infoSida').addClass('ui-wi') //eslint-disable-line
    // jq('#nyheterRuta').append('<div id="startHeader">' + headerTitle + '</div>') //eslint-disable-line
    jq('#startHeader').addClass('ui-dialog-titlebar ui-widget-header ui-corner-all sHeader') //eslint-disable-line
    // Spacing between the news items
    jq('#infoSida').append('<br />') //eslint-disable-line
    // this is the success alert from bootstrap
    jq('#infoSida').append('<div class="nyheter nyheter1">' + variables[0] + '</div>') //eslint-disable-line
    jq('#infoSida').append('<div class="nyheter nyheter2">' + variables[1] + '</div>') //eslint-disable-line
    jq('#infoSida').append('<div class="nyheter nyheter3">' + variables[2] + '</div>') //eslint-disable-line
    jq('#infoSida').append('<div class="nyheter nyheter4">' + variables[3] + '</div>') //eslint-disable-line
    jq('#infoSida').append('<div class="nyheter nyheter5">' + variables[4] + '</div>') //eslint-disable-line
    jq('#infoSida').append('<div class="nyheter nyheter6">' + variables[5] + '</div>') //eslint-disable-line
    jq('#infoSida').append('<div class="nyheter nyheter7">' + variables[6] + '</div>') //eslint-disable-line
    jq('#infoSida').append('<div class="nyheter nyheter8">' + variables[7] + '</div>') //eslint-disable-line
    jq('#infoSida').append('<div class="nyheter nyheter9">' + variables[8] + '</div>') //eslint-disable-line
    jq('#infoSida').append('<div class="nyheter nyheter10">' + variables[9] + '</div>') //eslint-disable-line
  //  jq('#nyheterRuta').append('<div class="panel panel-danger" style="font-size:35px;">Warning </div>') //eslint-disable-line
    jq('.nyheter').wrapAll("<div class='nyheterContainer'></div>") //eslint-disable-line
    jq('.nyheter').append('<br />') //eslint-disable-line
    jq('#meddelande2').append('<br />') //eslint-disable-line
    // Creating the button container  section
    jq('#infoSida').addClass('buttonContainer') //eslint-disable-line
    jq('.buttonContainer').append('<hr />') //eslint-disable-line
    jq('.buttonContainer').append('<button type="button" class="btn btn-primary closeButton">' + closeButton + '</div>') //eslint-disable-line
    jq('.buttonContainer').append('<input type="checkbox" class = "newsremover" value="" id="checkbox" /> <label for="checkbox" class = "newsremover">Visa inte igen</label> </div>') //eslint-disable-line
    jq('#checkbox.newsremover').append('style="font-size:30px">') //eslint-disable-line
    // jq('.buttonContainer').wrapAll("<div class='nyheterFooter'></div>") //eslint-disable-line
    jq('.nyheter').append('<br />') //eslint-disable-line
    jq('.nyheterContainer').niceScroll() //eslint-disable-line
    // jq('#nyheterRuta').append('style="font-size:30px">') //eslint-disable-line
    jq('.nyheter').attr('style', 'font-size: ' + newFontSize + ' !important') //eslint-disable-line
    jq('.sHeader').attr('style', 'font-size: ' + headerFontSize + ' !important') //eslint-disable-line

// Close the news box
    jq(document).ready(function () { //eslint-disable-line
      jq('.closeButton').click(function () { //eslint-disable-line
        jq('#infoSida').hide() //eslint-disable-line
      })
    })

    var layerVariables = []
    var layerObjects = {}

    var searchLayer = 'layer'
    // Loop through all the items that are in the config file
    for (var layerName in this.config) {
      // window.console.log(Layername)
      var strLayer = String(layerName.indexOf(searchLayer))
      // Matching the relevant news items
      if (String(strLayer) === '0') {
        var iLayer = ''
        var keyValueLayer = this.config[layerName] + '_' + (layerName)// }
        layerVariables.push(keyValueLayer)
        window.console.log(layerName)
        keyValue = ''
        layerObjects[iLayer] = {layerName: keyValueLayer}
      }
    }

    jq('.state').click(function () { //eslint-disable-line
      var divName = jq(this).attr('id') //eslint-disable-line
      var classTest = jq(this).hasClass('state on') //eslint-disable-line
      // window.console.log(classTest)
      divName = divName.slice(0, -6)
      divName = divName.replace('-', '_')
      // window.console.log('0')
      window.console.log(divName)
      window.console.log(layerVariables)
      window.console.log(classTest)
      if (String(classTest) === 'true') {
        // window.console.log('true2')
        searchStringInArray(divName, layerVariables)
      }
    })

    function searchStringInArray (str, strArray) {
      for (var j = 0; j < strArray.length; j++) {
        // window.console.log(strArray.length)
        var strLayerCheck = String(strArray[j].indexOf(str))
        window.console.log(str + ' - ' + strArray[j] + ' - ' + strLayerCheck)
        // Matching the relevant news items
        if (strLayerCheck !== '-1') {
          var strRemove = parseInt(str.length) + 7
          var layerInfo = strArray[j].slice(0, -strRemove)
          toastr.info(layerInfo, profilWarningHeader, { positionClass: 'toast-top-center' }) // eslint-disable-line
        }
      }
      return -1
    }

    // var Layername = window.localStorage.getItem('Layername')
    // window.alert(Layername)

    // var extractedValue = jq('#hiddenInputName').val() //eslint-disable-line
    // window.alert(extractedValue)
    // for (var name in this.config) {
    //   // var strNyheter2 = String(name.includes(divName2))
    //   }

    jq('#nyheterRuta').hide() //eslint-disable-line
    window.console.log('removing click item')
    window.console.log(newsDate)
    window.console.log(storageDate)
    // If globalNyheterStatus is false

    // if (newsDate < clickDate) {
    // // remove the clickDate once the newsDate has passed
    //   window.console.log('removing click item')
    //   window.localStorage.removeItem('clickDate')
    // }

    var currentDate = new Date()
    // var hour = currentDate.getHours()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var todaysDate = year + '/' + month + '/' + day
    // var warningsDate = year + '/' + month + '/' + day + '/' + hour

    window.console.log(profilVersion)
    window.console.log(profilVersionText)
    if (String(profilVersionText) !== String(profilVersion)) {
      window.console.log(profilVersion)
      window.console.log(profilVersionText)
      window.console.log('profil version not matches')
      window.localStorage.removeItem('todaysDate')
    } else {
      window.console.log('profil version match')
    }

    window.localStorage.setItem('profil version', profilVersionText)
    // Click function for the do not show again lable
    jq('.newsremover').click(function () { //eslint-disable-line
      window.localStorage.setItem('todaysDate', todaysDate)
      window.console.log('placing in storage data')
    })

      // if the global or profil status = False then no show
    if (globalNyheterStatus === 'False' || profilStatus === 'False') {
      jq('#infoSida').hide() //eslint-disable-line
      window.console.log('globalNyheterStatus or profilStatus is False2')
    } else if (storageDate == null) {
      // If the storageDate is empty then show the box
      jq('#infoSida').show() //eslint-disable-line
      window.console.log('both click and storage data is null')
      // If profil versions dont match then show the box
    } else if (String(profilVersionText) !== String(profilVersion)) {
      jq('#infoSida').show() //eslint-disable-line
      window.console.log('profil version not matches')
    } else {
        // In this state both storagedate and clickdata are not null
      window.console.log('storage data is not null clickDate is not null')
      jq('#infoSida').hide() //eslint-disable-line
    }

    if (variables[0] === '') {
      jq('.nyheter1').remove() //eslint-disable-line
    }
    if (variables[1] === '') {
      jq('.nyheter2').hide() //eslint-disable-line
    }

    if (variables[2] === '') {
      jq('.nyheter3').hide() //eslint-disable-line
    }
    if (variables[3] === '') {
      jq('.nyheter4').hide() //eslint-disable-line
    }
    if (variables[4] === '') {
      jq('.nyheter5').hide() //eslint-disable-line
    }
    if (variables[5] === '') {
      jq('.nyheter6').hide() //eslint-disable-line
    }
    if (variables[6] === '') {
      jq('.nyheter7').hide() //eslint-disable-line
    }
    if (variables[7] === '') {
      jq('.nyheter8').hide() //eslint-disable-line
    }
    if (variables[8] === '') {
      jq('.nyheter9').hide() //eslint-disable-line
    }
    if (variables[9] === '') {
      jq('.nyheter10').hide() //eslint-disable-line
    }

// replace warning text in failure to log in
    jq("div:contains('SFS Fejl')").text('New word') //eslint-disable-line

    jq('.toast:contains("SFS Fejl")').click(function () { //eslint-disable-line
      // window.localStorage.setItem('todaysDate', todaysDate)
      window.console.log('placing in storage data4')
    })

    jq(document).ready(function () { //eslint-disable-line
      jq('#toast-container').click(function () { //eslint-disable-line
        window.console.log('placing in storage data5')
      // if ($(this).text() == "The text") {
      //     //Code here
      //   })
      })
    })

    jq(document).ready(function () { //eslint-disable-line
      jq('.toast-title').click(function () { //eslint-disable-line
        window.console.log('placing in storage data6')
      // if ($(this).text() == "The text") {
      //     //Code here
      //   })
      })
    })

    jq(document).ready(function () { //eslint-disable-line
      jq('#toast-container.toast-top-center').click(function () { //eslint-disable-line
        var y = String(jq('#toast-container.toast-top-center').text) //eslint-disable-line
        var z = String(jq('#toast-container.toast-top-center').html) //eslint-disable-line
        window.console.log('placing in storage data2')
        window.console.log(y)
        window.console.log(z)
        // if (jq(this).text() === 'SFS Fejl') {
        //   window.console.log('placing in storage data3')
        // }
      })
    })

}// eslint-disable-line

} // eslint-disable-line
