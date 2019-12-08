# juv

[![CircleCI](https://circleci.com/gh/easa/juv.svg?style=svg&circle-token=f7602f571cb7e13ba4dfac0b89859b4ee2fe89a8)](https://circleci.com/gh/easa/juv)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/easa/juv?color=black&label=github%20repo)](https://github.com/easa/juv)
[![GitHub](https://img.shields.io/github/license/easa/juv)](#)
[![npm](https://img.shields.io/npm/v/juv?color=blue&label=npm%20package&logoColor=red)](https://www.npmjs.com/package/juv)
[![npm](https://img.shields.io/npm/dw/juv?color=%2300baba&label=installs)](#)
[![npm bundle size](https://img.shields.io/bundlephobia/min/juv?color=yello)](#)
[![Join the chat at https://gitter.im/juvnpm/community](https://badges.gitter.im/juvnpm/community.svg)](https://gitter.im/juvnpm/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)  

Javascript Universal Validation

> for use in production please wait till version 0.8.0!   

---

JUV is a *clean*, *neat*, *easy to use* and *professianl* set of 
[express.js](http://expressjs.com/) middlewares 
that use a developer-defined model to validate and sanitize input from the client 
and the advantage is to make a definition of view-models 
that makes the architecture model more rational and reliable. 

## Installation
To have npm and work with this package first of all 
make sure you have installed Nodejs, then install express using this npm command:
```shell
npm i express
```
then install JUV using npm (make sure that you have Node.js 8.x or newer):

```shell
npm i juv
```

## Basic guide
> It's recommended that you have basic knowledge of the express.js module before you go on with this guide.

Let's get started by writing a basic route to say hello to a set of names that matches our policy. 
Then, you want to make sure that you validate the input and report any errors before accepting them.

```js
const express = require('express')
const app = express()
const juv = require('juv')
// POLICY: username should start with an a,b or c and continue with atleast four words or numbers up to 10!
app.get('/:username', juv({ username: u => u.match(/^[abc][\w\d]{4,10}$/gi) }), (req, res) => {
  if (req.error)
    return res.status(401).send(req.error)
  res.send(`Hi ${req.params.username}`)
})
app.listen(3000, () => console.log(`Example app listening on port 3000`))
```
After copy the file into app.js, run it using: `node app`, then open this link: http://localhost:3000/abba on any browser to see the result! Here the `username` is `abba`.  
*Voila!* Now, whenever a request that includes invalid `username` fields 
is submitted, your server will respond erro with status `401` (means invalid parameter) 
along with the the custome message you defined and send by `.send(req.error)`.

The validations are user-defined so you can have your model for custom validation, let's call it view-models! Works beautifully with `req.params` and `req.body`.

## Explain
The `juv` from `const juv = require('juv')` is a constructor function that takes an object as a model of the parameters for validation!
The `model` could contains json models for both request and response by passing `{ reqModel: {} , resModel: {} }`, but if the `reqModel` left as empty object or undefined then the model of request would be an empty object like `{}`. If the `resModel` left empty then it would be the default one described later on table of #obejct and functoins!   
> If the model didn't contain `reqModel` and `resModel` and just contains an object of the parameters then the model itself will place as `reqModel` that makes it easear for use as example!   
> I have deleted the `resModel` for now... but it'll be back on version 0.7.0! stay tuned!


### Use view-model sample
The extreme, wonderful and enjoyable thing about JUV is that it makes you able to define view-models and control every single parameter comes along like so:   
In `helloViewModel.js` file:
```js
module.exports = {
  username: u => u.match(/^[abc][\w\d]{4,10}$/gi) 
}
```
In `app.js` file:
```js
const viewModel = require('./helloViewModel.js')
app.use(juv(viewModel)) // juv takes view model
app.post('/:username', (req, res) => {
  if (req.error)
    return res.status(401).send(req.error)

  // your code 

  res.send(`Hi ${req.params.username}`)
})

```
## objects and functions

| name          | type     | default                                                    | description                                                                          |
|---------------|----------|------------------------------------------------------------|--------------------------------------------------------------------------------------|
| req.error     | string   | `undefined`                                                | if validation fails it would be a string of messages of validations among all params |
| req.model     | object   | `{}`                                                       | an object for use as a variable to set the I/O in a beautiful way                    |

> I have deleted the resModel for now... but it'll be back on version 0.7.0! stay tuned!
## Contributions
Please contribute!  
We profoundly accept your help. For contribute, please fork, and for merge, request a pull on `develop` branch! 
