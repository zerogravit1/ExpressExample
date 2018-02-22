'use strict';

let chai     = require( 'chai' );
let chaiHttp = require( 'chai-http' );
let server   = require( '../src/server' );
/** chai convention */
// eslint-disable-next-line
let should   = chai.should();

chai.use( chaiHttp );

describe( 'Testable HTTP Server', () => {
  describe( '/ redirect', () => {
    it( 'should return a 302', ( done ) => {
      chai.request( server )
        .get( '/' )
        .end( ( err ) => {
          if ( err ) {
            err.should.have.status( 302 );
          }
          done();
        } );
    } );
  } );

  describe( '/GET HTML', () => {
    it( 'should return a 200', ( done ) => {
      chai.request( server )
        .get( '/html' )
        .end( ( err, res ) => {
          if ( err ) {
            throw err;
          } else {
            res.should.have.status( 200 );
          }
          done();
        } );
    } );
  } );

  describe( '/GET Page 2', () => {
    it( 'should return a 200', ( done ) => {
      chai.request( server )
        .get( '/page2' )
        .end( ( err, res ) => {
          if ( err ) {
            throw err;
          } else {
            res.should.have.status( 200 );
          }
          done();
        } );
    } );
  } );

  describe( '/GET home/:id', () => {
    it( 'should return 200', ( done ) => {
      chai.request( server )
        .get( '/home/1' )
        .end( ( err, res ) => {
          if ( err ) {
            throw err;
          } else {
            res.should.have.status( 200 );
          }
          done();
        } );
    } );

    it( 'should return 404', ( done ) => {
      chai.request( server )
        .get( '/home/6' )
        .end( ( err, res ) => {
          if ( err ) {
            err.should.have.status( 404 );
          } else {
            console.log( res );
          }
          done();
        } );
    } );
  } );

  describe( '/POST home', () => {
    it( 'should return 202', ( done ) => {
      let data = {
        id:  '1',
        val: 'unit-test'
      };

      chai.request( server )
        .post( '/home' )
        .send( data )
        .end( ( err, res ) => {
          if ( err ) {
            throw err;
          } else {
            res.should.have.status( 202 );
          }
          done();
        } );
    } );

    it( 'should return 400', ( done ) => {
      const data = 'test';

      chai.request( server )
        .post( '/home' )
        .send( data )
        .end( ( err ) => {
          if ( err ) {
            err.should.have.status( 400 );
          }
          done();
        } );
    } );
  } );
} );
