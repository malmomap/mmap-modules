
// import Promise from "promise";  // Useful for handling async stuff
import MMapBaseClass from "MMapBaseClass";
import * as utils from "./utils"; // We should put utils in a common folder so we don't end up with one version per module.
// import $ from "jQuery";

let $ = jQuery; // It seems that Suckigo use 2 different jQuerys. "$" is NOT pointing at "jQuery". We need the one named jQuery but I am too lazy to type 6 letters.

class HelloWorld extends MMapBaseClass {

	dialogId = "helloworld-dialog";

	constructor() {
		super(); // Calls the constructor method of the parent (super) class
		
		// Get options is an asynchrouneous method, which means it will 
		// not return the options directly. Instead it returns a Promise. The Promise has 2 methods:
		// 	- then: Takes a function as a parameter to handle the successful response (i.e. handle the options)
		// 	- catch: Takes a function as a parameter to handle the erroneous response (i.e. handle the error object)
		this.getOptions()
			.then( options => this.init(options) )
			.catch( error => console.log(error) ); // -> We could end up here if the option file(s) is not found or contains syntax errors.
	}

	init(options) {
		let lang = this.getLang(options);
		// this.lang = lang;

		// -- Do what you have to do --
		this._drawDialog(lang, options.useBootstrapDialog);

	}

	/**
	 * Just an example of using Bootstrap's alert div
	 * @param  {String} msg  {string}
	 * @param  {String} type {string}
	 * @return {undefined}
	 */
	notify(msg="", type="success") {
		// type = success/danger/info ...
		$("#helloworld-dialogdiv").append(`<div class="alert alert-${type}" role="alert">${msg}</div>`);
		setTimeout(() => $(".alert").remove(), 10000);
	}

	onBtnClick(lang={}) {
		this.notify(lang.alertMessage, "danger");
	}

	_drawDialog(lang={}, useBootstrapDialog=false) {

		let $body = $('<div id="helloworld-dialogdiv" />');
		$body.append(`<div><button class="btn btn-success">${lang.btnClickMe}</button></div>`);
		$body.find("button").on("click", this.onBtnClick.bind(this, lang) );
		$body.append(lang.content);
		let $d = null;
		if (useBootstrapDialog) {
			let $footer = `<button type="button" class="btn btn-default" data-dismiss="modal">${lang.btnCancel}</button>
				<button type="button" class="btn btn-primary">${lang.btnSave}</button>`;
			$d = utils.drawBootstrapDialog(lang.title, $body, $footer);
			$d.find(".modal-dialog").prop("id", this.dialogId);
		}
		else {
			let $footer = `<div class="helloworld-csm-dialog-footer"><button type="button" class="btn btn-default" data-dismiss="modal">${lang.btnCancel}</button>
				<button type="button" class="btn btn-primary">${lang.btnSave}</button></div>`;
			$body.append($footer);
			$d = utils.drawCSMDialog(lang.title, $body, {
				dialogId: this.dialogId
			});
		}
		this.$dialog = $d;
	}

	toggleDialog() {
		const isBootstrapModal = this.$dialog.modal && this.$dialog.modal.length;
		if (isBootstrapModal) {
			this.$dialog.modal("toggle");
		}
		else {
			let $d = this.$dialog;
			$d.isVisible() ? $d.hideDialog() : $d.showDialog(); // There is no toggle in CSM's Dialog
		}
		
	}





}

export { HelloWorld };
