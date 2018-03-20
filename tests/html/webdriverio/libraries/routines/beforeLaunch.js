'use strict';
console.log( __filename );

const env = require( '../../environment/domains' );
// set process variable
process.env.BASE_URL = env.localhost;
