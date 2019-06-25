#!/bin/sh
#
# Automatically adds Jira key to commit message
# https://gist.github.com/wingleung/1b6efce388b81f5554ca

if [ -z "$BRANCHES_TO_SKIP" ]; then
  BRANCHES_TO_SKIP=(master develop)
fi

BRANCH_NAME=$(git symbolic-ref --short HEAD)
BRANCH_NAME="${BRANCH_NAME##*/}"
BRANCH_EXCLUDED=$(printf "%s\n" "${BRANCHES_TO_SKIP[@]}" | grep -c "^$BRANCH_NAME$")
BRANCH_JIRA_KEY=$(echo $BRANCH_NAME | grep -E -o '^([A-Z]+-[0-9]+)')

if ! [[ $BRANCH_EXCLUDED -eq 1 ]] && ! [[ $(cat "$1") == "$BRANCH_JIRA_KEY"* ]] && ! [ -z "$BRANCH_JIRA_KEY" ]; then
  echo "$BRANCH_JIRA_KEY $(cat "${1}")" > "$1"
fi
