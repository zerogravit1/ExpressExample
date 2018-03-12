'use strict';

const EC      = objRef().EC,
      pageOne = objRef().page1Objects;

beforeEach( () => {
  browser.get( process.env.BASE_URL + '/html/page1' );
  EC.waitForVisible( pageOne.toolbar );
} );

describe( 'dropdown selection', () => {
  beforeEach( () => {
    pageOne.ddPickFood.click().then( () => {
      EC.waitForVisible( pageOne.ddPickFoodOptions );
    } );
  } );

  it( 'displays the dropdown options', () => {
    expect( pageOne.ddPickFoodOptions.isDisplayed() ).toBe( true );
  } );

  it( 'displays the dropdown option text', () => {
    expect( pageOne.ddPickFoodOptions.getText() ).toEqual( 'Pizza 0\nPizza 1\nPizza 2\nPizza 3' );
  } );

  it( 'selects a dropdown option', () => {
    pageOne.ddPickFoodItem.first().click().then( () => {
      EC.waitForVisible( pageOne.ddPickFoodSelected );

      expect( pageOne.ddPickFoodSelected.getText() ).toEqual( 'Pizza 0' );
    } );
  } );
} );
