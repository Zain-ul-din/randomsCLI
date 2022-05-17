
import { Tokenize } from "./Tokenizer/Tokenizer.js"

export class Parser {
    constructor (string) {
        this.string = string
    }
    
    getTokens () {
        return Tokenize(this.string)
    }
}