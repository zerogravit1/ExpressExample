'use strict';
const pageOne = require( '../../page_objects/page1.page' );

beforeEach( () => {
  pageOne.open();
} );

describe( 'Page 1 UI Elements', () => {
  it( 'displays the toolbar', () => {
    expect( pageOne.toolbar.isVisible() ).toBe( true );

    expect( pageOne.navToPage2.isVisible() ).toBe( true );
    expect( pageOne.navToPage2.getText() ).toEqual( 'Go to Page 2' );

    expect( pageOne.toolbarTitle.isVisible() ).toBe( true );
    expect( pageOne.toolbarTitle.getText() ).toEqual( 'Main Page' );
  } );

  it( 'displays the input form', () => {
    expect( pageOne.pageHeader.isVisible() ).toBe( true );
    expect( pageOne.pageHeader.getText() ).toEqual( 'Fill this out' );

    expect( pageOne.ifFirstName.isVisible() ).toBe( true );

    expect( pageOne.lFirstName.isVisible() ).toBe( true );
    expect( pageOne.lFirstName.getText() ).toEqual( 'First Name' );

    expect( pageOne.ifLastName.isVisible() ).toBe( true );

    expect( pageOne.lLastName.isVisible() ).toBe( true );
    expect( pageOne.lLastName.getText() ).toEqual( 'Last Name' );

    expect( pageOne.btnPrintGreeting.isVisible() ).toBe( true );
    expect( pageOne.btnPrintGreeting.getText() ).toEqual( 'PRINT GREETING' );
  } );

  it( 'displays the "Pick Food" dropdown', () => {
    expect( pageOne.ddPickFood.isVisible() ).toBe( true );

    expect( pageOne.ddPickFoodLabel.isVisible() ).toBe( true );
    expect( pageOne.ddPickFoodLabel.getText() ).toEqual( 'Pick Food' );
  } );
} );
