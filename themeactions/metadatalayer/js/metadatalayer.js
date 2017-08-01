

// jq.fn.center = function () {
//     this.css("position","absolute");
//     this.css("top", Math.max(0, ((jq(window).height() - jq(this).outerHeight()) / 2) +
//                                                 $(window).scrollTop()) + "px");
//     this.css("left", Math.max(0, ((jq(window).width() - jq(this).outerWidth()) / 2) +
//                                                 jq(window).scrollLeft()) + "px");
//     return this;
// }



// function testa_anpassade() {
//
// x = jq("#infoSida").text();
//
// var horizontalCenter = Math.floor(window.innerWidth/2);
// var verticalCenter = Math.floor(window.innerHeight/2);
// // jq('body').prepend('<div id="jquery"></div>');
// // document.getElementById('jquery').style.setProperty("top", "100px");

// jq(document).ready(function(){
//   // jq("#infoSida").css("left", "200" );
//   alert(x);
//     });
// }


function startPage() {


jq( document ).ready(function() {


var Ansvar = "";
var Ansvar = jq( "#meddelande1" ).html();
var Syftet = jq( "#meddelande2" ).html();
var Nyheter = jq( "#nyheter" ).html();


 jq(init);
   function init() {
   jq('#kartanInfo').show();
    $('.nyheter').append('<hr />');
};


jq(document).ready(function(){
    jq('#kartanInfo').show();
    jq('#nyheter').append('<br />');
    jq('#nyheter').append('<br />');
  });


 jq(document).ready(function(){
   jq('#kartanInfo').click(function(){
     jq('#kartanInfo').hide();
   });
 });


jq("#Ansvariga2").text(Ansvar);
jq("#syftet2").text(Syftet);
jq("#nyheter2").text(Nyheter);


jq('.nyheter').append('<br />');
jq('.nyheter').append('<br />');
jq('#meddelande2').append('<hr />');
jq('#meddelande2').append('<br />');


jq("#nyheter2").css('color', 'gray');
jq(".nyheter").css('color', 'black');
// jq(".error").css('color', 'blue');
jq("#meddelande1").css('color', 'gray');
jq("#meddelande2").css('fontSize', '150%');
});

}
