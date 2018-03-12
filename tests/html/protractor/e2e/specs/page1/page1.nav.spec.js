'use strict';

const EC      = objRef().EC,
      pageOne = objRef().page1Objects;

beforeEach( () => {
  browser.get( process.env.BASE_URL + '/html/page1' );
  EC.waitForVisible( pageOne.toolbar );
} );

describe( 'Page 1 Navigation', () => {
  beforeEach( () => {
    pageOne.navToPage2.click().then( () => {
      EC.waitForURLChange( 'page2' );
    } );
  } );

  it( 'goes to Page 2', () => {
    expect( $( '.mdc-toolbar__title' ).getText() ).toEqual( 'Page 2' );
  } );
} );
