/*   CONST    */

// returns current cursor scope
export const SCOPE = {
    0 : 'global' , 
    1 : 'class' , 
    2 : 'local'
} 

export const KEY_WORDS = {
    class : 'class' , 
    struct : 'struct' ,
    semiColon : ';' ,
    classRelatedKeyWord : '' ,
}

export const braces = {
    left : '{' ,
    right : '}' ,
    roundLeft : '(' ,
    roundRight : ')' ,
    squareLeft : '[' ,
    squareRight : ']' ,
    BRACES : [ ')' , '(' , '{' , '}' , '[' , ']' , '<' , '>' ]
}
