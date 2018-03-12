'use strict';

const EC      = objRef().EC,
      pageOne = objRef().page1Objects;

beforeEach( () => {
  browser.get( process.env.BASE_URL + '/html/page1' );
  EC.waitForVisible( pageOne.toolbar );
} );

describe( 'Greetings', () => {
  it( 'submits with no inputs', () => {
    pageOne.btnPrintGreeting.click().then( () => {
      EC.waitForVisible( pageOne.greeting );

      expect( pageOne.greeting.isDisplayed() ).toBe( true );
      expect( pageOne.greeting.getText() ).toEqual( 'Hello!' );
    } );
  } );

  it( 'submits only a first name', () => {
    pageOne.inputFields.firstName.sendKeys( 't_firstname' );
    pageOne.btnPrintGreeting.click().then( () => {
      EC.waitForVisible( pageOne.greeting );

      expect( pageOne.greeting.isDisplayed() ).toBe( true );
      expect( pageOne.greeting.getText() ).toEqual( 'Hello, t_firstname!' );
    } );
  } );

  it( 'submits only a last name', () => {
    pageOne.inputFields.lastName.sendKeys( 't_lastname' );
    pageOne.btnPrintGreeting.click().then( () => {
      EC.waitForVisible( pageOne.greeting );

      expect( pageOne.greeting.isDisplayed() ).toBe( true );
      expect( pageOne.greeting.getText() ).toEqual( 'Hello, Mx. t_lastname!' );
    } );
  } );

  it( 'submits a first and last name', () => {
    pageOne.inputFields.firstName.sendKeys( 't_firstname' );
    pageOne.inputFields.lastName.sendKeys( 't_lastname' );
    pageOne.btnPrintGreeting.click().then( () => {
      EC.waitForVisible( pageOne.greeting );

      expect( pageOne.greeting.isDisplayed() ).toBe( true );
      expect( pageOne.greeting.getText() ).toEqual( 'Hello, t_firstname t_lastname!' );
    } );
  } );
} );
