import express from 'express';
import bodyParser from 'body-parser';
import routes from '../serve/routes/routes.js';
//import cors from 'cors'

const app = express();
const port = process.env.PORT || 5000;

app.use(routes);
//app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port,()=> console.log(`Listen on port:${port}`));