"use strict";

import extend from "extend";
import queryString from "query-string";
import "whatwg-fetch";
import Promise from "es6-promise";
import hjson from "hjson";

export default class MMApBaseClass {

	dirDefaultOptions = "modules/" + this.constructor.name + "/options/";
	dirCustomOptions = "modules/" + this.constructor.name + "/options/";  // For transpiling with class properties: https://babeljs.io/docs/plugins/transform-class-properties/
	_options = null; // To be filled with contents from options files
	defaultLangCode = "sv"; // If language is not supported in module's options.lang this will be the fallback language

	constructor() {}

	/**
	 * Returns the browser's current set language
	 * @return {String} An ISO code representing the language.
	 */
	getLangCode() {
		return navigator.language || navigator.browserLanguage; // browserLanguage is for IE<11
	}

	/**
	 * Returns the language object for the current language (i.e. does not return lang object for all supported languages).
	 * @return {Object} The language object/hash table
	 */
	getLang(options = {}) {
		// TODO: Get object for current language
		let langObj = options.lang || {};

		const langExludingDialects = this.getLangCode().split("-")[0]; // e.g. sv-SE or sv-FI -> sv
		let supportedLangs = Object.keys(langObj);
		let langCode = supportedLangs.indexOf(langExludingDialects) === -1 ? this.defaultLangCode : langExludingDialects;
		let lang = langObj[ langCode ];
		if (!lang) {
			console.warn(`Module {this.constructor.name} has no language defined in defaultOptions.json for lang code: {langCode}.`);
			lang = supportedLangs.length ? supportedLangs[0] : null; // As a last fallback any supported language will be used (if any, otherwise none)
		}
		return lang || {};
	}

	// _getWebParamsAsObject() {
	// 	return queryString.parse(location.search);
	// }

	_getProfileName() {
		return window.cbKort && cbKort && cbKort.getProfile ? (cbKort.getProfile() || null) : null; //this._getWebParamsAsObject().profile || null;
	}

	_fetchDefaultOptions() {
		// Options defined in defaultOptions.json inside the module
		const defaultOptionsName = "defaultOptions.json";
		const pathToDefaultOptions = this.dirDefaultOptions + defaultOptionsName;
		return new Promise( (resolve, reject) => {
			fetch(pathToDefaultOptions).then( (response) => {
				response.text().then(text => resolve(hjson.parse(text)) ); //.catch(error => new Error("Error while parsing default options"));
			}).catch( error => reject(error) );
		});
		
	}

	/**
	 * Fetches custom options (if any). The custom options filename 
	 * is named like: "customOptions-" + profileName.
	 * @return {Promise}
	 *         - on success: 	returns options {Object}
	 *         - on fail: 		returns null {Object}
	 */
	_fetchCustomOptions() {
		// Options defined in customOptions.json inside the module

		const profileName = this._getProfileName() || "mock";
		const customOptionsName = "customOptions-"+profileName+".json";
		const pathToCustomOptions = this.dirCustomOptions + customOptionsName;
		return fetch(pathToCustomOptions)
				.then( (response) => {
					return response.text().then(text => hjson.parse(text)); //.catch(error => new Error("Error while parsing default options"));
				})
				.catch( error => {
					console.warn("Profile: "+this._getProfileName() + "has no custom config for module: " + this.constructor.name + " (this might be expected and not an error). See error message below for details");
					console.warn(error);
					return null;
			});
	}

	/**
	 * Fetches default and custom options (if any). Overrides default options with custom options.
	 * @return {Promise}
	 *         - on success: 	returns merged options {Object}
	 *         - on fail: 		returns error {Object}
	 */
	_fetchOptions() {
		return Promise.all([this._fetchDefaultOptions(), this._fetchCustomOptions()])
			.then(
				optionsArr => extend(true, optionsArr[0], optionsArr[1] || {}),
				error => {
					console.log(error);
					return null; // Should we return default options if custom options were not found but default options were found?
				}
		);
	}

	/**
	 * Public async method for fetching options (merged default and custom).
	 * This is a wrapper for _fetchOptions to add caching of this._options 
	 * for speeding up any subsequent calls.
	 * @return {Promise}
	 *         - on success: 	returns merged options {Object}
	 *         - on fail: 		returns error {Object}
	 */
	getOptions() {
		if (this._options) {
			return Promise.resolve( this._options );
		}

		return new Promise( (resolve, reject) => {
			this._fetchOptions()
				.then( options => {
					this._options = options;
					resolve(options);
				})
				.catch( (error) => reject(error) );
		});
	}
	
};