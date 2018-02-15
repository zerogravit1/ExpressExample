'use strict';

document.getElementById( 'greeting-form' ).addEventListener( 'submit', ( e ) => {
  e.preventDefault();

  let firstname = e.target.elements.firstname.value;
  let lastname  = e.target.elements.lastname.value;
  let greeting  = 'Hello';

  const xhr = new XMLHttpRequest();
  xhr.open( 'POST', '/home', true );
  xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

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

  let data = 'firstname=' + firstname + '&lastname=' + lastname;
  xhr.send( data );
} );
