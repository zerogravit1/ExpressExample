'use strict';

const pOneClass = objRef().page1Class;

beforeEach( async() => {
  await browser.get( process.env.BASE_URL + '/html/page1' );
} );

describe( 'dropdown selection', () => {
  beforeEach( async() => {
    await pOneClass.ddPickFood.click();
    //await browser.sleep( 25 ); //this is the worst solution ever!!
  } );

  it( 'displays the dropdown options', async() => {
    expect( await pOneClass.ddPickFoodOptions.isDisplayed() ).toBe( true );
  } );

  it( 'displays the dropdown option text', async() => {
    expect( await pOneClass.ddPickFoodOptions.getText() ).toEqual( 'apple\norange\nbanana' );
  } );

  it( 'selects a dropdown option', async() => {
    await pOneClass.ddPickFoodItem.get( 1 ).click();
    expect( await pOneClass.ddPickFoodOptions.getAttribute( 'value' ) ).toEqual( 'apple' );
  } );
} );
