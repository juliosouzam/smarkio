import Comment from '../models/Comment';

class CommentController {
  async index(request, response) {
    const comments = await Comment.findAll();

    return response.json(comments);
  }

  async store(request, response) {
    const { comment } = request.body;

    const commentCreated = await Comment.create({ comment });

    return response.json(commentCreated);
  }
}

export default new CommentController();
