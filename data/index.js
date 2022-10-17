const dbRouter = require('./db.json');
const animalsRouter = require('./animals.json');
const colorsRouter = require('./colors.json');
const jokesRouter = require('./jokes.json');
const onomatopeiasRouter = require('./onomatopeias.json');
const typesRouter = require('./types.json');



module.exports =
    Object.assign({},
        dbRouter,
        animalsRouter,
        colorsRouter,
        jokesRouter,
        onomatopeiasRouter,
        typesRouter
    );
