const express = require('express');
const router = express.Router();
const komikController = require('../controller/komikController');

router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);
router.post('/komik', komikController.createKomik);
router.put('/komik/:id', komikController.updateKomik);
router.delete('/komik/:id', komikController.deleteKomik);

module.exports = router;

// menambahkan file api.js untuk mengatur rute API untuk operasi CRUD pada model Komik dengan menggunakan Express Router dan menghubungkannya ke controller komikController.