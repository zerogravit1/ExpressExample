'use strict';

module.exports = () => {
  return {
    EC:           require( '../expected.conditions' ),
    page1Objects: require( '../../e2e/page_objects/page1.page' ),
    page2Objects: require( '../../e2e/page_objects/page2.page' )
  };
};
