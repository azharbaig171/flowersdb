var path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    flowerRouter = require("./flowerroutes")

module.exports.init = function () {
    //Initialize app
    var app = express();

    //body parsing middleware 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    //add a router
    app.use('/api/flowers', flowerRouter);

    //all other requests send 404'ed
    app.use(function(req, res){
        res.json({"message":"Route not found"})
    });

    return app;
};