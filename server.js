
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'


import postRoutes from './routes/products.js';
import userRouter from "./routes/user.js";
import ComplainceRouter from "./routes/Complaince.js";
import rfqRouter from "./routes/RFQ_Manager.js";



import multer from 'multer'
import path from 'path'
import csvModel from './models/products.js'
import csv from 'csvtojson'

dotenv.config()


const app = express();

app.use(express.json({ limit: '30mb', extended: true }))

app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/products', postRoutes);
app.use('/complaince', ComplainceRouter);
app.use('/rfqmanager', rfqRouter);

app.use("/user", userRouter);
// app.get('/', (req, res) => res.status(200).send('Hello world'))
app.get('/favicon.ico', (req, res) => res.status(200).send('Hello favicon'))

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var uploads = multer({ storage: storage });

const PORT = process.env.PORT || 5005
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

//static folder
// app.use(express.static(path.resolve(__dirname, 'public')));

//default pageload
app.get('/add', (req, res) => {
    csvModel.find((err, data) => {
        if (err) {
            console.log(err);
        } else {
            if (data != '') {
                res.render('demo', { data: data });
            } else {
                res.render('demo', { data: '' });
            }
        }
    });
});

var temp;

app.post('/', uploads.single('csv'), (req, res) => {
    //convert csvfile to jsonArray   
    csv()
        .fromFile(req.file.path)
        .then((jsonObj) => {
            console.log(jsonObj);
            for (var x = 0; x < jsonObj; x++) {
                // temp = parseFloat(jsonObj[x].Test1)
                // jsonObj[x].Test1 = temp;
                // temp = parseFloat(jsonObj[x].Test2)
                // jsonObj[x].Test2 = temp;
                // temp = parseFloat(jsonObj[x].Test3)
                // jsonObj[x].Test3 = temp;
                // temp = parseFloat(jsonObj[x].Test4)
                // jsonObj[x].Test4 = temp;
                // temp = parseFloat(jsonObj[x].Final)
                // jsonObj[x].Final = temp;
            }
            csvModel.insertMany(jsonObj, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.redirect('/');
                }
            });
        });
});


if (process.env.NODE_ENV === "production") {

    app.use(express.static("client/build"))
    app.get("*"), (req, res) => {

        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    }
}
const CONNECTION_URL = "mongodb://localhost/saas_dashboard"

mongoose.connect(CONNECTION_URL, () => {
    console.log("database connected");

});
mongoose.con;

app.listen(PORT, () => console.log("Listening on port ", PORT))


// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//     .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);
