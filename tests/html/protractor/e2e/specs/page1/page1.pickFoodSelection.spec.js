'use strict';

const pOneClass = objRef().page1Class;

beforeEach( async() => {
  await browser.get( process.env.BASE_URL + '/html/page1' );
} );

describe( 'dropdown selection', () => {
  beforeEach( async() => {
    await pOneClass.ddPickFood.click();
    await browser.sleep( 25 ); //this is the worst solution ever!!
  } );

  it( 'displays the dropdown options', async() => {
    expect( await pOneClass.ddPickFoodOptions.isDisplayed() ).toBe( true );
  } );

  it( 'displays the dropdown option text', async() => {
    expect( await pOneClass.ddPickFoodOptions.getText() ).toEqual( 'Pizza 0\nPizza 1\nPizza 2\nPizza 3' );
  } );

  it( 'selects a dropdown option', async() => {
    await pOneClass.ddPickFoodItem.first().click();
    await browser.sleep( 50 ); //this is the worst solution ever!!
    expect( await pOneClass.ddPickFoodSelected.isDisplayed() ).toBe( true );
    expect( await pOneClass.ddPickFoodSelected.getText() ).toEqual( 'Pizza 0' );
  } );
} );
