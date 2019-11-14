# juv

[![CircleCI](https://circleci.com/gh/easa/juv.svg?style=svg&circle-token=f7602f571cb7e13ba4dfac0b89859b4ee2fe89a8)](https://circleci.com/gh/easa/juv)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/easa/juv?color=black&label=github%20repo)](https://github.com/easa/juv)
[![GitHub](https://img.shields.io/github/license/easa/juv)](#)
[![npm](https://img.shields.io/npm/v/juv?color=blue&label=npm%20package&logoColor=red)](https://www.npmjs.com/package/juv)
[![npm bundle size](https://img.shields.io/bundlephobia/min/juv?color=yello)](#)
[![Join the chat at https://gitter.im/juvnpm/community](https://badges.gitter.im/juvnpm/community.svg)](https://gitter.im/juvnpm/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)  

Javascript Universal Validation

## contributions
We profoundly accept your help. For contribute, please fork, and for merge, request a pull on `develop` branch!

## sample
```
const express = require('express')
const app = express()
const juv = require('juv')
juv(juv.defualtModel)
app.use(juv)
app.post('/register', (req, res) => {
  if (req.error)
    return res.sendJsonModel(400, req.error)
  
  // 
})
```
## objects and functions

| name            | type    | description                                    |
|-----------------|---------|------------------------------------------------|
| isValidState    | boolian | if validation fails it would be false          |
| validationError | string  | if validation fails it would be string message |
| defualtModel    | object  | an object for use as default                   |
| sendJsonModel   | object  | an object to fast format response model        |
