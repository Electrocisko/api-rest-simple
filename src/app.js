import express from 'express';
import configDotenv from './configs/configDotenv.js';
import recordsRouter from './routes/recordsRouter.js';
import cors from 'cors';
import __dirname from '../dirname.js';
import connection from './database/connection.js';

const app = express();
const PORT=configDotenv.app.PORT

connection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname+'/public'));

app.use('/api',recordsRouter)
app.get('/',(req,res) => {
    res.send('<h1> Pagina Home Api Rest Discos de Maiden</h1>')
})

 app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})

