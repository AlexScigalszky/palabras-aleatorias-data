# palabras-aleatorias-data

This package have a set of datasets of random words, animals, colors, jokes, onomatopeias and types.

This repository is a part of a complete package called "palabras-aleatorias"

## How to use

```javascript
import { words, animals,colors, onomatopeias, types, jokes } from 'palabras-aleatorias-data';

const objectsAvailables = {
    words: words.length,
    animals: animals.length,
    colors: colors.length,
    jokes: jokes.length,
    onomatopeias: onomatopeias.length,
    types: types.length
};

console.log(objectsAvailables);
```