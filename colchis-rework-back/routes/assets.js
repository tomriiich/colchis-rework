const assetsRoute = require('express').Router();

const db = require('../db-config');

assetsRoute.get('/', (req, res) => {
  db.query('SELECT * FROM assets', (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.status(200).json(results);
    }
  });
});

assetsRoute.get('/:id', (req, res) => {
  db.query('SELECT * FROM assets WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500);
    } else if (results.length !== 1) {
      res.status(404);
    } else {
      res.status(200).json(results[0]);
    }
  });
});

assetsRoute.post('/', (req, res) => {
  const assets = {
    name: req.body.name,
    number: req.body.number,
    worth: req.body.worth,
  };

  db.query('INSERT INTO assets (name, number, worth) VALUES (?, ?, ?)', [assets.name, assets.number, assets.worth], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(201).json({ ...assets, id: results.insertId });
    }
  });
});

assetsRoute.put('/:id', (req, res) => {
  const assetsId = req.params.id;
  db.query('SELECT * FROM assets WHERE id = ?', [assetsId], (selectErr, results) => {
    if (selectErr) {
      res.status(500).send('Error updating the asset');
    } else {
      const assets = results[0];
      if (assets) {
        const assetsToUpdate = { ...assets, ...req.body };
        db.query('UPDATE assets SET ? WHERE id = ?', [assetsToUpdate, assetsId], (updateErr) => {
          if (updateErr) {
            console.log(updateErr);
            res.status(500).send('Error updating asset');
          } else {
            res.status(200).json(assetsToUpdate);
          }
        });
      }
    }
  });
});

assetsRoute.delete('/:id', (req, res) => (
  db.query('DELETE FROM assets WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send('Error deleting an asset');
    } else if (results.affectedRows) res.status(200).send(' 🎉 Asset deleted');
    else res.status(404).send('Asset not found');
  })
));

module.exports = assetsRoute;
