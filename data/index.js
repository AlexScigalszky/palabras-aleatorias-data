const dbRouter = require('./data/db.js');
const animalsRouter = require('./data/animals.js');
const colorsRouter = require('./data/colors.js');
const jokesRouter = require('./data/jokes.js');
const onomatopeiasRouter = require('./data/onomatopeias.js');
const typesRouter = require('./data/types.js');



module.exports =
    Object.assign({},
        dbRouter,
        animalsRouter,
        colorsRouter,
        jokesRouter,
        onomatopeiasRouter,
        typesRouter
    );
