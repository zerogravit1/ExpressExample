'use strict';

const pOneClass = objRef().page1Class;

beforeEach( async () => {
  await browser.get( process.env.BASE_URL + '/html/page1' );
} );

describe( 'Page 1 Navigation', () => {
  beforeEach( async () => {
    await pOneClass.navToPage2.click();
  } );

  it( 'goes to Page 2', async () => {
    expect( await $( '.mdc-toolbar__title' ).getText() ).toEqual( 'Page 2' );
  } );
} );
