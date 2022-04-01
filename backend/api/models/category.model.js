module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define(
    "CATEGORY",
    {
      CAT_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      CAT_NOME: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Category;
};
