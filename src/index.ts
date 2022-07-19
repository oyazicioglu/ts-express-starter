import express from 'express';
import compression from 'compression';

const PORT = 8080;
const app = express();

app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.listen(PORT, () => {});
