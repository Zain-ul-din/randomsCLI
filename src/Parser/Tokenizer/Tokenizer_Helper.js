
/* Helper Func */

import { KEY_WORDS  , braces } from "./Tokenizer_Keywords.js"
import { Stack } from "../../Containers/Stack.js"

/// Finds class declaration
export function isContainClass (string , target) {
    const stack = new Stack()
    var token = '' , type = 'undefine' , err = '' , name = ''
    
    for (var cursor = 0; cursor < string.length ; cursor ++) {
        
        if ( string.at(cursor) === ' ' || string.at(cursor) == '\n' ) {
            token = token.trim()
            if (token === KEY_WORDS.class || token === KEY_WORDS.struct) {
                let isBracesFound = false
                type = token
                token = ''
                while (cursor < string.length) {
                    cursor += 1
                    if(string.at(cursor) === braces.left) {
                        isBracesFound = true
                        stack.push(string.at(cursor))
                    }
                    else if (string.at(cursor) == braces.right) { stack.pop() }
                    else if (string.at(cursor) === KEY_WORDS.semiColon) {
                        if (!isBracesFound) { 
                            stack.push(string.at(cursor))
                            break  
                        }
                        stack.push(string.at(cursor))
                        break
                    }
                    
                    if (!isBracesFound  && !braces.BRACES.includes(string.at(cursor)))
                        token += string.at(cursor)
                }
                console.log(token)
                
                if (stack.top() === KEY_WORDS.semiColon ){
                    name = token.trim ()
                    err = ''
                    // break
                } else {
                 stack.free()
                 token = ''
                }
            } else token = ''
        } 
        token += string.at(cursor);
    }
  
    return {
        res : stack.top() === KEY_WORDS.semiColon ,
        idx : { start : 0 , end : 1 },
        token : { type : type , name : name }
    }
}


