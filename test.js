// let promise = new Promise((resolve,reject)=>{
//     let ans = true

//     if(ans){
//         resolve('success');
        
//     }
//     else{
//         reject('failed');
        
//     }
    
// })

// promise.then((mes)=>console.log('here we go',mes))
// .catch((err)=>console.log('i am error',err))



let studenArray = ['a','b','c','d','e']


function getStudent(Arrays, studentName){

    for(let i = 0; i<=Arrays.length; i++){
        if(Arrays[i] === studentName){
            console.log('found', studentName)
        }else{
        console.log("not found")
        }
        
    }
}
getStudent(studenArray,'h')