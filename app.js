//======================================================
//IMPORT MODULES
//======================================================
var express         = require("express"),
    app             = express(),
    helmet          = require("helmet"),
    compression     = require('compression');

//======================================================
//UTILIZE IMPORTED FUNCTIONS
//======================================================
app.use(compression());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(helmet());

//======================================================
//MOUNT TO NODEJS SERVER 
//======================================================
var server = require('http').Server(app);

//======================================================
//UTILIZING ROUTES
//======================================================
app.get('/', function (req, res) {
  res.render("main/index");
});

//======================================================
//INITIATE NODEJS TO START LISTENING REQUEST
//======================================================
server.listen(process.env.PORT);


