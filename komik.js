module.exports = (sequelize, DataTypes) => { // menampilkan model Komik dengan menggunakan Sequelize dan DataTypes. 
  const Komik = sequelize.define("Komik", { // mendefinisikan model Komik dengan nama "Komik" dan atribut-atributnya.
    id: { // mendefinisikan atribut id sebagai primary key dengan tipe data INTEGER dan auto increment.
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: { // mendefinisikan atribut title dengan tipe data STRING.
      type: DataTypes.STRING,
    },
    description: { // mendefinisikan atribut description dengan tipe data STRING.
      type: DataTypes.STRING,
    },
    author: { // mendefinisikan atribut author dengan tipe data STRING.
      type: DataTypes.STRING,
    }
  });
  return Komik;
};