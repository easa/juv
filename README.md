# juv

[![CircleCI](https://circleci.com/gh/easa/juv.svg?style=svg&circle-token=f7602f571cb7e13ba4dfac0b89859b4ee2fe89a8)](https://circleci.com/gh/easa/juv)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/easa/juv?color=black&label=github%20repo)](https://github.com/easa/juv)
[![GitHub](https://img.shields.io/github/license/easa/juv)](#)
[![npm](https://img.shields.io/npm/v/juv?color=blue&label=npm%20package&logoColor=red)](https://www.npmjs.com/package/juv)
[![npm bundle size](https://img.shields.io/bundlephobia/min/juv?color=yello)](#)
[![Join the chat at https://gitter.im/juvnpm/community](https://badges.gitter.im/juvnpm/community.svg)](https://gitter.im/juvnpm/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)  

Javascript Universal Validation

* for use in production please wait till version 0.8.0!   

## what is the usage
The `juv` from `const juv = require('juv')` is a constructor function that takes an object as a model of the parameters for validation!
The `model` could contains json models for both request and response by passing `{ reqModel: {} , resModel: {} }`. but if `reqModel` left empty object or undefined then the model of request would be an empty object like `{}`. If `resModel` left empty or nothing then it would be the default one described later on table of #obejct and functoins!   
* If the model didn't contain `reqModel` and `resModel` and just contains an object of the parameters then the model itself will place as `reqModel` that makes it easear for use as example!
## contributions
We profoundly accept your help. For contribute, please fork, and for merge, request a pull on `develop` branch! 

## sample
```
const express = require('express')
const app = express()
const juv = require('juv')
app.get('/:username', juv({ username: u => u.length > 5 }), (req, res) => {
  if (req.error)
    return res.status(401).send(req.error)

  res.send(`Hi ${username}`)
})

app.use(juv()) // juve takes model
app.post('/register', (req, res) => {
  if (req.error)
    return res.status(401).send(req.error)

  // your code 
})

app.listen(3000, () => console.log(`Example app listening on port 3000`))
```
## objects and functions

| name            | type    | default    | description                                    |
|-----------------|---------|---------|------------------------------------------------|
| req.error    | string | `undefined` | if validation fails it would be a string of messages of validations among all params         |
| req.model   | object  | `{}` |		an object for use as a variable to set the I/O in a beautiful way        |
| res.model   | object  | `{ error: undefined, message: '', result: {}: ok : 'ok' }`	|	an object for use as a variable to set the I/O in a beautiful way       |
| res.sendModel   | function  | `res.sendModel(400, 'not valid')` | this function use response model to send response        |

