
# HelloWorld

## What is this?

This is a template to be copied or studied when creating a new module. This is in-built:
- JS code showing how to extend and use the base class (MMapBaseClass)
- The build scripts (cli scripts defined in `package.json`)
- Deploy files (CSM specific): [deploy.xml](deploy.xml) and [tools/HelloWorld.xml](tools/HelloWorld.xml)

## Prerequisites

- Install [node & npm](https://nodejs.org/en/download/)
- A Command-Line Interface (CLI) so we can run the npm commands, preferably Bash/Unix or PowerShell (Win)

## How to make a module
Let's assume we want to create a module named `MyModule`:

1. Create a new folder named `MyModule`
2. Copy the contents of `HelloWorld` except for the folder `node_modules`. Also copy "hidden" files – those starting with "." especially `.babelrc` (but not `.git`). Copy them into your `MyModule`-folder.
3. In all files, find all occurrences of `HelloWorld` and replace with `MyModule`
4. Enter the shell (Terminal/PowerShell) and navigate to your module's directory and run `npm install` (fetches dependencies and devDependencies)
5. Run `npm run build` (transpiles JavaScript from version [ES > 5](https://en.wikipedia.org/wiki/ECMAScript#ES.Next) to [ES5](https://en.wikipedia.org/wiki/ECMAScript#5th_Edition) and bundles it – i.e. replaces all `import`s with corresponding code)
6. Adapt the deploy.xml as you add/remove files (so that the result of the build is included, without the unreadable source files)
7. Start coding – and as soon as you want to test the result, execute `npm run build` followed by Unix-`curl`/Microsoft-`curl` to `http://mmapdev.sbkmalmo.local/admin?command=reloadconfig`

## npm scripts

Execute scripts by typing `npm run <command>` into your CLI, e.g. `npm run build`. These table below shows the only scripts required for building the code. These commands are also ensured to work on Windows (thanks to the [shelljs/shx](https://github.com/shelljs/shx) module):

| Command | Description |
| ------- | ----------- |
| build | Calls `build:js` and `build:css` |
| build:js | Transpiles javascript code (es20XX -> es5) and bundles it (i.e. injects dependencies defined with `import`) |
| build:css | Converts Stylus files into CSS. If you want to use other formats (sass, less), just add whatever command you like here. |

### Other scripts

You can modify/add your own scripts as you wish, for instance if you often execute some command it's easier to remember and to type `npm run <command>` than a longer command.

The commands below are not ensured to work on Windows, just remove them or look at them as a reference for your own scripts.

| Command | Description |
| ------- | ----------- |
| test | Runs the unit test (if you have defined such) |
| clean | Part of the build process. Removes the `dist` catalog (where the bundled code ends up) |
| move | Part of the build process. Moves resources to the `dist` catalog |
| lint | Checks for js-errors (purpose: user feedback only) |
| reloadcsm | Reloads the CSM map framework configuration |
| watch:test | Useful while coding using a test-driven development (TDD) methodology. Calls `npm test` each time a change happens in a `src/**/*.js` file. |
| watch:lint | Useful while coding. Calls `lint` each time a change happens. |
| watch:js | Useful while coding and you need to build the code after every change. |
| watch:css | -- "" -- but for CSS. |


<!--## Common assets

JQuery is an example of a library which is already used in CSM (a common asset). It's unnessary to import it for every module (and might give trouble if use different versions). We don't want to include this library in the bundle. Therefore, specify that it is a common asset in `webpack.config.js`:
```
// File: webpack.config.js
externals: {
	"jquery": "$"
},
```
This code means we are telling webpack:
- Don't include the npm library named `jquery` in the bundle
- However, I want webpack to know that `$` refers to a global asset (otherwise `$` will be an unknown variable, creating a build error).
-->
