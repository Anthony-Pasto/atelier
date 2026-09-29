const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.render('pages/contacts', { title: 'Contacts' }));
router.post('/', (req, res) => {
  console.log(req.body);
  res.render('pages/contacts', { title: 'Contacts', confirmation: 'Formulaire envoyé !' });
});
module.exports = router;
