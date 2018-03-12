'use strict';

let Page2Page = ( () => {
  function Page2Page() {
    this.property = 'string';
  }

  Page2Page.prototype = {
    exampleMethod: () => {
      return 'stringFromMethod';
    }
  };

  return Page2Page;
} )();

module.exports = new Page2Page();
