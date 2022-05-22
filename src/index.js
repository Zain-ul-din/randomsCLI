#! /usr/bin/env node

import  { readFile , writeFile } from 'fs/promises'

import { Parser } from './Parser/Parser.js'


const res = await readFile('./src/index.cpp' , 'utf-8')


const parser = new Parser(res)

parser.getTokens()
























// let fileData = await readFile ('./src/index.cpp' , 'utf-8' ) 

// import { resolve } from 'path' 

// // 1. Obtain the relative path argument provided via
// //    the CLI and assign it to the `filepath` variable.
// const [ , , filepath ] = process.argv;

// console.log('Welcome to Randoms CLI')

// console.log(process.cwd())

// if (filepath !== undefined) {
//       // 2. Obtain the absolute path for the given relative
//       //    path and assign it to the `absPath` variable.
//       const absPath = resolve(process.cwd(), filepath)
//       console.log(absPath)
// }
// else console.error('File Path Requied')

// cwd current working directory

// 

