const sequelize = require('./config/connection');
const express = require('express');
require('dotenv').config();

const path = require('path');
const helpers = require('./utils/helpers');
const session = require('express-session');
const exhbs = require('express-handlebars');
const routes = require('./routes');

const threeHours = 3 * 60 * 60 * 1000;

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'canyouguessmysecret?',
  cookie: {
    maxAge: threeHours
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exhbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
