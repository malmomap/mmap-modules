
# MMapBaseClass

## About

This is a base class intended for mmap modules to extend it.

### Why?
Functionality which should be the same for all modules can be defined *once* and imported to every new module, instead of duplicating code in every module.

<!--Pros and cons compared to using a template (which would be copied for each new module):

Pros:
- No duplication of code => less complication and less code
- Reduced risk of diverging versions (different ways of coding the same thing) => less errors 
- Easier to modify or add functionality (methods/properties) which should apply to all modules (= sub-classes)

Cons:
- Slightly more complication in the build logic (using `npm pack` to make the base class)
- Requires understanding of inheritance (creating subclasses) -->

## How to use it

It is adviced to use the template module [helloWorld](../HelloWorld/) since it better explains how the base class can be used in practice. Otherwise, these are the basic steps to extend the base class:

1. Create an empty folder for your new module

2. Create a package.json file by typing `npm init`

3. Add the base class as a dependency: ``` "dependencies": {"MMapBaseClass": "file:../MMapBaseClass/MMapBaseClass-1.0.0.tgz"} ```

4. Add other dependencies if you need and execute `npm install` inside your module's directory
5. In your module's JS file, this the ES2015<= way of importing and extending the class:

```
import MMapBaseClass from "MMapBaseClass";

class MyModule extends MMapBaseClass {
	constructor() {
		super(); // This calls the parent class's (MMapBaseClass's) constructor and should always be called first.
		this.getOptions(); // This method exist in the parent class, that's why we call it
	}
}

```

### Transpiling code
Since this text is written before browsers natively supported this syntax, you must transpile the code (i.e. convert it to old-style JS – ES5):

1. Copy the `devDependencies` from [here](package.json) of from the HelloWorld template
2. Execute `npm install` to install the transpiling tools
3. Copy the `webpack.config.js` from the HelloWorld template
4. Run `webpack`
