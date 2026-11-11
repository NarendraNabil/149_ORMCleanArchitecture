const db = require('../models'); // mengimpor model-model Sequelize dari direktori models untuk digunakan dalam fungsi-fungsi CRUD.

async function getAllKomik(req, res) { // menampilkan semua data komik dari database dengan menggunakan Sequelize dan mengirimkannya sebagai respons JSON.
  try {
    const komik = await db.Komik.findAll();
    res.status(200).json(komik);
  } catch (err) {
    console.error('Error fetching komik:', err.message);
    res.status(500).json({ error: 'Failed to fetch komik' });
  }
}

async function getKomikById(req, res) { // menampilkan data komik berdasarkan ID dari database dengan menggunakan Sequelize dan mengirimkannya sebagai respons JSON.
  const { id } = req.params;
  try {
    const komik = await db.Komik.findByPk(id);
    if (!komik) {
      return res.status(404).json({ error: 'Komik not found' });
    }
    res.status(200).json(komik);
  } catch (err) {
    console.error('Error fetching komik by ID:', err.message);
    res.status(500).json({ error: 'Failed to fetch komik by ID' });
  }
}

async function createKomik(req, res) { // menambahkan data komik baru ke database dengan menggunakan Sequelize dan mengirimkan data komik yang baru dibuat sebagai respons JSON.
  const { title, description, author } = req.body;
  try {
    const newKomik = await db.Komik.create({ title, description, author });
    res.status(201).json(newKomik);
  } catch (err) {
    console.error('Error creating komik:', err.message);
    res.status(500).json({ error: 'Failed to create komik' });
  }
}

async function updateKomik(req, res) { // memperbarui data komik yang ada di database berdasarkan ID dengan menggunakan Sequelize dan mengirimkan data komik yang diperbarui sebagai respons JSON.
  const { id } = req.params;
  const { title, description, author } = req.body;
  try {
    const komik = await db.Komik.findByPk(id);
    if (!komik) {
      return res.status(404).json({ error: 'Komik not found' });
    }
    komik.title = title;
    komik.description = description;
    komik.author = author;
    await komik.save();

    res.status(200).json(komik);
  } catch (err) {
    console.error('Error updating komik:', err.message);
    res.status(500).json({ error: 'Failed to update komik' });
  }
}

async function deleteKomik(req, res) { // menghapus data komik dari database berdasarkan ID dengan menggunakan Sequelize dan mengirimkan pesan sukses sebagai respons JSON.
  const { id } = req.params;
  try {
    const komik = await db.Komik.findByPk(id);
    if (!komik) {
      return res.status(404).json({ error: 'Komik not found' });
    }
    await komik.destroy();
    res.status(200).json({ message: 'Komik deleted successfully' });
  } catch (err) {
    console.error('Error deleting komik:', err.message);
    res.status(500).json({ error: 'Failed to delete komik' });
  }
}

module.exports = { // mengekspor fungsi-fungsi CRUD untuk digunakan di tempat lain dalam aplikasi.
  getAllKomik,
  getKomikById,
  createKomik,
  updateKomik,
  deleteKomik
};