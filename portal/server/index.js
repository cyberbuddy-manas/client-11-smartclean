let express = require('express');
let app = express();
const mongoose = require("mongoose");

const ActiveBills = require('./models/ActiveBills');

require("dotenv").config();

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// const newBill = new NewBill({
//     bookingDate: "12-02-2023",
//     deliveryDate: "14-02-2023",
//     name: "Manas Gupta",
//     contact: 7719665123,
//     address: "A-542/1, Ranjit Avenue, Amritsar",
//     productName: ["2 Jackets", "3 Kurtas", "1 Shoes"]
// });

// newBill.save().then(
//     () => console.log("One entry added"),
//     (err) => console.log(err)
// );

app.get('/active', (req, res) => {
    ActiveBills.find({}, (err, found) => {
        if (!err) {
            res.send(found);
        }
        console.log(err);
        res.send("Some error occured!")
    }).catch(err => console.log("Error occured, " + err));
});

app.use('/', (req, res) => {
    res.status(200).send({
        status: 200,
        message: 'Welcome to this API',
        routes: {
            activeBills: '/active',
            archivedBills: '/archived'
        }
    })
})

let PORT = process.env.PORT || 5500;

app.listen(PORT, () => { console.log(`listening on port ${PORT}`, `http://localhost:${PORT}`) });