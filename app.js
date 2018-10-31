//======================================================
//IMPORT MODULES
//======================================================
var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    helmet          = require("helmet"),
    compression     = require('compression');

//======================================================
//UTILIZE IMPORTED FUNCTIONS
//======================================================
app.use(compression());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
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


