const messageRoute = require('express').Router();

const db = require('../db-config');

messageRoute.get('/', (req, res) => {
  db.query('SELECT * FROM message', (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.status(200).json(results);
    }
  });
});

messageRoute.get('/:id', (req, res) => {
  db.query('SELECT * FROM message WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500);
    } else if (results.length !== 1) {
      res.status(404);
    } else {
      res.status(200).json(results[0]);
    }
  });
});

messageRoute.post('/', (req, res) => {
  const message = {
    content: req.body.content,
    date: req.body.date,
  };

  db.query('INSERT INTO message (content, date) VALUES (?, ?)', [message.content, message.date], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(201).json({ ...message, id: results.insertId });
    }
  });
});

messageRoute.put('/:id', (req, res) => {
  const messageId = req.params.id;
  db.query('SELECT * FROM message WHERE id = ?', [messageId], (selectErr, results) => {
    if (selectErr) {
      res.status(500).send('Error updating the message');
    } else {
      const message = results[0];
      if (message) {
        const messageToUpdate = { ...message, ...req.body };
        db.query('UPDATE message SET ? WHERE id = ?', [messageToUpdate, messageId], (updateErr) => {
          if (updateErr) {
            console.log(updateErr);
            res.status(500).send('Error updating message');
          } else {
            res.status(200).json(messageToUpdate);
          }
        });
      }
    }
  });
});

messageRoute.delete('/:id', (req, res) => (
  db.query('DELETE FROM message WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send('Error deleting a message');
    } else if (results.affectedRows) res.status(200).send(' 🎉 Message deleted');
    else res.status(404).send('Message not found');
  })
));

module.exports = messageRoute;
