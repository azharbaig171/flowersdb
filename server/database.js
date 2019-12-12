var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database('./data/flowers2019.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the flowers database.');
});

module.exports = db