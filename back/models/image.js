const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  // Image 정보 저장
  // 매개변수의 Image -> MySQL에서는 Image로 됨
  const Image = sequelize.define(
    "Image",
    {
      // Image 정보
      // id는 MySQL에서 자동으로 넣어주기에 안넣어도 됨
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      // PostId
    },
    {
      // Image 모델에 대한 셋팅
      charset: "utf8",
      collate: "utf8_general_ci", // 한글 저장
    }
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };

  return Image;
};
