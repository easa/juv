# juv

[![CircleCI](https://circleci.com/gh/easa/juv.svg?style=svg&circle-token=f7602f571cb7e13ba4dfac0b89859b4ee2fe89a8)](https://circleci.com/gh/easa/juv)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/easa/juv?color=black&label=github%20repo)](https://github.com/easa/juv)
[![GitHub](https://img.shields.io/github/license/easa/juv)](#)
[![npm](https://img.shields.io/npm/v/juv?color=blue&label=npm%20package&logoColor=red)](https://www.npmjs.com/package/juv)
[![npm](https://img.shields.io/npm/dw/juv?color=%2300baba&label=installs)](#)
[![npm bundle size](https://img.shields.io/bundlephobia/min/juv?color=yello)](#)
[![Join the chat at https://gitter.im/juvnpm/community](https://badges.gitter.im/juvnpm/community.svg)](https://gitter.im/juvnpm/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)  

Javascript Universal Validation

* for use in production please wait till version 0.8.0!   

## usage
The `juv` from `const juv = require('juv')` is a constructor function that takes an object as a model of the parameters for validation!
The `model` could contains json models for both request and response by passing `{ reqModel: {} , resModel: {} }`, but if the `reqModel` left as empty object or undefined then the model of request would be an empty object like `{}`. If the `resModel` left empty then it would be the default one described later on table of #obejct and functoins!   
* If the model didn't contain `reqModel` and `resModel` and just contains an object of the parameters then the model itself will place as `reqModel` that makes it easear for use as example!
## contributions
We profoundly accept your help. For contribute, please fork, and for merge, request a pull on `develop` branch! 

## sample
Install Nodejs and then install express by running this command: `npm i express`. Then install juv using: `npm i juv`, then copy the file into app.js, run it using: `node app`, and then open this link: http://localhost:3000/martin on any browser to see the result!   
easy one:
```
const express = require('express')
const app = express()
const juv = require('juv')
// username should start with a m,a,r,t,i,n or e and continue with atleast four words or numbers up to 10!
app.get('/:username', juv({ username: u => u.match(/^[martine][\w\d]{4,10}$/gi) }), (req, res) => {
  if (req.error)
    return res.status(401).send(req.error)
  res.send(`Hi ${req.params.username}`)
})
app.listen(3000, () => console.log(`Example app listening on port 3000`))
```
use bodyparser to get the body and define model as explained on #usage, then:
```
app.use(juv(model)) // juv takes model
app.post('/register', (req, res) => {
  if (req.error)
    return res.status(401).send(req.error)
  // your code 
})

```
## objects and functions

| name            | type    | default    | description                                    |
|-----------------|---------|---------|------------------------------------------------|
| req.error    | string | `undefined` | if validation fails it would be a string of messages of validations among all params         |
| req.model   | object  | `{}` |		an object for use as a variable to set the I/O in a beautiful way        |
| res.model   | object  | `{ error: undefined, message: '', result: {}: ok : 'ok' }`	|	an object for use as a variable to set the I/O in a beautiful way       |
| res.sendModel   | function  | `res.sendModel(400, 'not valid')` | this function use response model to send response        |

