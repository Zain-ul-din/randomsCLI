
// LIFO data structure

export class Stack {

    constructor () {
        this.array = []
        this.empty = true
    }

    push (element) { 
        this.empty = false
        this.array = [element , ...this.array]
    }

    pop () {
        if (this.empty) return
        this.empty = this.array.length - 1 === 0
        let deletedElement = this.array.at(0) 
        this.array = this.array.slice(1 , this.array.length)
        return deletedElement
    }
    
    top () {
        return this.empty ? 
        null : this.array[this.array.length - 1]
    }
    
    free () {
        this.empty = true
        this.array = []
    }
    count () { return this.array.length }
}

