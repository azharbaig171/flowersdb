const express = require("express");
const router = express.Router();
var db = require("../database")

router.get('/', (req, res) => {
    var sql = "select * from FLOWERS"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json ({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
}),

router.get('/:flower', (req, res) => {
  var sql = 
  "SELECT * FROM FLOWERS WHERE COMNAME = ?"
  var params = [req.params.flower]
  db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":row
      })
    });
}),

router.get('/:flower/sightings', (req, res) => {
    var sql = 
    "SELECT * FROM SIGHTINGS WHERE NAME = ? ORDER BY SIGHTED DESC"
    var params = [req.params.flower]
    db.all(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
}),

module.exports = router;