require("dotenv").config();
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { PrismaClient } = require("../generated/prisma");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const validPassword = require("../lib/utils").validPassword;

// Instantiate Prisma Client & Load jwt options
const Prisma = new PrismaClient();
const JWTOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

// Local Strategy for login
passport.use(
  new LocalStrategy(async function verifyCallback(username, password, done) {
    try {
      console.log("Loading local strategy");
      const user = await Prisma.user.findUnique({
        where: { username: username },
      });
      if (!user) {
        return done(null, false);
      }

      const isValid = validPassword(password, user.hash, user.salt);
      if (isValid) {
        console.log(user);
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err);
    }
  })
);

// JWT Strategy for auth

passport.use(
  new JwtStrategy(JWTOptions, async function (jwt_payload, done) {
    return await Prisma.user
      .findFirst({
        where: { id: jwt_payload.sub },
      })
      .then((user) => {
        return done(null, user);
      })
      .catch((err) => {
        return done(err);
      });
  })
);
