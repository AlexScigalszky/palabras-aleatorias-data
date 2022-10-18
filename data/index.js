const dbRouter = require('./data/db.json');
const animalsRouter = require('./data/animals.json');
const colorsRouter = require('./data/colors.json');
const jokesRouter = require('./data/jokes.json');
const onomatopeiasRouter = require('./data/onomatopeias.json');
const typesRouter = require('./data/types.json');



module.exports =
    Object.assign({},
        dbRouter,
        animalsRouter,
        colorsRouter,
        jokesRouter,
        onomatopeiasRouter,
        typesRouter
    );
