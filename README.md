# Preact Embeddable Widget

## Features
* Typescript
* Smaller bundle size (Preact vs React)
* Package fonts, CSS, json, transpiled javascript into one .js library bundle (via webpack)
* Semantic versioning release managment
* Widget can be mounted in targeted selector -- TODO
* No conflicting CSS between the host and widget -- TODO
* Tests -- TODO

## Getting started
### Install dependencies
`yarn`

### Start hot-reload development server
`yarn start`


## Building for production

Run `yarn build` to build the widget bundle for production

## Releasing a new production version of the widget

Run `yarn build:release` and follow the interactive steps to tag a new version of your widget

## Use Cases
* Your widget needs to be easily added to websites with a `<script>` tag
* Configurable at runtime (publishable keys and other config)
* You find that an iframe is not flexible and feature rich enough for your needs

___
> Inspired by [https://github.com/seriousben/embeddable-react-widget](https://github.com/seriousben/embeddable-react-widget)
