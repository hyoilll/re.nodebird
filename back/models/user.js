const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  // 사용자 정보 저장하는 User
  // 매개변수의 User -> MySQL에서는 users로 됨
  const User = sequelize.define(
    "User",
    {
      // 사용자 정보
      // id에서는 MySQL에서 자동으로 넣어주기에 안넣어도 됨
      email: {
        // DataType : <STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME>
        type: DataTypes.STRING(30),
        allowNull: false, // 필수
        unique: true, // 고유한 값
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false, // 필수
      },
    },
    {
      // 유저 모델에 대한 셋팅
      charset: "utf8",
      collate: "utf8_general_ci", // 한글 저장
    }
  );
  User.associate = (db) => {};

  return User;
};
