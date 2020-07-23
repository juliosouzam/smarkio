import { Router } from 'express';

import CommentController from '../app/controllers/CommentController';

const routes = Router();

routes.get('/', (request, response) => response.json({ me: 'Júlio César' }));

routes.get('/comments', CommentController.index);
routes.post('/comments', CommentController.store);

export default routes;
