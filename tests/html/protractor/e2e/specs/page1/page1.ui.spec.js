'use strict';

const EC      = objRef().EC,
      pageOne = objRef().page1Objects;

beforeEach( () => {
  browser.get( process.env.BASE_URL + '/html/page1' );
  EC.waitForVisible( pageOne.toolbar );
} );

describe( 'Page 1 UI Elements', () => {
  it( 'displays the toolbar', () => {
    expect( pageOne.toolbar.isDisplayed() ).toBe( true );

    expect( pageOne.navToPage2.isDisplayed() ).toBe( true );
    expect( pageOne.navToPage2.getText() ).toEqual( 'Go to Page 2' );

    expect( pageOne.toolbarTitle.isDisplayed() ).toBe( true );
    expect( pageOne.toolbarTitle.getText() ).toEqual( 'Main Page' );
  } );

  it( 'displays the input form', () => {
    expect( pageOne.pageHeader.isDisplayed() ).toBe( true );
    expect( pageOne.pageHeader.getText() ).toEqual( 'Fill this out' );

    expect( pageOne.inputFields.firstName.isDisplayed() ).toBe( true );

    expect( pageOne.labels.firstName.isDisplayed() ).toBe( true );
    expect( pageOne.labels.firstName.getText() ).toEqual( 'First Name' );

    expect( pageOne.inputFields.lastName.isDisplayed() ).toBe( true );

    expect( pageOne.labels.lastName.isDisplayed() ).toBe( true );
    expect( pageOne.labels.lastName.getText() ).toEqual( 'Last Name' );

    expect( pageOne.btnPrintGreeting.isDisplayed() ).toBe( true );
    expect( pageOne.btnPrintGreeting.getText() ).toEqual( 'PRINT GREETING' );
  } );

  it( 'displays the "Pick Food" dropdown', () => {
    expect( pageOne.ddPickFood.isDisplayed() ).toBe( true );

    expect( pageOne.ddPickFoodLabel.isDisplayed() ).toBe( true );
    expect( pageOne.ddPickFoodLabel.getText() ).toEqual( 'Pick Food' );
  } );
} );
