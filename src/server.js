'use strict';

const cluster = require( 'cluster' );

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
} else {
  const express    = require( 'express' );
  const bodyParser = require( 'body-parser' );
  const jsonFile   = require( 'jsonfile' );
  const path       = require( 'path' );
  const app        = express();

  const genericPayload = require( './payload.json' );

  app.use( '/static', express.static( path.join( __dirname, 'public' ) ) );

  app.get( '/', ( req, res ) => {
    console.log( req.headers );
    res.sendFile( __dirname + '/index.html' );
  } );

  app.get( '/home/:id', ( req, res ) => {
    console.log( req.headers );

    if ( req.params.id < genericPayload.data.length ) {
      res.status( 200 ).send( genericPayload.data[req.params.id] );
    } else {
      res.status( 404 ).send( '\n' + req.params.id + ' is invalid\n' );
    }
  } );

  app.use( bodyParser() );

  app.post( '/home', ( req, res ) => {
    let file = 'src/tmp_' + cluster.worker.id + '.json';
    let obj  = req.body;

    jsonFile.writeFile( file, obj, {spaces: 2 }, ( err ) => {
      if ( err ) {
        console.log( err );
        res.status( 400 ).send( err );
      } else {
        res.status( 202 ).send( 'POST data accepted\nNode: ' + cluster.worker.id );
      }
    } );
  } );

  app.listen( 3000, () => {
    console.log(
      '************************************\n' +
      ' app server is running on port 3000\n\n' +
      ' cluster_id: ' + cluster.worker.id + '\n\n' +
      ' End Point:\n /home/:id\n /home\n\n METHODS:\n GET\n POST\n\n' +
      '************************************\n'
    );
  } );
}
