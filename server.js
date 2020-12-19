require('./models/db');

const express = require('express');
const employeeController = require('./controlles/employeeController');
const roleController = require('./controlles/roleController');
const userController = require('./controlles/userController');
const compteController = require('./controlles/compteController');
const catMController = require('./controlles/catMController');
const catPController = require('./controlles/catPController');
const matController = require('./controlles/matController');
const prodController = require('./controlles/prodController');
const cofeeController = require('./controlles/cofeeController');
const path = require('path');
let cors = require('cors');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());
app.use(cors());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/employee',employeeController);
app.use('/role',roleController);
app.use('/user',userController);
app.use('/compte',compteController);
app.use('/catM',catMController);
app.use('/catP',catPController);
app.use('/mat',matController);
app.use('/prod',prodController);
app.use('/cofee',cofeeController)