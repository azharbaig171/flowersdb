// Create express app
express = require('./config/express');
var HTTP_PORT = 8080
var app = express.init();

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
