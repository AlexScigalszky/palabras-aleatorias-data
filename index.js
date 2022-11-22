import { data as wordsData } from './data/db.js';
import { data as animalsData } from './data/animals.js';
import { data as colorsData } from './data/colors.js';
import { data as jokesData } from './data/jokes.js';
import { data as onomatopeiasData } from './data/onomatopeias.js';
import { data as typesData } from './data/types.js';

const words = wordsData.Palabras;
const animals = animalsData.animals;
const colors = colorsData.colors;
const jokes = jokesData['spanish-jokes'];
const onomatopeias = onomatopeiasData.onomatopeias;
const types = typesData.types;

export {
    words,
    animals,
    colors,
    jokes,
    onomatopeias,
    types
};