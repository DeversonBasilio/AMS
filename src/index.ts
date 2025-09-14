import express, {Application, Request, Response, NextFunction} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import * as dotenv from 'dotenv'
import Router from './routes';
import { errorHandler } from './middleware/errorHandling';
const db = require('./database/models');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(Router);
app.use('/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
        url: '/swagger.json'
      }
    }));
app.use(errorHandler);

const startServer = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Database connected successfully');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

startServer();

export default app;
