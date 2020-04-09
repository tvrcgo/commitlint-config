
module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "test", "chore"]],
    "type-case": [0],
    "scope-empty": [0],
    "scope-case": [0],
    "subject-full-stop": [0, "never"]
  }
}
