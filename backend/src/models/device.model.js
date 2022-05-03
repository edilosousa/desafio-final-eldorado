module.exports = (sequelize, Sequelize) => {
  const Device = sequelize.define(
    "DEVICE",
    {
      DEV_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      DEV_NAME: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      DEV_COLOR: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      DEV_PARTNUMBER: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      DEV_FK_ID_CATEGORY: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Device;
};
