const { Pool, Client } = require("pg");

const connection = new Client({
  user: "postgres",
  host: "127.0.0.1",
  database: "kd",
  password: "kedar",
});
connection.connect();

module.exports = connection;
