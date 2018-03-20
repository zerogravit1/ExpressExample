'use strict';
const pageOne = require( '../../page_objects/page1.page' );

beforeEach( () => {
  pageOne.open();
} );

describe( 'Page 1 Navigation', () => {
  beforeEach( () => {
    pageOne.navToPage2.click();
  } );

  it( 'goes to Page 2', () => {
    expect( $( '.mdc-toolbar__title' ).getText() ).toEqual( 'Page 2' );
  } );
} );
