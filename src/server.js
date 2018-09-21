'use strict';

// const cluster = require( 'cluster' );
const express = require( 'express' );
const jsonFile = require( 'jsonfile' );
const path = require( 'path' );
let app = express();

const genericPayload = require( './payload.json' );
/*
if ( cluster.isMaster ) {
  let cpuCount = require( 'os' ).cpus().length;

  console.log( 'number of cpus: %d', cpuCount );

  for ( let i = 0; i < cpuCount; ++i ) {
    cluster.fork();
  }

  cluster.on( 'exit', ( worker ) => {
    console.log( 'Worker %d died', worker.id );
    cluster.fork();
  } );
} else {*/
  app.use( '/static', express.static( path.join( __dirname, 'public' ) ) );
  app.use( '/node', express.static( path.join( __dirname, '../node_modules/material-components-web/dist' ) ) );
  app.use( express.json( [ 'strict' ] ) );

  app.get( '/', ( req, res ) => {
    console.log( req.headers );
    res.redirect( '/html/page1' );
  } );

  app.get( '/html/page1', ( req, res ) => {
    console.log( req.headers );
    res.sendFile( __dirname + '/index.html' );
  } );

  app.get( '/html/page2', ( req, res ) => {
    console.log( req.headers );
    res.sendFile( __dirname + '/page2.html' );
  } );

  app.get( '/home/:id', ( req, res ) => {
    console.log( req.headers );

    if ( req.params.id < genericPayload.data.length ) {
      res.status( 200 ).send( genericPayload.data[req.params.id] );
    } else {
      res.status( 404 ).send( '\n' + req.params.id + ' is invalid\n' );
    }
  } );

  //app.use( bodyParser() );

  app.post( '/home', ( req, res ) => {
    let file = 'src/tmp_' /*+ cluster.worker.id*/ + '.json';
    let obj  = req.body;

    if ( Object.keys( obj ).length !== 0 ) {
      jsonFile.writeFile( file, obj, {spaces: 2 }, () => {
        res.status( 202 ).send( 'POST data accepted\nNode: ' /*+ cluster.worker.id*/ );
      } );
    } else {
      res.status( 400 ).send( 'bad request' );
    }
  } );

  app.listen( 3000, '127.0.0.1', () => {
    console.log(
      '************************************\n' +
      ' app server is running on port 3000\n\n' +
      ' cluster_id: ' /*+ cluster.worker.id*/ + '\n\n' +
      ' End Point:\n /home/:id\n /home\n\n METHODS:\n GET\n POST\n\n' +
      '************************************\n'
    );
  } );
//}

module.exports = app;
