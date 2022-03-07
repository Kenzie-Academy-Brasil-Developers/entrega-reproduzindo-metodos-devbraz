

// Escreva seu código aqui.


Array.prototype.newForEach = function(callbackFn, thisArg = 0) {

     for (let index = 0; index < this.length; index++) {

          const element = this[index];

          callbackFn(element, index, this)

     }

}

Array.prototype.newMap = function(callbackFn, thisArg = 0) { 

     const newArray = []

     for (let index = 0; index < this.length; index++) {

          const element = this[index];

          newArray.push(callbackFn(element, index, this))

     }

     return newArray

}

Array.prototype.newFilter = function(callbackFn, thisArg = 0) {

     const newArray = []

     for (let index = 0; index < this.length; index++) {

          const element = this[index];
          let returnCall = callbackFn(element, index, this)
          
          if (returnCall) {
               newArray.push(element)
          } 

     }

     return newArray

} 
 
Array.prototype.newFind = function(callbackFn, thisArg = 0) {

     for (let index = 0; index < this.length; index++) {

          const element = this[index];
          let returnCall = callbackFn(element, index, this)

          if (returnCall) {
              return element
          } 

     }

} 

Array.prototype.newFindIndex = function(callbackFn, thisArg = 0) {

     for (let index = 0; index < this.length; index++) {

          const element = this[index];
          let returnCall = callbackFn(element, index, this)

          if (returnCall) {
              return index
          } 

     }

     return -1

} 

Array.prototype.newReduce = function(callbackFn, initialValue = this[0]) {

     let previousValue = initialValue

     for (let index = 1; index < this.length; index++) {

          let currentValue = this[index]
          let callResult = callbackFn(previousValue, currentValue, index, this)
          previousValue = callResult
          
     }

     return previousValue

}

Array.prototype.newSome = function(callbackFn, thisArg = 0) {

     for (let index = 0; index < this.length; index++) {

          const element = this[index];
          let returnCall = callbackFn(element, index, this)

          if (returnCall) {
               return true      
          }

     }

     return false

} 

Array.prototype.newEvery = function(callbackFn, thisArg = 0) {

     let result = true

     for (let index = 0; index < this.length; index++) {

          let currentValue = this[index]
          let returnCall = callbackFn(currentValue, index, this)

          if (returnCall === false) {
               result = false
               return result
          }
          
     }

     return result


} 

Array.prototype.newFill = function(value, initial = 0, last = this.length) {
     
     for (let index = initial; index < last; index++) {

          this[index] = value
 
     }

     return this

     

}

Array.prototype.newIncludes = function(callbackFn) {


     for (let index = 0; index < this.length; index++) {

          let element = this[index]
          
          if(element === callbackFn) {
               return true
          }


     }

     return false

}

Array.prototype.newIndexOf = function(callbackFn, initialPoint = 0) {

     if(initialPoint < 0) {
          return -1
     }

     for (let index = initialPoint; index < this.length; index++) {

          let element = this[index]

          if(element === callbackFn) {
               return index
          }

     }

     return -1

}

Array.prototype.newConcat = function(array) {

     let newArray = []

     if(array === undefined) {
          return this     
     }

     for (let index = 0; index < this.length; index++) {

          let currentValue = this[index]
          newArray.push(currentValue)
     
     }

     for (let index1 = 0; index1 < array.length; index1++) {

          let currentValue = array[index1]

          newArray.push(currentValue)
     
     }


     console.log(newArray)

     return newArray

}

Array.prototype.newJoin = function(callbackFn) {
  
     let string = ''

     for (let index = 0; index < this.length; index++) {

          let element = this[index]

          if (callbackFn === '') {
               string += element
          } else {
               string += element + callbackFn
          }
  
     }

     string = string.trimEnd()

     return string

}

// Array.prototype.newSlice = (callbackFn) => {}

// Array.prototype.newFlat = (callbackFn) => {}

// Array.prototype.newFlatMap = (callbackFn) => { /* ... */ } 



