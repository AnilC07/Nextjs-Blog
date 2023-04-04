const PHASE_DEVELOPMENT_SERVER= require("next/constants");

module.exports = (phase) => {
  if (phase = PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "anilcelik075",
        mongodb_password: "ny1NVzkNhe8piLBf",
        mongodb_clusterName: "cluster0",
        mongodb_database: "contact-dev",
      },
    };
  }

  return  {
    env: {
      mongodb_username: "anilcelik075",
      mongodb_password: "ny1NVzkNhe8piLBf",
      mongodb_clusterName: "cluster0",
      mongodb_database: "contact-prod",
    },
  };
};
