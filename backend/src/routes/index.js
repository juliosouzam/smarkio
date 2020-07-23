import { Router } from 'express';

import CommentController from '../app/controllers/CommentController';
import StreamController from '../app/controllers/StreamController';

const routes = Router();

routes.get('/', (request, response) => response.json({ me: 'Júlio César' }));

routes.get('/comments', CommentController.index);
routes.post('/comments', CommentController.store);

routes.get('/stream/:comment_id', StreamController.show);

export default routes;
