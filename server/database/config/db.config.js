module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "February@99",
  DB: "ShopingStore",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};