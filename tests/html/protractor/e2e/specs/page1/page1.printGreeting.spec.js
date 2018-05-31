'use strict';

const pOneClass = objRef().page1Class;

beforeEach( async() => {
  await browser.get( process.env.BASE_URL + '/html/page1' );
} );

describe( 'Greetings', () => {
  it( 'submits with no inputs', async() => {
    await pOneClass.btnPrintGreeting.click().then( async() => {
      expect( await pOneClass.greeting.isDisplayed() ).toBe( true );
      expect( await pOneClass.greeting.getText() ).toEqual( 'Hello!' );
    } );
  } );

  it( 'submits only a first name', async() => {
    await pOneClass.inputFields.firstName.sendKeys( 't_firstname' );
    await pOneClass.btnPrintGreeting.click().then( async() => {
      expect( await pOneClass.greeting.isDisplayed() ).toBe( true );
      expect( await pOneClass.greeting.getText() ).toEqual( 'Hello, t_firstname!' );
    } );
  } );

  it( 'submits only a last name', async() => {
    await pOneClass.inputFields.lastName.sendKeys( 't_lastname' );
    await pOneClass.btnPrintGreeting.click().then( async() => {
      expect( await pOneClass.greeting.isDisplayed() ).toBe( true );
      expect( await pOneClass.greeting.getText() ).toEqual( 'Hello, Mx. t_lastname!' );
    } );
  } );

  it( 'submits a first and last name', async() => {
    await pOneClass.inputFields.firstName.sendKeys( 't_firstname' );
    await pOneClass.inputFields.lastName.sendKeys( 't_lastname' );
    await pOneClass.btnPrintGreeting.click().then( async() => {
      expect( await pOneClass.greeting.isDisplayed() ).toBe( true );
      expect( await pOneClass.greeting.getText() ).toEqual( 'Hello, t_firstname t_lastname!' );
    } );
  } );
} );
