#!/bin/bash

# Update "devDependencies" to their latest version
# and commits the changes.

BRANCH_NAME="update-dev-deps-`date +%s`"

setup() {
  if [[ -z $GITHUB_ACTIONS ]]; then exit; fi;

  git config user.email "<>"
  git config user.name "GitHub Actions Bot"

  if which pnpm; then
    git checkout -b $BRANCH_NAME
  else
    echo "Please install 'pnpm' to proceed."
    exit
  fi
}

work() {
  pnpm up --dev --latest
}

commit() {
  git add .
  git commit -m "chore(pkg): update dev dependencies"
  git push origin $BRANCH_NAME
}

setup && work && commit