import { Router } from 'express';
import peopleRouter from './people';
import blogsRouter from './blogs';
import tagsRouter from './tags';

let router = Router();

router.use('/people', peopleRouter);
router.use('/blogs', blogsRouter);
router.use('/tags', tagsRouter);


export default router;