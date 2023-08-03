console.log(this)

const obj = {
    fn1 : function () {
        console.log(this)
    },

    fn2 : () =>{
        console.log(this)
    } 
}

obj.fn1() // in normal function we saw that it does not take a global this object
obj.fn2() // in arrow function we saw that it takes the global this object.