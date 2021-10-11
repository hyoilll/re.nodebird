const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  // Post 정보 저장
  // 매개변수의 Post -> MySQL에서는 post로 됨
  const Post = sequelize.define(
    "Post",
    {
      // Post 정보
      // id에서는 MySQL에서 자동으로 넣어주기에 안넣어도 됨
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      // Post 모델에 대한 셋팅
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 한글 저장 + 이모티콘
    }
  );
  Post.associate = (db) => {};

  return Post;
};
