import Sequelize, { Model } from 'sequelize';

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        comment: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Comment;
