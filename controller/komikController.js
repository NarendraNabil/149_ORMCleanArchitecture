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

