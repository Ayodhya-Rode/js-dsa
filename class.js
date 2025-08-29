class Human{
    //props
    age = 20    //by default public, anyone can access
    #ht = 45
    name ;
    constructor(name){
       this.name = name
    }
    //behaviour
    #running(){
        console.log('run in private road', this.#ht);
    }

    get runningMeth(){
        return this.#running
    }

    // set runPri(val){
    //     this.#running = val;
    // }

    get getHt(){
        return this.#ht
    }

    set setHt(val){
        this.#ht = val
    }
    
}

let obj  = new Human('ay')
obj.runningMeth()

// console.log(obj.name);
// let obj1 = new Human('rode')
// console.log(obj1.name);

// console.log(obj.getHt);
// obj.setHt = 90

// console.log(obj.getHt);
