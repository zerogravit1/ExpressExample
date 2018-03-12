'use strict';

let Page1Page = ( () => {
  function Page1Page() {
    this.btnPrintGreeting   = $( 'button[type="submit"]' );
    this.ddPickFood         = $( '.mdc-select' );
    this.ddPickFoodItem     = $$( '.mdc-list-item' );
    this.ddPickFoodLabel    = $( '.mdc-select__label' );
    this.ddPickFoodOptions  = $( '.mdc-menu.mdc-select__menu' );
    this.ddPickFoodSelected = $( '.mdc-select__selected-text' );
    this.greeting           = $( '#greeting' );
    this.navToPage2         = $( '.mdc-toolbar__menu-icon' );
    this.pageHeader         = $( '.mdc-typography--display1' );
    this.toolbar            = $( '.mdc-toolbar' );
    this.toolbarTitle       = $( '.mdc-toolbar__title' );

    this.inputFields = {
      firstName: $( '#firstname' ),
      lastName:  $( '#lastname' )
    };

    this.labels = {
      firstName: $( 'label[for="firstname"]' ),
      lastName:  $( 'label[for="lastname"]' )
    };
  }

  Page1Page.prototype = {
    exampleMethod: () => {
      return 'stringFromMethod';
    }
  };

  return Page1Page;
} )();

module.exports = new Page1Page();
