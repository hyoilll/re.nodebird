const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  // Comment 정보 저장
  // 매개변수의 Comment -> MySQL에서는 Comment로 됨
  const Comment = sequelize.define(
    "Comment",
    {
      // Comment 정보
      // id는 MySQL에서 자동으로 넣어주기에 안넣어도 됨
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // UserId
      // PostId
    },
    {
      // Comment 모델에 대한 셋팅
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 한글 저장 + 이모티콘
    }
  );
  Comment.associate = (db) => {
    // belongsTo : 나를 소유한 UserId, PostId 컬럼을 각각 새롭게 생성해줌
    // 유저에게 속해있음
    db.Comment.belongsTo(db.User);
    // 댓글은 게시글에 속해있음.
    db.Comment.belongsTo(db.Post);
  };

  return Comment;
};
