import Sequelize, { Model } from 'sequelize';

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        comment: Sequelize.TEXT,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Comment;
