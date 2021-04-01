import {Router, Request, Response} from 'express';
import {UserRouter} from './users/routes/user.router';

const router: Router = Router();

router.use('/v0/', UserRouter);

export const IndexRouter: Router = router;
