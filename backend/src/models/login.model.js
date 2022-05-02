module.exports = (sequelize, Sequelize) => {
  const Login = sequelize.define(
    "LOGIN",
    {
      LOG_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      LOG_NOME: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      LOG_EMAIL: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      LOG_PASSWORD: {
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
  return Login;
};
