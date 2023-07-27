const express = require('express');
const router = express.Router();



// DB CONNECTION
const pool = require('../modules/pool.js');

// GET
router.get('/', (req,res) => {
    let queryText = `SELECT * FROM "koalas";`;

    pool.query(queryText)
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows)
        }).catch((error) => {
            console.log('Error on get koala:', error);
            res.sendStatus(500);
        })
});

// POST
router.post('/', (req,res) => {
    console.log('inside the post', req.body);
    //maybe id goes here
    const name = req.body.name;
    const gender = req.body.gender;
    const age =req.body.age;
    const readyToTransfer = req.body.ready_to_transfer;
    const notes = req.body.notes;

    const queryParams = [name,gender,age, readyToTransfer,notes];
    const queryText = `INSERT INTO "koalas" ("name","gender","age","ready_to_transfer","notes")
                    VALUES($1, $2, $3, $4, $5);`
    
    pool.query(queryText,queryParams)
        .then((result) => {
            console.log('pool query is working');
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error on post', error);
            res.sendStatus(500);
        })
});


// PUT
router.put('/:id', (req, res) => {
    res.sendStatus(200)
    console.log(req.params.id)

    // get id from params
    let koalaId = req.params.id
    // what is new status?
    let newStatus = "true"
    let queryParams = [newStatus, koalaId]

    // need to write a query that targets a koalaId and changes its readytotransfer status to true
    let queryText = `
    UPDATE "koalas" 
    SET "ready_to_transfer" = $1 
    WHERE "id" = $2; 
    `
    console.log(`Success connecting. koalaId = ${koalaId}, newStatus = ${newStatus}`)

    // connect with db
    pool.query(queryText, queryParams)
        .then((response) => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log(error)
            res.sendStatus(500)
        })
})


// DELETE

module.exports = router;