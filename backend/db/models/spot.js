'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // ONE-TO-MANY (2x)
      Spot.belongsTo(models.User,       { foreignKey: 'ownerId', as: 'Owner', onDelete: 'CASCADE' });
      Spot.hasMany(models.SpotImage,    { foreignKey: 'spotId', onDelete: 'CASCADE' });
      Spot.hasMany(models.Review,       { foreignKey: 'spotId' });
      Spot.hasMany(models.Booking,      { foreignKey: 'spotId' });

    }
  }
  // MANY-TO-MANY (2x)
  // Spot.belongsToMany(models.User,   { through:    models.Review,
  //                                     foreignKey: 'spotId',
  //                                     otherKey:   'userId' });

  // Spot.belongsToMany(models.User,   { through:    models.Booking,
  //                                     foreignKey: 'spotId',
  //                                     otherKey:   'userId',
  //                                     onDelete:   'CASCADE' });

  //  static async createSpot ({ address, city, state, country, lat, lng, name, description, price }) {
  //   const spot = await Spot.create({
  //     address,
  //     city,
  //     state,
  //     country,
  //     lat,
  //     lng,
  //     name,
  //     description,
  //     price
  //   });
  //   return await Spot.findByPk(spot.id)
  //  }
  // }



  Spot.init({
    ownerId: {
      type: DataTypes.INTEGER
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1, 30]
      }
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1, 30]
      }
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1, 30]
      }
    },

    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1, 30]
      }
    },

    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },

    lng: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1, 30]
      }
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1, 256]
      }
    },

    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
  }
  }, {

    sequelize,
    modelName: 'Spot',
  });

  return Spot;
};
