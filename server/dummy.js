const Book = sequelize.define("dummy", {
   hi: {
     type: DataTypes.INTEGER,
     allowNull: true
   },
   hello: {
     type: DataTypes.STRING,
     allowNull: true
   }
});