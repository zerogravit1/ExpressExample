'use strict';

let Page = require( './page' );

let PageOne = Object.create( Page, {
  btnPrintGreeting:   { get: function() { return browser.element( 'button[type="submit"]' ); } },
  ddPickFood:         { get: function() { return browser.element( '.mdc-select' ); } },
  ddPickFoodItem:     { get: function() { return browser.elements( '.mdc-list-item' ); } },
  ddPickFoodLabel:    { get: function() { return browser.element( '.mdc-select__label' ); } },
  ddPickFoodOptions:  { get: function() { return browser.element( '.mdc-menu.mdc-select__menu' ); } },
  ddPickFoodSelected: { get: function() { return browser.element( '.mdc-select__selected-text' ); } },
  greeting:           { get: function() { return browser.element( '#greeting' ); } },
  navToPage2:         { get: function() { return browser.element( '.mdc-toolbar__menu-icon' ); } },
  pageHeader:         { get: function() { return browser.element( '.mdc-typography--display1' ); } },
  toolbar:            { get: function() { return browser.element( '.mdc-toolbar' ); } },
  toolbarTitle:       { get: function() { return browser.element( '.mdc-toolbar__title' ); } },

  ifFirstName: { get: function() { return browser.element( '#firstname' ); } },
  ifLastName:  { get: function() { return browser.element( '#lastname' ); } },

  lFirstName: { get: function() { return browser.element( 'label[for="firstname"]' ); } },
  lLastName:  { get: function() { return browser.element( 'label[for="lastname"]' ); } },

  open: { value: function() {
    Page.open.call( this, '/html/page1' );
  } }
} );

module.exports = PageOne;
