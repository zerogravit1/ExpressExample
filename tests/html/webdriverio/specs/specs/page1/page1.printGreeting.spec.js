'use strict';
const pageOne = require( '../../page_objects/page1.page' );

beforeEach( () => {
  pageOne.open();
} );

describe( 'Greetings', () => {
  it( 'submits with no inputs', () => {
    pageOne.btnPrintGreeting.click();

    expect( pageOne.greeting.isVisible() ).toBe( true );
    expect( pageOne.greeting.getText() ).toEqual( 'Hello!' );
  } );

  it( 'submits only a first name', () => {
    pageOne.ifFirstName.setValue( 't_firstname' );
    pageOne.btnPrintGreeting.click();

    expect( pageOne.greeting.isVisible() ).toBe( true );
    expect( pageOne.greeting.getText() ).toEqual( 'Hello, t_firstname!' );
  } );

  it( 'submits only a last name', () => {
    pageOne.ifLastName.setValue( 't_lastname' );
    pageOne.btnPrintGreeting.click();

    expect( pageOne.greeting.isVisible() ).toBe( true );
    expect( pageOne.greeting.getText() ).toEqual( 'Hello, Mx. t_lastname!' );
  } );

  it( 'submits a first and last name', () => {
    pageOne.ifFirstName.setValue( 't_firstname' );
    pageOne.ifLastName.setValue( 't_lastname' );
    pageOne.btnPrintGreeting.click();

    expect( pageOne.greeting.isVisible() ).toBe( true );
    expect( pageOne.greeting.getText() ).toEqual( 'Hello, t_firstname t_lastname!' );
  } );
} );
