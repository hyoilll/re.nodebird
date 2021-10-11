const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  // Post 정보 저장
  // 매개변수의 Post -> MySQL에서는 post로 됨
  const Post = sequelize.define(
    "Post",
    {
      // Post 정보
      // id는 MySQL에서 자동으로 넣어주기에 안넣어도 됨
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // UserId
      // RetewwtId
    },
    {
      // Post 모델에 대한 셋팅
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 한글 저장 + 이모티콘
    }
  );
  Post.associate = (db) => {
    // 게시글은 어떠한 User에 속해있다.
    db.Post.belongsTo(db.User);
    // 하나의 게시글에는 여러개의 댓글이 존재함
    db.Post.hasMany(db.Comment); // 1 : N
    // 하나의 게시글에는 여러개의 이미지가 존재함
    db.Post.hasMany(db.Image); // 1 : N
    // 하나의 게시글에는 여러개의 해시태그가 존재하고,
    // 하나의 해시태그에는 여러개의 게시글이 존재함.
    db.Post.belongsToMany(db.Hashtag); // N : M
    // 한개의 게시글은 여러명의 사람으로부터 좋아요를 받을 수 있고,
    // 한명의 사람은 여러개의 개시글에 좋아요를 누를 수 있음.
    // through : N : M관계에서 생기는 중간테이블의 이름
    // as : 관계 구분자/ Post-User 관계에서 Liker에 대한 관계다.
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); // N : M
    // 하나의 게시글은 여러개의 게시글을 통해 리트윗 당함
    db.Post.belongsTo(db.Post, { as: "Retweet" });
  };

  return Post;
};
