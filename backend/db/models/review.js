'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // ONE-TO-MANY (3x)
      Review.belongsTo(models.User,           { foreignKey: 'userId',   onDelete: 'CASCADE' });
      Review.belongsTo(models.Spot,           { foreignKey: 'spotId',   onDelete: 'CASCADE' });
      Review.hasMany(models.ReviewImage,      { foreignKey: 'reviewId', onDelete: 'CASCADE' });
    }
  }

  Review.init({
    spotId: {
      type: DataTypes.INTEGER
    },

    userId: {
      type: DataTypes.INTEGER
    },

    review: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 256]
      }
    },

    stars: {
      type: DataTypes.INTEGER
    }

  }, {

    sequelize,
    modelName: 'Review',
  });

  return Review;
};
