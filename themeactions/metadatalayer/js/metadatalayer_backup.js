if (!Cartesia) {
    var Cartesia = {};
}

Cartesia.Email = SpatialMap.Class({
    dialog: null,

    initialize: function(options) {
        SpatialMap.Util.extend(this, options);
        this.toolmode = cbKort.registerToolMode(null, null, null, null, true, SpatialMap.Function.bind(this.selectPoint, this, null));
    },


    //Dialog GUI function
    createDialog: function() {
        if (this.dialog == null) {
            this.dialog = new Dialog(
                '<table>' +
                '<tr>' +
                '<td style="vertical-align: middle"><img src="[module.email.images]/search.png" /></td>' +
                '<td style="vertical-align: middle">&nbsp;' + cbInfo.getString("Kontakta GIS") + '</td>' +
                '</tr>' +
                '</table>', SpatialMap.Function.bind(this.closeHandler, this));


            //    });


            var html =
                '  <div class="content">' +
                '<div class="jqmain">' +
                '<h1>Kontakta GIS!</h1>' +
                '<form id = "sendEmail">' +
                '<div id = "friText">' +
                '<label for="arende" class="label">Ditt namn?</label>' +
                ' <input type="namn" id="namn" name="namn">' +
                ' </div>' +
                '<div>' +
                '<label for="departure" class="label">När vill du har svar?</label>' +
                '<input type="text" id="departure" name="departure">' +
                '</div>' +
                ' <div>' +
                '<label for="arendeTyp" class="label">Ärende Typ</label>' +
                '<select name="arendeTyp" id="arendeTyp">' +
                '<option> ---------</option>' +
                '<option>Beställningen</option>' +
                '<option>Data-fråga</option>' +
                '  <option>Autocad</option>' +
                ' <option>Annat</option>' +
                ' </select>' +
                ' </div> ' +
                '  <div id="prioNivå"> ' +
                '<p class="label">Prioritering-nivå</p> ' +
                ' <input type="radio" id="none" name="prio" checked="checked">' +
                ' <label for="none">3</label>' +

                '<input type="radio" id="one" name="prio">' +
                ' <label for="one">2</label> ' +

                '<input type="radio" id="two" name="prio">' +
                '<label for="two">1</label>' +
                ' </div>' +
                ' <div id="formatTypes"> ' +
                '<p class="label">Format</p>' +
                '<input type="checkbox" id="aisle" name="aisle"> ' +
                '<label for="aisle">PDF</label>' +

                ' <input type="checkbox" id="window" name="window">' +
                ' <label for="window">TAB</label>' +

                '<input type="checkbox" id="exit" name="exit"> ' +
                ' <label for="exit">DWG</label>' +

                '<input type="checkbox" id="any" name="any">' +
                ' <label for="any">JPEG</label>' +
                ' </div>' +
                '<div>' +
                '<label for="friText" class="label">Beskrivningen</label>' +
                ' <input type="friText" id="friText" name="friText">' +
                ' </div>' +
                ' <div>' +
                ' <button id="next">Skicka till GIS </button> ' +
                '    </div>' +
                ' </form> ' +
                '</div>' +
                '</div>';
            this.dialog.addContentHTML(html);
            this.dialog.setDialogWidth("700px");
        }
    },

    showDialog: function() {
        this.createDialog();
        this.dialog.showDialog();
        jq('#prioNivå').buttonset();
        jq('#formatTypes').buttonset();
        jq('#formatTypes').hide();
        jq('#arendeTyp').css({
            backgroundColor: 'white',
            width: '200'
        });




  //       var script = document.createElement( 'script' );
		// script.type = 'text/javascript';
		// script.src = "http://jqueryvalidation.org/files/dist/jquery.validate.min.js";
		// $("#mapcontainer").append( script );





        jq("#arendeTyp").change(function() {
            var arende = jq("#arendeTyp").val();
            if (arende == "Beställningen") {
                jq('#formatTypes').show();
            } else {
                jq('#formatTypes').hide();
                //end of IF test
            }

            //change function test
        });




//             jq("#sendEmail").validate({
//   rules: {
//     namn: {
//       required: true,
//       email: true
//     }
//   }
// });



        // end of show dialog
    },

    closeHandler: function() {
        cbKort.setToolMode();
    },


    CLASS_NAME: "Cartesia.GoogleMaps"
});
