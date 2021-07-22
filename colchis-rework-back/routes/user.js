const userRoute = require('express').Router();

const db = require('../db-config');

userRoute.get('/', (req, res) => {
  db.query('SELECT * FROM user', (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.status(200).json(results);
    }
  });
});

userRoute.get('/:id', (req, res) => {
  db.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500);
    } else if (results.length !== 1) {
      res.status(404);
    } else {
      res.status(200).json(results[0]);
    }
  });
});

userRoute.post('/', (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
  };

  db.query('INSERT INTO user (name, email) VALUES (?, ?)', [user.name, user.email], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(201).json({ ...user, id: results.insertId });
    }
  });
});

userRoute.put('/:id', (req, res) => {
  const userId = req.params.id;
  db.query('SELECT * FROM user WHERE id = ?', [userId], (selectErr, results) => {
    if (selectErr) {
      res.status(500).send('Error updating the user');
    } else {
      const user = results[0];
      if (user) {
        const userToUpdate = { ...user, ...req.body };
        db.query('UPDATE user SET ? WHERE id = ?', [userToUpdate, userId], (updateErr) => {
          if (updateErr) {
            console.log(updateErr);
            res.status(500).send('Error updating user');
          } else {
            res.status(200).json(userToUpdate);
          }
        });
      }
    }
  });
});

userRoute.delete('/:id', (req, res) => (
  db.query('DELETE FROM user WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send('Error deleting a user');
    } else if (results.affectedRows) res.status(200).send(' 🎉 User deleted');
    else res.status(404).send('User not found');
  })
));

module.exports = userRoute;
