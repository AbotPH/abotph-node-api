import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import Routes from './routes/index';
import logger from '~logger';
import morganLogger from './middlewares/morganLogger';

require('dotenv-safe').config();

const { API_PORT } = process.env;
const app = express();

app.use(morganLogger);
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(API_PORT, () => {
  logger.info(`App running at ${API_PORT}`);
});

Routes(app);

export default app;
