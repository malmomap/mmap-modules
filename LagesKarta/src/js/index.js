"use strict";

import Promise from "promise";
import MMapBaseClass from "MMapBaseClass";


// SpatialMap dependencies (must not be included in build) – add them to externals in webpack.config.js
// import { Dialog } from "../../lib/bundle";

let $ = jQuery;

class LagesKarta extends MMapBaseClass {

	constructor() {
		super();
		this.init();
	}

	_createForm(lang) {
		return '\
			<form action="" method="GET">'+
				'<div class="form-group">'+
					'<label for="lageskarta-inp-arende">'+lang.errand+'</label>'+
					'<input type="text" class="form-control" id="lageskarta-inp-arende" placeholder="Ärende">'+
				'</div>'+
				'<div class="form-group">'+
					'<label for="lageskarta-inp-arendenr">'+lang.errandnbr+'</label>'+
					'<input type="text" class="form-control" id="lageskarta-inp-arendenr" placeholder="Ärendenummer">'+
				'</div>'+
				'<div class="form-group">'+
					'<label for="lageskarta-inp-fastighet">'+lang.estate+'</label>'+
					'<input type="text" class="form-control" id="lageskarta-inp-fastighet" placeholder="Fastighet">'+
				'</div>'+
				'<div class="form-group">'+
					'<label for="lageskarta-inp-adress">'+lang.address+'</label>'+
					'<input type="text" class="form-control" id="lageskarta-inp-adress" placeholder="Adress">'+
				'</div>'+
				'<button type="submit" class="btn btn-primary">'+lang.btnsubmit+'</button>'+
			'</form>';

	}

	init() {
		// this.getOptions()
		// 	.then(options => this.initApp(options))
		// 	.catch(err => console.log(err));

		this.getOptions()
			.then(function(options) {
				this.initApp(options);
			}).catch(function(err) {
				console.log(err));
			});
	}

	initApp(options) {
		if (this._initiated) return;

		let lang = this.getLang(options);

		// this.toolmode = cbKort.registerToolMode(null, null, null, null, true, this.toggle.bind(this));

		let d = new Dialog({
			id: "lageskarta-dialog",
			resizable: options.resizable,
			title: lang.title
		});
		this._dialog = d;

		// // Add a container to the dialog for React to use
		d._$dialogContent.append( this._createForm(lang) );
		d._$dialogContent.find("form").on("submit", this.onSubmit.bind(this));

		/*
		* We created a dialog, added a container,
		* now we can show the (still empty) dialog
		*/
		// d.showDialog();

		this._initiated = true;
	}

	toggleDialog() {
		console.log(this._dialog);
		if (this._dialog && this._dialog._$dialogContent.is(":visible")) {
			this.hideDialog();
		}
		else {
			this.showDialog();
		}
	}

	showDialog() {
		this._dialog.showDialog();
	}

	hideDialog() {
		this._dialog.hideDialog();
	}

	onSubmit(e) {
		e.preventDefault(); // prevent submit
		
		let formData = {};
		$(e.target).parent().find("input.form-control").each(function() {
			let inpId = $(this).prop("id");
			let key = inpId.replace("lageskarta-inp-", ""),
				val = $.trim( $(this).val() );
			formData[key] = val;
		});
		this._formData = formData;
		console.log(formData);
		// return false; 

		// TODO: Do something with the form data
	}

}


export {LagesKarta};


