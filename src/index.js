#! /usr/bin/env node

import  { readFile , writeFile } from 'fs/promises'

let fileData = await readFile ('./src/index.cpp' , 'utf-8' ) 

import { resolve } from 'path' 

// 1. Obtain the relative path argument provided via
//    the CLI and assign it to the `filepath` variable.
const [ , , filepath ] = process.argv;

console.log(process.cwd())

// 2. Obtain the absolute path for the given relative
//    path and assign it to the `absPath` variable.
const absPath = resolve(process.cwd(), filepath)

// cwd current working directory

console.log(absPath)

await writeFile ('./src/index.cpp' , `
#include<iostream>

class Pro {
public:
   // constructor

   // Getter / Setter

   // operator OverLoading
private:
   int data;
   std::string ss;
};

int main () {
    std::cout << "Hello Boi \\n";
    return 0;
}
`)


