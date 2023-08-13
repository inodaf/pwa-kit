#!/bin/bash

# Update all dependencies to their latest version
# and commit the changes.

export BRANCH_NAME="update-dev-deps-`date +%s`"

setup() {
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
  # TODO: Remove the --latest option when not in template.
  pnpm up --prod --latest
  pnpm up --dev --latest
}

commit() {
  if [[ -n "$(git status -s)" ]]; then
    git add .
    git commit -m "chore(deps): update dev packages"
    git push origin $BRANCH_NAME
  else
    exit 0
  fi
}

if [[ -z $GITHUB_ACTIONS ]]; then 
  work
else
  setup && work && commit
fi;
