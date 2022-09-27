# Prograbber

A simple script to grab a project from a repo, set up some default git hooks, and
install the project's dependencies.

It also allows me to set up a new branch with the correct name and ensures that
the branch is up to date with the remote.

## This is a local package for local people, there's nothing for you here

Feel free to use this package if you like, however it was built for my use only
and I don't guarantee that it will work for you.

## Installation

```bash
yarn install -g @foxleigh81/prograbber
```

## Usage

```bash
prograbber # Will prompt for the repo
```

## Options

```bash
prograbber <repo> # Will grab the project from the repo
prograbber <repo> <branch> # Will grab the project from the repo and set the branch
prograbber -c <branch> # Will checkout a branch from the current repo
prograbber -n <branch> # Will create a new branch from the currently checked out branch
```
