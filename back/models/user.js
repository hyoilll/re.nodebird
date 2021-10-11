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

  // table 간의 관계를 나타낼때 적는 곳
  User.associate = (db) => {
    // 사람이 게시글 여러개 작성할 수 있음
    db.User.hasMany(db.Post); // 1 : N
    // 사람이 코멘트 여러개를 작성할 수 있음
    db.User.hasMany(db.Comment); // 1 : N
    // 한명의 사람은 여러개의 게시글에 좋아요를 누를 수 있음
    // 하나의 게시글은 여러명의 사람으로부터 좋아요를 받을 수 있음
    // through : N : M관계에서 생기는 중간테이블의 이름
    // as : User-Post사이에서 Liked관계를 나타냄
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" }); // N : M
    // foreignKey : N : M관계에서는 A, B테이블의 관계를 잇는 중간 테이블이 생성되는데
    // 중간 테이블의 속성은 Aid, Bid로 구성이 된다.
    // 그렇기 때문에 user - post가 N : M관계로 조인할때는
    // userId, postId로 구분되기 때문에 따로 foreignKey를 지정할 필요없지만,
    // user-user끼리의 조인일때는 userId가 겹치기 때문에
    // foreignKey를 이용하여 컬럼 명을 변경해준다.
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId",
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollowerId",
    });
  };

  return User;
};
