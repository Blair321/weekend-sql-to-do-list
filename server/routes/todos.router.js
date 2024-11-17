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
router.post('/', (req, res) => {
    console.log('req.body', req.body);
    const newToDo = req.body

    const queryText = `
        INSERT INTO "todos"("text", "isComplete") 
        VALUES ($1, $2);
    `
    const values = [newToDo.text, newToDo.isComplete]

    pool.query(queryText, values)
        .then((result) => {
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log(`Error making query: ${queryText} -`, error)
            res.sendStatus(500)
        })
});

module.exports = router;
