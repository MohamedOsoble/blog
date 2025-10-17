require("dotenv").config();

const passport = require("passport");
const { validPassword } = require("./passwordUtils");
const { PrismaClient } = require("../generated/prisma");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const { Prisma } = require("@prisma/client");
const LocalStrategy = require("passport-local").Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

// Instantiate Prisma Client & Load jwt options
const prisma = new PrismaClient();
const JWTOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

async function localVerifyCallback(username, password, done) {
  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
    });
    if (!user) {
      return done(null, false);
    }

    const isValid = validPassword(password, user.hash, user.salt);
    if (isValid) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (err) {
    return done(err);
  }
}

async function jwtVerifyCallback(jwtPayload, done) {
  try {
    const user = await Prisma.user.findFirst({
      where: { id: jwtPayload.id },
    });
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}

passport.use(new LocalStrategy(localVerifyCallback));
passport.use(new JWTStrategy(JWTOptions, jwtVerifyCallback));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  let user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      posts: true,
    },
  });
  done(null, user);
});
