'use strict';

let ToolBar = require( './nav.class' );

class PageOne extends ToolBar {
  constructor() {
    super();
    this.btnPrintGreeting   = $( 'button[type="submit"]' );
    this.ddPickFood         = $( '.mdc-select' );
    this.ddPickFoodItem     = $( '.mdc-select__native-control' ).$$( 'option' );
    this.ddPickFoodLabel    = $( '.mdc-select.demo-select' ).$( '.mdc-floating-label' );
    this.ddPickFoodOptions  = $( '.mdc-select__native-control' );
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
