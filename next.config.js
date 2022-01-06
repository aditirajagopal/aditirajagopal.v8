const plasmic = require("@plasmicapp/loader/next");

const withPlasmic = plasmic({
  projects: ["5Xs5TeWC1PCRPBorm9sVyK"], // An array of project ids.
});

module.exports = withPlasmic({
  // Your NextJS config.
  target: "serverless",
});
