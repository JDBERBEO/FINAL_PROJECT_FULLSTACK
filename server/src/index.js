/* eslint-disable no-console */
const express = require('express');
const methodOverride = require('method-override');

const app = express();

// database
require('./database/database.config');

const usersRouter = require('./routes/users.routes');
const projectsRouter = require('./routes/projects.routes');

app.use(express.json());

// Middleware
app.use(methodOverride('_method'));

// routes
app.use(usersRouter);
app.use(projectsRouter);

// TODO: crear vaariable de entorno
app.listen(3000, () => console.log('running in port 3000'));
