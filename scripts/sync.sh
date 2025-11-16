#!/bin/bash
# Synchronize documentation website with the sources from Github repository

usage() {
    cat << EOF
Usage: $(basename $0) [OPTIONS] <websiteDir> 

OPTIONS:
  -h, --help                  Show this help message and exit.
  -s, --sources <sourcesDir>  Path to the sources directory           

ARGUMENTS:
  websiteDir                  Path to the website root directory. 

DESCRIPTION:
  This script checks if the local zephyr-workbench documentation website source 
  is in sync with the Github repository.
  If the sources are outdated, pull the latest version then rebuild the pages
  then copy into the website directory
EOF
    exit 1
}

sources_dir="."
website_dir=""
while [[ "$#" -gt 0 ]]; do
  case $1 in
    -h | --help)
      usage
	    exit 0
      ;;
    -s | --source)
      sources_dir="$2"
      shift 2
      ;;
    *)
      website_dir="$1"
      shift
      ;;
  esac
done

if [ -z "$website_dir" ]; then
  echo "Error: Missing argument <websiteDir>, please enter the website root directory"
  usage
  exit 1
fi

# Change to the sources directory
cd "$sources_dir" || exit 2

# Github repository and branch
git_repo="https://github.com/Ac6Embedded/vscode-zephyr-workbench-docs.git"
git_branch="main"

# Fetch the latest changes
git fetch origin

# Get local and remote commit
local_commit=$(git rev-parse $git_branch)
remote_commit=$(git rev-parse origin/$git_branch)

# Temporarily stash local yarn.lock changes so they don't block pull
stashed_yarn_lock=0
if git status --porcelain yarn.lock | grep -q .; then
  echo "Detected local changes in yarn.lock, stashing them temporarily for sync..."
  git stash push -m "sync.sh auto-stash yarn.lock" yarn.lock >/dev/null 2>&1 || true
  stashed_yarn_lock=1
fi

# If commits diff, pull the latest commits then rebuild the sources
if [[ "$local_commit" != "$remote_commit" ]]; then
  git pull origin $git_branch

  # Rebuild documentation into ./build (using NodeJS) 
  rm -rf build
  npm run build

  # Copy sources into website directory
  tar cf - build/ | ( cd $website_dir; tar -x --strip-components=1 -f - )
fi

# Restore yarn.lock changes if we stashed them
if [[ "$stashed_yarn_lock" -eq 1 ]]; then
  echo "Restoring previous yarn.lock changes from stash (if still applicable)..."
  git stash pop >/dev/null 2>&1 || echo "Warning: could not automatically reapply yarn.lock changes."
fi
