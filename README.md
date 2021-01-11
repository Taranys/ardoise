# Ardoise

A Web clone of Symphytum for my personal usage and learn Rails with react

# Usage

## Pre-requisites

  - Ruby v2.7.2
  - Node v8.16.0+
  - Yarn

## First usage

In order to configure your workspace you need to run the following commands:
  - `bundle install` (install gem dependencies from Gemfile)
  - `yarn install --check-files`

Once you runs a local postgres server listening on 5432 :

- `rails db:migrate RAILS_ENV=development`

## Start server

  - `rails server`

## Run e2e tests on local

On two seperate shell: 
  - `rails server -p 5017`
  - `yarn cypress open --project ./spec`
