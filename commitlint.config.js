/*
  Commit message structure (conventional-commits):

    <type>[optional scope]: <description>

    [optional body]

    [optional footer]

  Commit types:

    API or UI relevant changes
      - feat: adds or removes a new feature to the API or UI
      - fix: fixes a API or UI bug of a preceded feat commit

    Code restructuring
      - refactor: rewrites/restructures your code, however do not change any API or UI behaviour
      - perf: special refactor commits, that improve performance

    style: do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    test: add missing tests or correcting existing tests
    docs: affects documentation only
    build: affects build components like build tool, ci pipeline, dependencies, project version, etc
    ci: affects continuous integration (CI) configuration or scripts
    chore: other changes that don't modify src or test files
    revert: reverts a previous commit

  For more details, check the conventional commits full specification
    - https://www.conventionalcommits.org/en/v1.0.0/
*/

export default { extends: ["@commitlint/config-conventional"] };
