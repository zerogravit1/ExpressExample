'use strict';

document.getElementById( 'greeting-button' ).addEventListener( 'click', ( e ) => {
  e.preventDefault();

  let firstname = document.getElementById( 'firstname' ).value;
  let lastname  = document.getElementById( 'lastname' ).value;
  let greeting  = 'Hello';

  const xhr = new XMLHttpRequest();
  xhr.open( 'POST', '/home', true );
  xhr.setRequestHeader( 'Content-Type', 'application/json' );

  if ( firstname || lastname ) {
    greeting += ', ';
    if ( firstname && lastname ) {
      greeting += firstname + ' ' + lastname;
    } else if ( lastname ) {
      greeting += 'Mx. ' + lastname;
    } else {
      greeting += firstname;
    }
  }
  greeting += '!';

  xhr.onreadystatechange = () => {
    if ( xhr.readyState === XMLHttpRequest.DONE && xhr.status === 202 ) {
      document.getElementById( 'greeting' ).textContent = greeting;
    }
  }

  let data = { firstname, lastname };
  xhr.send( JSON.stringify( data ) );
} );
