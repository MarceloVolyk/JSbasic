//npm - global command, comes with node
//npm --version 

//local dependancy - use it only for this particular project
//npm i <packageName>

//global dependancy - use it in any project
//npm install -g <packageName>
//install in dev env - npm i <packageName> -D
//run in dev env - npm run dev (if configured in package.json)

//uninstall - npm uninstall <packageName>

//package.json - manifest file (stores important info about project/package)
//manual approach: npm init
//default approach (automatic): npm init -y

//Gitignore will not upload "node_modules" to github
//All installed node modules will be logged in the package.json file, under "dependencies"
//When someone pulls this project from github, the person will just need to type "npm install" in the console,
//and all modules listed under dependecies in package.json will be installed
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('hello people')