'use strict';

let ExpectedConditions = ( () => {
  function ExpectedConditions() {
    this.timeDuration = 5000;
  }

  ExpectedConditions.prototype = {
    waitAndClick: ( el ) => {
      let EC = protractor.ExpectedConditions;
      let isClickable = EC.elementToBeClickable( el );

          browser.wait( isClickable, this.timeDuration );
          el.click();
    },

    waitForVisible: ( el ) => {
      let EC = protractor.ExpectedConditions;
      let isVisible = EC.visibilityOf( el );

      browser.wait( isVisible, this.timeDuration );
    },

    waitForInvisible: ( el ) => {
      let EC = protractor.ExpectedConditions;
      let isInvisible = EC.invisibilityOf( el );

      browser.wait( isInvisible, this.timeDuration );
    },

    waitForPresence: ( el ) => {
      let EC = protractor.ExpectedConditions;
      let isPresent = EC.presenceOf( el );

      browser.wait( isPresent, this.timeDuration );
    },

    waitForTextChange: ( el, text ) => {
      let EC = protractor.ExpectedConditions;
      let isChanged = EC.textToBePresentInElement( el, text );

      browser.wait( isChanged, this.timeDuration );
    },

    waitForURLChange: ( urlToBe ) => {
      let EC = protractor.ExpectedConditions;
      browser.wait( EC.urlContains( urlToBe ), this.timeDuration );
    }
  };

  return ExpectedConditions;
} )();

module.exports = new ExpectedConditions();
