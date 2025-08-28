import express, {Application, Request, Response, NextFunction} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import * as dotenv from 'dotenv'
import Router from './routes';
import { errorHandler } from './middleware/errorHandling';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const PORT = process.env.PORT;
const app: Application = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', Router);
app.use('/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
        url: '/swagger.json'
      }
    }));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
