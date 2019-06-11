if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  PORT: process.env.PORT,
  IS_PROD: process.env.NODE_ENV === "production"
};
