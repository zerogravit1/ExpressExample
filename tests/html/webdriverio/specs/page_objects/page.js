'use strict';

function Page() {
  this.title = 'Material Components for the web';
}

Page.prototype.open = function( path ) {
  browser.url( path );
}

module.exports = new Page();
