require("dotenv").config();

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { JobSeeker } = require("../models");

module.exports = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const exUser = await JobSeeker.findOne({
            where: { userId: profile.id },
          });
          if (exUser) {
            // 이미 있는 경우 넘어가면됨
            done(null, profile);
          } else {
            const newUser = await JobSeeker.create({
              userId: profile.id,
              name: profile.displayName,
            });
            done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
