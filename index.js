// require shit
const express = require('express');
const app = express();
const path = require('path');

// hosting locally
app.use(express.json());
app.use(express.static(path.join(__dirname, 'app')));

const PORT = 0; // so nothing conflicts :D
const server = app.listen(PORT, () => {
    const REALPORT = server.address().port; // so that it displays correctly; if you remove this thinking it's useless i will bomb you (/j)
    console.log(`thanks for locally hosting "a personal website from sabio"!`); // thanks <3
    console.log(`feel free to star this repository. when i mean feel free, i actually mean i'm forcing you to.\n`); // it's true!
    console.log(`the website is now running on http://localhost:${REALPORT}, congratulations!`) // <- yes
});