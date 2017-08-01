import test from "tape";
import LagesKarta from "../src/js/index.js";
// import { Dialog } from "../lib/dialog";
// import jQuery from "jquery";

let moduleInst = new LagesKarta();


// test("Checking if jquery is loaded", (t) => {
// 	const jQuery = moduleInst.getJQuery();
// 	t.equal( typeof jQuery, "function");
// 	t.equal( typeof jQuery.ajax, "function");
// 	t.end();
// });

// test("importing and using function from external module", (t) => {
// 	t.equal( moduleInst.useExternalFunc(), "Hej!", "The external func should return 'Hej!'");
// 	t.end();
// });

test("Get options", (t) => {
	moduleInst.getOptions().then( options => {
		t.equal(typeof options, "object", "fetched options is an object");
		t.end();
	}).catch( error => t.fail("Could not get options 1st time"));
});


// test("Test form submit returns correct values", (t) => {
// 	// let $form = moduleInst._dialog.dialogContent.find("form");
// 	// let moduleInst2 = new LagesKarta();
// 	moduleInst.getOptions().then( options => {
// 		try {
// 			t.comment(new Dialog({}, null, "body", false, null));
// 		}
// 		catch(e) {
// 			t.comment(e);
// 			t.fail("Could not create Dialog instance");
// 			return;
// 		}
// 		// moduleInst.initApp(options);
// 		// t.comment(moduleInst._dialog);
// 		// t.equal( moduleInst2._dialog instanceof Dialog, true, "property _dialog is an instance of Dialog" );
// 		t.end();
		
// 	}).catch( error => t.fail("Could not get options 2nd time"));

// 	// t.equal($form.length === 1, true);

// 	// const vals = ["Hej", "Och", "Hå", "Jo"];
// 	// $form.find("input:eq(1)").val(vals[0]);
// 	// $form.find("input:eq(2)").val(vals[1]);
// 	// $form.find("input:eq(3)").val(vals[2]);
// 	// $form.find("input:eq(4)").val(vals[3]);

// 	// t.comment($form);
// 	// $form.submit();

// 	// t.comment( JSON.stringify( moduleInst._formData ) );
	

// });