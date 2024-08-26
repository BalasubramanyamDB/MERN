console.log("from js")
let i = 0;

// function addData(){
//     console.log("from add data")
//     localStorage.setItem("dataFromPara", document.getElementById("para").innerText)
//     ++i;
//     document.getElementById("addOnClick").innerHTML = `${localStorage.getItem(["dataFromPara"])} ${i}`
// }


// function removeData(){
//     console.log("remove function")
//     localStorage.clear(["dataFromPara"])
// }




// function addData(a,b){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(a+b);
//         },3000)
//     })
// }
// const add = addData(3,4)
// console.log(add.then((resolve)=>console.log(resolve)))


// cart = ["a","b","c"]
// price = [1,34,242]
// function createOrder(cart,price){
// return new Promise((resolve, reject)=>{
//     let obj = {}
//     setTimeout(()=>{
//         for (let i=0; i<cart.length; i++){
//             obj[cart[i]] = price[i]
//             resolve(obj)

//         }
//     },5000)
// })
// }

// function makePayment(cart){
//     return new Promise((resolve, reject)=>{
//         if(!cart){
//             reject (new error());
//         }
//         setTimeout(()=>{
//             let sum = 0;
//         for (i in cart){
//             sum += cart[i]
//        }
//        console.log(sum)
//        resolve(sum)
//         },4000)
//     })
// }


// order = createOrder(cart, price)

// order.then(resolve => {return makePayment(resolve)}).then(resolve => {return resolve}).catch(reject => reject)




// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("hi from promise")
//     },5000)
// })
// async function hello(){
//     console.log("hi from async")
//     await  p;
// }
// hello()
// p.then(resolve => console.log(resolve))


// const test = async function(){
//     let a = await p
//     console.log(a,"fn")
    
// }
// test()

// function a (x){
//     let k = x
//     return function b(y){
//         return function c(z){
//             setTimeout(()=>{
//                 console.log("fff",x+y+z)
//             },17000)
//             return x+y+z+k
//         }
//     }
// }
// console.log(a.prototype)
// console.log(a(2))
// console.log(a(2)(3))
// console.log("jhb",a(2)(3)(4))

// const g = ()=>{
//     for (let i=1;i<10;i++){
//         return setTimeout(()=>{
//             console.log(i,`after ${i* 1000}`)
//         },i*10000)
//     }
// }
// g()


// console.log(JSON.stringify("{}"))


let ib = document.getElementById("inputBox")
function getData(){
    console.log("datata")
    setTimeout(()=>{
        console.log(`${ib.value}`)
    },3000)
}



obj = [
    {
        key:'s1',
        data:'d1'
    },
    {
        key:'s2',
        data:'d1'
    },
    {
        key:'s3',
        data:'d1'
    },
    {
        key:'s1',
        data:'d1'
    }
]

// let op = {}

// obj.forEach(element => {
//     if(op[element.key]){
//         op[element.key].push(element)
//     }
//     else{
//         op[element.key] = [element]
//     }
// });
// for(let key in op){
//     console.log(op[key])
// }
// console.log(op)

let map = new Map()
function memoize(fn){
    return function tmp(...args){
        const key = args.join("_")
        console.log(key)
        console.log(map)
        if (map.has(key)){
            console.log("from map")
            return map.get(key)
        }
        else{
            const res = fn(...args)
            map.set(key, res)
            return res
        }
    }
}

function add(a,b){
    return a+b
}

// let adder = memoize(add)

// console.log(adder(1,2))
// console.log(adder(1,2))
// console.log(adder(2,3))

const result = []
function flattenArray(a){
    for(let i=0 ; i<a.length; i++){
        if(typeof(a[i]) === 'number'){
            result.push(a[i])
        }
        else{
            flattenArray(a[i])
        }
    }
}
// const a = [1,2,3,[4,[5,6]],7,8]
// flattenArray(a)
// console.log(result)





const promise = new Promise((resolve, reject)=>{
    console.log("from prm")
    setTimeout(()=>{
        resolve(`[1,2,3]`)
    },10000) 
})

const help = async function(){
    let one = await promise
    console.log("from one ",one)
    // let two = await promise
    // console.log("from two",two)
    console.log(one.length)
    for(const ele in one){
        console.log(one)
        console.log(ele)
    }

}
// help()

const div = document.createElement('div')
// console.log(div)
div.className = 'main'
const data = document.createTextNode("from div in js")
div.appendChild(data)
document.body.appendChild(div)

const listId = document.getElementById('lists')


function addListElement(data){
    const li = document.createElement('li')
    const node = document.createTextNode(data)
    li.appendChild(node)
    listId.appendChild(li)
}

addListElement('four')



let t1 = ""
let t2 = ""

const rtr = function (num){
return new Promise((resolve, reject)=>{
    setTimeout(()=>{if (num>10){
        resolve("done")
    }
    else{
        reject("fail")
    }},5000)
})
}


async function test(){
    try{
        let t1 = await rtr(11)
        console.log(t1)
    }
    catch(err){
        console.log(err)
    }
    try{
        let t2 = await rtr(111)
        console.log(t2)
    }
    catch(err){
        console.log(err)
    }
    console.log(8765675)
}
// test()

arr = ["name","age",34]

const a = arr.forEach((element,ind) => {
    if(!element){console.log(arr[ind],"hhhhh")}
});
// console.log(a)

const array = {
    name:"queueMicro",
    age:0
}
for(ele of arr){
    if(array[ele]){
        console.log(`${ele}`)
    }
}