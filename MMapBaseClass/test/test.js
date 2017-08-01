import test from "tape";
import MMapBaseClass from "../src/MMapBaseClass";


const mocksDir = "./test/mocks/";
const profileName = "mockProfile";

class SubClass extends MMapBaseClass {
	constructor() {
		super();
	}
};

function getInstance() {
	let inst = new SubClass();
	inst.dirDefaultOptions = mocksDir;
	inst.dirCustomOptions = mocksDir;
	inst._getProfileName = function() {
		return profileName;
	};
	return inst;
}


// This test checks that:
// 	- The MMapBaseClass can be extended and...
// 	- ...that the resulting sub-class can be instantiated
test('Create a subclass of MMapBaseClass', (t) => {
	let inst = new SubClass();
	t.equal(inst instanceof SubClass, true, "the new instance is an instance of TestModule");
	t.equal(inst instanceof MMapBaseClass, true, "the new instance is an instance of MMapBaseClass");
	t.end();
});


// This test checks that:
// 	- default options can be fetched from file (no fallback)
// 	- custom options can be fetched from file (fallback will be an empty object)
// 	- default and custom options are overridden and extended in the desired way (deep extend)

test('Call getOptions() WITH the customOptions.json file', (t) => {
	let inst = getInstance();
	let firstOptions = null;
	inst.getOptions().then( (options) => {
		// t.comment( JSON.stringify( options ) );
		firstOptions = options;
		
		t.equal(options instanceof Object, true, "options is an object");
		
		const overrideOptionsError = "not overriding options correctly";

		// Text
		t.equal(options.option1, "I should remain the default option", overrideOptionsError);
		t.equal(options.option2, "overridden", overrideOptionsError);

		t.equal(options.option3, 0, overrideOptionsError);
		t.equal(options.option4, false, overrideOptionsError);

		t.equal(options.nonExistingDefaultOption.zero, 0, overrideOptionsError);
		t.equal(options.nonExistingDefaultOption.falsy, false, overrideOptionsError);

		// Arrays
		t.deepEqual(options.deepOptions.arr, [5,4,3,2,1], overrideOptionsError);
		t.deepEqual(options.deepOptions.deeperOptions.arr, [5,4,3,2,1], overrideOptionsError);

		t.equal(inst._options instanceof Object, true, "merged options were saved as property of the instance");
		t.deepEqual(inst._options, options, "saved options are same as fetch options");

		// Second time calling getOptions() returns cached options
		inst.getOptions().then( (secondOptions) => {
			t.deepEqual(secondOptions, firstOptions, "second time returned options are same as first returned options");
			t.deepEqual(secondOptions, inst._options, "second time returned options are same as instance options");
			t.end();
		});


	}).catch( (error) => {
		t.fail(error);
		t.end();
	});

});


// This test checks that:
// 	- non-existing custom options will fallback to an empty object (thus leaving default options unchanged)

test('Call getOptions() WITHOUT the optional customOptions.json file', (t) => {
	let inst = getInstance();

	// Mock a profile name which doesnt have custom options for this module – should return an empty object from _getCustomOptions()
	inst._getProfileName = function() {
		return "this-file-doesnt-exist";
	};
	inst.getOptions().then( (options) => {
		// t.comment( JSON.stringify( options ) );
		
		t.equal(options instanceof Object, true, "options is an object");
		t.equal(options.option2, "I should be overridden", "default option should exist");

		t.end();
	}).catch( (error) => {
		t.fail(error)
		t.end();
	});
});

test('Get language as an object', (t) => {
	let inst = getInstance();

	inst.getOptions().then( (options) => {
		let langObj = inst.getLang(options);
		t.equal(langObj instanceof Object, true, "lang is an object");

		// I could not mock navigator.language so this is an alternative solution...
		switch (navigator.language) {
			case "sv-SE":
				t.equal(langObj.test, "Hej på svenska!", "Swedish label is gramatically correct");
				break;
			case "en":
				t.equal(langObj.test, "Hello in English!", "English label is gramatically correct");
				break;
		}
		t.end();
	}).catch( (error) => {
		t.fail(error)
		t.end();
	});
});






