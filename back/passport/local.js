const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const { User } = require("../models");
const bcrypt = require("bcrypt");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      (email, password, done) => {
        try {
          // db에 이메일이 존재하는지 검사
          const user = await User.findOne({
            where: { email: email },
          });
          if (!user) {
            // passport에서는 res.send()처럼 전송해주지 않고,
            // done을 이용해 판단을 해줄뿐
            // done(서버에러, 성공/실패, 클라이언트에러)
            // 서버에러 : 발생시 catch문으로 이동
            // 클라이언트에러 : 사용자측에서 발생된 에러
            return done(null, false, { reason: "존재하지 않는 이메일!" });
          }
          // 입력된 비밀번호와 db에 저장된 비밀번호를 비교
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            // 성공
            return done(null, user);
          }
          // 실패
          return done(null, false, { reason: "비밀번호가 틀림" });
        } catch (err) {
          console.log(err);
          return done(err);
        }
      }
    )
  );
};
