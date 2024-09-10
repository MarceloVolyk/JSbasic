//npm - global command, comes with node
//npm --version 

//local dependancy - use it only for this particular project
//npm i <packageName>

//global dependancy - use it in any project
//npm install -g <packageName>

//package.json - manifest file (stores important info about project/package)
//manual approach: npm init
//default approach (automatic): npm init -y

//Gitignore will not upload "node_modules" to github
//All installed node modules will be logged in the package.json file, under "dependencies"
//When someone pulls this project from github, the person will just need to type "npm install" in the console,
//and all modules listed under dependecies in package.json will be installed
const _ = require('lodash')