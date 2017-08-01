import test from "tape";
import {HelloWorld} from "../src/js/HelloWorld.js";

let moduleInst = new HelloWorld();
moduleInst.dirDefaultOptions = "./src/options/";
moduleInst.dirCustomOptions = "./src/options/";

test("Check if initialization was ok", (t) => {

	t.equal(typeof moduleInst.onLoad, "function", "instance has method onLoad");

	moduleInst.getOptions().then(options => {
		t.equal(typeof options, "object", "options fetched");
		t.end();
	}).catch(error => {
		t.comment(error);
		t.fail("Could not get options");
		t.end();	
	});
});


test("Try some methods", (t) => {
	t.equal(typeof moduleInst, "object", "Instance exists");
	moduleInst.onLoad( function(inst) {
		t.equal(typeof inst._options, "object", "Dialog has options");
		t.equal(typeof inst.$dialog, "object", "Dialog has been created");
		inst.toggleDialog();
		t.equal(inst.$dialog.prop("id"), "helloworld-dialog", "Dialog has the expected id");
		t.end();
	});
});