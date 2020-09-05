const express = require('express');
//modulo para las rutas
const path = require('path');
const exphbs = require('express-handlebars');
const methOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');





//Initiliazations
const app = express();
const {database} = require('./database');
const { response } = require('express');



//Settings
app.set('port', process.env.PORT||3000);
//app.set('views',path.join(__dirname,'views'));
/*app.engine('.hbs',exphbs({
    defaultLayout:'index',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials/about'),
    extname: '.hbs'

}));*/

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

//Middlewares

app.use(express.urlencoded({extended: false}));
app.use(methOverride('_method'));
app.use(express.json());



app.use( session({ secret: 'secret', resave: true, saveUninitialized: true }) );
app.use(flash());



//Global Variables

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/finca'));
app.use(require('./routes/empacadora'));
app.use(require('./routes/cinta'));
app.use(require('./routes/caja'));


//Static Files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname+'/public'));

//Server is listenning
app.listen(app.get('port'), () =>{
    console.log('Server on port',app.get('port'));
});