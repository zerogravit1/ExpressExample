'use strict';

let ToolBar = require( './nav.class' );

class PageOne extends ToolBar {
  constructor() {
    super();
    this.btnPrintGreeting   = $( 'button[type="submit"]' );
    this.ddPickFood         = $( '.mdc-select' );
    this.ddPickFoodItem     = $$( '.mdc-list-item' );
    this.ddPickFoodLabel    = $( '.mdc-select__label' );
    this.ddPickFoodOptions  = $( '.mdc-menu.mdc-select__menu' );
    this.ddPickFoodSelected = $( '.mdc-select__selected-text' );
    this.greeting           = $( '#greeting' );
    this.pageHeader         = $( '.mdc-typography--display1' );

    this.inputFields = {
      firstName: $( '#firstname' ),
      lastName:  $( '#lastname' )
    };

    this.labels = {
      firstName: $( 'label[for="firstname"]' ),
      lastName:  $( 'label[for="lastname"]' )
    };
  }

  get getExample() {
    return this.exampleMethod();
  }

  exampleMethod() {
    return '\nstringFromMethod\n';
  };
}

module.exports = new PageOne()
