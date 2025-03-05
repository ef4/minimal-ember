"use strict";

module.exports = {
  singleQuote: true,
  plugins: ["prettier-plugin-ember-template-tag"],
  overrides: [
    {
      files: "*.{gts,gjs}",
      options: {
        parser: "ember-template-tag",
      },
    },
  ],
};
