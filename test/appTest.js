const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
describe(
   'App',function(){
       describe('sayHello',function(){
        it('sayHello should return hello',function(){
            assert.equal(sayHello(),'Hello')
        })
        it('sayHello should return type String',function(){
         //    assert.equal(typeof sayHello(),'string')
         assert.typeOf(sayHello(),'string')
        })
       })
       describe('addNumbers',function(){
        it('addNumbers should be above 5',function(){
            let result = addNumbers(5,5)
            assert.isAbove(result,5);
        })
        it('addNumbers should return number',function(){
         let result = addNumbers(5,5)
         assert.typeOf(result,'number');
     })
       })
   } 
)