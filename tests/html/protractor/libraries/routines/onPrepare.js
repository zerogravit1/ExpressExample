'use strict';
console.log( __filename );
/**
 * index.html and page2.html do not use Angular
 * so ignoreSync is set to true
 */
browser.ignoreSynchronization = true;

/**
 * global variables
 */
global.objRef = require( '../containers/object.references' );
