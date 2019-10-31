const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { countries } = require('./data');

const app = express();
// const countries = [
//     "Afghanistan",
//     "Albania",
//     "Algeria",
//     "Andorra",
//     "Angola",
//     "Argentina",
//     "Armenia",
//     "Aruba",
//     "Australia",
//     "Austria",
//     "Azerbaijan"
// ];

app.use(bodyParser());
app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.post('/countries', (req, res) => {
    // console.log(req.body.params);
    const { input, options } = req.body.params;

    const data = options.filter(
        item => {
            if (item.toLowerCase().indexOf(input) === 0) return item;
        }
    );
    // if (data.length === 0) { data.push(message) }
    res.send(data);
});




app.listen(4000, () => console.log('port 4000'));
