const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();


router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});


router.post('/register/assets', rejectUnauthenticated, (req, res) => {
  const age = req.body.age;
  const target_age = req.body.target_age;
  const desired_income = req.body.desired_income;
  const current_savings = req.body.current_savings;
  const saved_monthly = req.body.saved_monthly
  const inflation = req.body.inflation;
  const withdrawlRate = req.body.withdrawlRate;
  const rateOfReturn = req.body.rateOfReturn;
  const SS = req.body.socialSecurity;
  const sqlText = `UPDATE "user"
    SET age=$1, retirement_age=$2, target_income=$3, savings=$4, 
    saved_monthly=$5, inflation_rate=$6, withdrawl_rate=$7, rate_of_return=$8
    WHERE id=$9;`;
  pool.query(sqlText, [age, target_age, desired_income, current_savings, 
  saved_monthly, inflation, withdrawlRate, rateOfReturn, req.user.id])
    .then((result) => {
      console.log("updated user Info:", result.rows);
      const sqlText2 = `INSERT INTO "income_streams" (user_id, income_name, income_annual_value)
                        VALUES($1, $2, $3)`
      pool.query(sqlText2, [req.user.id, 'Social Security', SS])
        .then( (result)=> {
          res.sendStatus(201)
        })//end .then
        .catch((error) => {
        console.log('error in POSTing to income_streams table,', error);
        res.sendStatus(500)
        })//end .catch
    })//end .then
    .catch((error) => {
      console.log('error in setting User Assets', error);
      res.sendStatus(500)
    });//end .catch
});//end .post

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const email = req.body.email
  const queryText = `INSERT INTO "user" (username, password, email)
    VALUES ($1, $2, $3) RETURNING id`;
  pool
    .query(queryText, [username, password, email])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
