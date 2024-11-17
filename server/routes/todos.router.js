const router = require('express').Router();
const pool = require('../modules/pool');

router.get( '/', ( req, res )=>{
    console.log( '/todos GET' );
    // assemble query
    const queryText = 'SELECT * FROM todos';
    // run pool.query
    pool.query( queryText ).then( ( results )=>{
        // return results.rows
        res.send( results.rows );
    }).catch( ( err )=>{
        // handle any errors
        console.log( err );
        res.sendStatus( 400 );
    })
})


module.exports = router;
