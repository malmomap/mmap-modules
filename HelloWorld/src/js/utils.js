// import $ from "jQuery";
import Dialog from "Dialog";

let $ = jQuery;

export function drawCSMDialog(title, $body, options={}) {
	let $d = new Dialog({
		id: options.dialogId || undefined,
		resizable: options.resizable || false,
		title: title
	});
	$d._$dialogContent.append( $body );
	return $d;

}


export function drawBootstrapDialog(title, bodyContent, footerContent, options={}) {
	var $d = $(
		'<div class="modal fade"><div class="modal-dialog">\
			<div class="modal-content">\
				<div class="modal-header">\
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
					(title.search(/</g) === -1 ? '<h4 class="modal-title">'+title+'</h4>' : title) + 
				'</div>\
			<div class="modal-body"></div>\
		</div>'
	);
	$d.find(".modal-body").append(bodyContent);
	if (footerContent) {
		var footer = $('<div class="modal-footer"></div>');
		$d.find(".modal-body").after(footer);
		footer.append(footerContent);
	}
	
	if (options.size) {
		// $d.addClass("modal-"+options.size);
		$d.find(".modal-dialog").addClass("modal-"+options.size);
	}
	
	return $d;
}