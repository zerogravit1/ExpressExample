'use strict';

const pOneClass = objRef().page1Class;

beforeEach( async () => {
  await browser.get( process.env.BASE_URL + '/html/page1' );
} );

describe( 'Page 1 UI Elements', () => {
  it( 'displays the toolbar', async () => {
    expect( await pOneClass.toolbar.isDisplayed() ).toBe( true );

    expect( await pOneClass.navToPage2.isDisplayed() ).toBe( true );
    expect( await pOneClass.navToPage2.getText() ).toEqual( 'Go to Page 2' );

    expect( await pOneClass.toolbarTitle.isDisplayed() ).toBe( true );
    expect( await pOneClass.toolbarTitle.getText() ).toEqual( 'Main Page' );
  } );

  it( 'displays the input form', async () => {
    expect( await pOneClass.pageHeader.isDisplayed() ).toBe( true );
    expect( await pOneClass.pageHeader.getText() ).toEqual( 'Fill this out' );

    expect( await pOneClass.inputFields.firstName.isDisplayed() ).toBe( true );

    expect( await pOneClass.labels.firstName.isDisplayed() ).toBe( true );
    expect( await pOneClass.labels.firstName.getText() ).toEqual( 'First Name' );

    expect( await pOneClass.inputFields.lastName.isDisplayed() ).toBe( true );

    expect( await pOneClass.labels.lastName.isDisplayed() ).toBe( true );
    expect( await pOneClass.labels.lastName.getText() ).toEqual( 'Last Name' );

    expect( await pOneClass.btnPrintGreeting.isDisplayed() ).toBe( true );
    expect( await pOneClass.btnPrintGreeting.getText() ).toEqual( 'PRINT GREETING' );
  } );

  it( 'displays the "Pick Food" dropdown', async () => {
    console.log( pOneClass.exampleMethod() );
    expect( await pOneClass.ddPickFood.isDisplayed() ).toBe( true );

    expect( await pOneClass.ddPickFoodLabel.isDisplayed() ).toBe( true );
    expect( await pOneClass.ddPickFoodLabel.getText() ).toEqual( 'Pick Food' );
  } );
} );
