const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "raso2",
        mongodb_password: "raso1234",
        mongodb_clustername: "cluster0.avvboue",
        mongodb_database: "test"
      }
    };
  }
  return {
    env: {
      mongodb_username: "raso2",
      mongodb_password: "raso1234",
      mongodb_clustername: "cluster0.avvboue",
      mongodb_database: "test"
    }
  };
};
// raso1234
// mongodb+srv://<username>:<password>@cluster0.avvboue.mongodb.net/?retryWrites=true&w=majority