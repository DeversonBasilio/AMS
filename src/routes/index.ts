
import express, {Request, Response} from 'express';
import ApiController from '../controllers/apiController';

const router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
  const apiController = new ApiController();
  const response = await apiController.getMessage();
  res.send(response);
});

export default router;
