'use strict';

class ToolBar {
  constructor() {
    this.navToPage2   = $( '.mdc-top-app-bar__navigation-icon' );
    this.toolbar      = $( '.mdc-top-app-bar' );
    this.toolbarTitle = $( '.mdc-top-app-bar__title' );
  }
}

module.exports = ToolBar;
