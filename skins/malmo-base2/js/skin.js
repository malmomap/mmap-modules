// ===============================================================
// SpatialMap version 2.x, copyright Grontmij GIS&IT, 2012
// ===============================================================
// $Archive: /Products/CBKort2/development/2.9/standard_upgrade_01/wwwroot/skins/standard/base/js/skin.js $ 
// $Date: 22-11-12 16:06 $
// $Revision: 12 $ 
// $Author: Ell $
// =============================================================== 

// Contains fix for IE8 bug that would cause the page to jump

Skin = {
		
    load: function () {
    	
	   	jQuery("#mapcontainer").css({
	   		 'min-width': (jQuery(window).width()-jQuery('#basegrid-left div:first').width()-jQuery('#basegrid-right div:first').width())+'px'
		});
      	        	    
    	var panel = Gui.getPanel ('panel-middle-left');
    	
    	var marginleft = parseInt(jQuery("#panel-middle").css('margin-left'),10);
		var marginright = parseInt(jQuery("#panel-middle").css('margin-right'),10);
		var borderleft = parseInt(jQuery("#panel-middle").css('border-left-width'),10);
		var borderright = parseInt(jQuery("#panel-middle").css('border-right-width'),10);
		var corwidth = marginleft+marginright+borderleft+borderright;
		
    	panel.setCorrection ({
    		width: -corwidth
    	});
    	jQuery("#panel-middle").width(jQuery("#mapcontainer").width()+panel.correction.width);
    	jQuery(window).resize(function() {
        	var panel = Gui.getPanel ('panel-middle-left');
    		jQuery("#panel-middle").width(jQuery("#mapcontainer").width()+panel.correction.width);
		});
    	
        jQuery(".SpatialMapControlSpatialMapPanZoomBar").css({
        	'top':'65px',
        	'left': '10px',
        	'right':'auto'
        });
        
        
        jQuery("#overviewbox").css({
        	'bottom': '25px',
        	'border': '10px solid'
        });
        
        if (jQuery.browser.msie) {  
        	 var htmlHeight = jQuery("html").height();
        	 var fixIEHeight = null;

        	if( jQuery('#panel-top').is(':visible') ) {
        		fixIEHeight = jQuery("#panel-top").height();
        	}
        	if (jQuery('#panel-brand').is(':visible')) {
        		fixIEHeight += jQuery("#panel-brand").height();	
        	}
        	 if (jQuery('#panel-bottom').is(':visible')) {
 	        	fixIEHeight += jQuery("#panel-bottom").height();    	        		 
 	        	
 	        	// Ie8 body border workaround
 	        	if (parseInt(jQuery.browser.version, 10) < 9 && document.documentMode <9){        	        	
 	        		fixIEHeight = fixIEHeight+4;
 	        	}        		
 	        }
            jQuery("table#basegrid").height(htmlHeight-fixIEHeight);
        }
        
    	jQuery(window).resize(function() {
    		 if (jQuery.browser.msie) {  
    			 var htmlHeight = jQuery("html").height();
    			 var fixIEHeight = null;

    			 if( jQuery('#panel-top').is(':visible') ) {
        		 fixIEHeight = jQuery("#panel-top").height();
    			 }
    			 if (jQuery('#panel-brand').is(':visible')) {
        		 fixIEHeight += jQuery("#panel-brand").height();	
    			 }
    			 if (jQuery('#panel-bottom').is(':visible')) {
    	        	fixIEHeight += jQuery("#panel-bottom").height();    	        		 
    	        	
    	        	// Ie8 body border workaround
    	        	if (parseInt(jQuery.browser.version, 10) < 9 && document.documentMode <9){      	        	
    	        		fixIEHeight = fixIEHeight+4;
    	        	}        		
    	         }

    			 jQuery("table#basegrid").height(htmlHeight-fixIEHeight);
    		 }
    		 
    		 jQuery("#mapcontainer").css({
    			 'min-width': (jQuery(window).width()-jQuery('#basegrid-left div:first').width()-jQuery('#basegrid-right div:first').width())+'px'
    		 });
    	}); 
    	
    },
    
    CLASS_NAME: 'Skin'
};
