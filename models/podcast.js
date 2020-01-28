module.exports = (sequelize, DataTypes) => {
  const podcast = sequelize.define('podcast', {
    title: DataTypes.STRING,
    rss: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    email:  {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    satoshis: {
      type: DataTypes.INTEGER,
      validate: {
        async isPositive(satoshis) {
          if ((satoshis) < 0) {
            throw new Error('Not enough funds.')
          }
        }
      }
    },
    emailVerified: DataTypes.BOOLEAN,
    token: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.TEXT,
    image:  {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    userId: DataTypes.INTEGER,
    website:  {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    itunesId: DataTypes.INTEGER,
    guestShare: DataTypes.FLOAT
  }, {
  });


  return podcast;
};
