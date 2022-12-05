module.exports = (sequelize, Sequelize) => {
  const Transaction = sequelize.define("transaction", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email:{
      type:Sequelize.STRING,
      allowNull:false
    },
    country: {
      type:Sequelize.STRING,
      allowNull:false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    statusComplete: {
      type: Sequelize.BOOLEAN,
    }
  });

  return Transaction;
};