'use strict';
const pageOne = require( '../../page_objects/page1.page' );

beforeEach( () => {
  pageOne.open();
} );

describe( 'dropdown selection', () => {
  beforeEach( () => {
    pageOne.ddPickFood.click();
  } );

  it( 'displays the dropdown options', () => {
    expect( pageOne.ddPickFoodOptions.isVisible() ).toBe( true );
  } );

  it( 'displays the dropdown option text', () => {
    expect( pageOne.ddPickFoodOptions.getText() ).toEqual( 'Pizza 0\nPizza 1\nPizza 2\nPizza 3' );
  } );

  it( 'selects a dropdown option', () => {
    let item = browser.element( '.mdc-list-item:nth-child(1)' );
    item.click();

    expect( pageOne.ddPickFoodSelected.getText() ).toEqual( 'Pizza 0' );
  } );
} );
