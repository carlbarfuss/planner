const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/income', rejectUnauthenticated, (req, res) => {
   const sqlText = `SELECT * from income_streams WHERE user_id=$1`;
   pool.query(sqlText, [req.user.id])
      .then((response) => {
         res.send(response.rows)
      }).catch((error) => {
         console.log('problem in dashboard INCOME GET', error);
         res.sendStatus(500)
      })
});

router.post('/income', rejectUnauthenticated, (req,res) => {
   const sqlText = `INSERT INTO income_streams ("user_id", "income_name", "income_annual_value")
   VALUES ($1, $2, $3)`
   pool.query(sqlText, [req.user.id, req.body.name, req.body.value])
      .then( (response) => {
         res.sendStatus(201)
      }).catch ( (error) => {
         console.log("error INSERTING income stream,", error);
      })
})
//deletes an income stream from the incomes database
router.delete('/income/:id', rejectUnauthenticated, (req, res) => {
   console.log('in DELETE', req.params.id);
   const sqlText = `DELETE FROM income_streams WHERE id=$1`;
   pool.query(sqlText, [req.params.id])
    .then( (response) => {
   res.sendStatus(200)
}) .catch( (error) => {
   console.log("error DELETING income stream,", error);
})
})
//to be implemented later
router.put('/income', rejectUnauthenticated, (req, res) => {
   const sqlText = ``;
   pool.query(sqlText, [req.body.id])
   .then((response) => {
   res.sendStatus(200)
}).catch((error) => {
   console.log("error DELETING income stream,", error);
})
})

router.get('/expenses', rejectUnauthenticated, (req, res) => {
   const sqlText = `SELECT * from expenses WHERE user_id=$1`;
   pool.query(sqlText, [req.user.id])
      .then((response) => {
         console.log('expenses:', response.rows);
         res.send(response.rows)
      }).catch((error) => {
         console.log('problem in dashboard EXPENSE GET', error);
         res.sendStatus(500)
      })
});

router.post('/expenses', rejectUnauthenticated, (req, res) => {
   console.log(req.body);
   const sqlText = `INSERT INTO expenses ("user_id", "liability_name", "liability_annual_cost")
   VALUES ($1, $2, $3)`
   pool.query(sqlText, [req.user.id, req.body.name, req.body.value])
      .then((response) => {
         res.sendStatus(201)
      }).catch((error) => {
         console.log("error INSERTING expense,", error);
      })
})

router.delete('/expenses/:id', rejectUnauthenticated, (req, res) => {
   const sqlText = `DELETE FROM expenses WHERE id=$1`;
   pool.query(sqlText, [req.params.id])
      .then((response) => {
         res.sendStatus(200)
      }).catch((error) => {
         console.log("error DELETING expense,", error);
      })
})

router.put('/expenses', rejectUnauthenticated, (req, res) => {
   const sqlText = ``;
   pool.query(sqlText, [req.body.id])
      .then((response) => {
         res.sendStatus(200)
      }).catch((error) => {
         console.log("error EDITING expense,", error);
      })
})

router.get('/feddata', rejectUnauthenticated, (req, res) => {
   const sqlText = `SELECT * from fed_data WHERE age_min <= $1 AND age_max >= $1;`;
   pool.query(sqlText, [req.user.age])
      .then((response) => {
         console.log(response.rows);
         res.send(response.rows)
      }).catch((error) => {
         console.log('problem in dashboard GET', error);
         res.sendStatus(500)
      })
});

router.get('/', rejectUnauthenticated, (req, res) => {
   const sqlText = `SELECT * FROM "user" 
   JOIN income_streams ON income_streams.user_id = "user".id
   JOIN expenses ON expenses.user_id = "user".id
   WHERE "user".id=$1;`;
   pool.query(sqlText, [req.user.id])
      .then((response) => {
         console.log(response.rows);
         res.send(response.rows)
      }).catch((error) => {
         console.log('problem in dashboard GET', error);
         res.sendStatus(500)
      })
});

router.get('/', rejectUnauthenticated, (req, res) => {
   const sqlText = `SELECT * FROM "user" 
   JOIN income_streams ON income_streams.user_id = "user".id
   JOIN expenses ON expenses.user_id = "user".id
   WHERE "user".id=$1;`;
   pool.query(sqlText, [req.user.id])
      .then((response) => {
         console.log(response.rows);
         res.send(response.rows)
      }).catch((error) => {
         console.log('problem in dashboard GET', error);
         res.sendStatus(500)
      })
});


router.get('/', rejectUnauthenticated, (req, res) => {
   const sqlText = `SELECT * FROM "user" 
   JOIN income_streams ON income_streams.user_id = "user".id
   JOIN expenses ON expenses.user_id = "user".id
   WHERE "user".id=$1;`;
   pool.query(sqlText, [req.user.id])
   .then( (response) => {
      console.log(response.rows);
      res.send(response.rows)
   }).catch( (error) => {
      console.log('problem in dashboard GET', error);
      res.sendStatus(500)
   })
});




module.exports = router;
