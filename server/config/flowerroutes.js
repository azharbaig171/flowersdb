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

router.patch("/:flower/update", (req, res, next) => {
  var data = {
      genus: req.body.genus,
      species: req.body.species,
      comname: req.body.comname
  }
  db.run(
      `UPDATE FLOWERS SET
        genus = COALESCE(?,genus), 
        species = COALESCE(?,species), 
        comname = COALESCE(?,comname) 
        WHERE COMNAME = ?`,
      [data.genus, data.species, data.comname, req.params.flower],
      function (err, result) {
          if (err){
              res.status(400).json({"error": res.message})
              return;
          }
          res.json({
              message: "success",
              data: data,
              changes: this.changes
          })
  });
})

module.exports = router;