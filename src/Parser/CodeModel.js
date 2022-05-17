
// Code Model

export class Code {
    constructor () {
        this.functions = []
        this.variables = []
    }

    
}

export const functionModel = {
     type : 'function' ,
     name : '' , 
     returnType : '' ,
     arguments : [] ,
     bodyCode : ''
}

export const variableModel = {
    type : 'variable' ,
    name  : '' ,
    dataType : '' 
}




