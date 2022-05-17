
// Getter Templates
export function Getter ( returnType , varName  ) {
    return `${returnType} get${varName} () const {
        return this->${varName};
    }`
}

// Setter Templates
export function Setter ( varType , varName ) {
    return `void set${varName} (${varType}& ${varName}) {
        this->${varName} = ${varName};
    }`
}



