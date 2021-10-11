module.exports = (sequelize, DataTypes) => {
  // Hashtag 정보 저장
  // 매개변수의 Hashtag -> MySQL에서는 Hashtag로 됨
  const Hashtag = sequelize.define(
    "Hashtag",
    {
      // Hashtag 정보
      // id에서는 MySQL에서 자동으로 넣어주기에 안넣어도 됨
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      // Hashtag 모델에 대한 셋팅
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 한글 저장 + 이모티콘
    }
  );
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });
  };

  return Hashtag;
};
