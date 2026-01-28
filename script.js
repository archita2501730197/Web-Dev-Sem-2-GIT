
console.log("Helllo students!!")

// let obj={
//     name:"Alex",
//     age:45,
//     Address:"GGN"
// }
// let obj2={
//     name:"Alex",
//     age:45,
//     Address:"GGN"
// }
// obj.name="Bob"
// console.log(obj)


// const para=document.getElementById('para')
// para.innerText="This is updated paragraph"
// para.style.color="green"
// console.log(para)


// const para=document.querySelector('.para')
// para.textContent="This is updated paragraph"
// para.style.color="green"
// console.log(para)

// const para=document.getElementsByClassName('para')  //return HTMLCollection
// para[0].innerText="This is updated paragraph"
// para[1].style.color="green"
// console.log(para)


// const para2=document.querySelectorAll('.para') //return NodeList
// para2[0].innerText="This is updated paragraph"
// para2[1].style.color="green"
// console.log(para2)

// let arr=[23,45,235,56,45,3,2]
// arr.forEach((ele)=>console.log(ele))


// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a heading</h1>"
// console.log(container)

// const btn=document.querySelector("button");
// btn.classList.add("btn")
// // btn.classList.remove('btn')
// // btn.classList.toggle('btn')


// function print(){
//     console.log("Hello you have clicked the button")
// }

// btn.addEventListener('click',print)
// btn.removeEventListener('click',print)
// btn.addEventListener('click',()=>console.log("Hello you have clicked the button"))


// const click=document.querySelector('#click')
// // const stop=document.querySelector('#stop')

// function message(event){
//     console.log(event.key)
//     console.log("Button Clicked!!")
// }

// click.addEventListener('mouseover',message)
// click.addEventListener('keydown',message)
// click.addEventListener('keyup',message)
// stop.addEventListener('click',()=>{
//     console.log("Stop button clicked!!")
//     click.removeEventListener('click',message)
// })

// const form=document.querySelector('form')
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     console.log("Form Submitted!!")
// })

// const div=document.querySelector('.container')
// const div2=document.querySelector('.outer')
// const btn=document.querySelector('button')


// div.addEventListener('click',()=>{console.log("Clicked the Div")},false)
// div2.addEventListener('click',()=>{console.log("Clicked the Outer Div")},false)
// btn.addEventListener('click',()=>{console.log("Clicked the Button")},false)


//console.log(a)         //execution context (container where java script runs)
// var a=678
// let b=576
// console.log(a)
// console.log(b)
// debugger
// function print(){
//     let c=63
//     console.log(c)
//     console.log("inside fn")
// }
// print()


// function first (){     //Call Stack
//     Second()
// }
// function second (){
//     third()
// }
// debugger
// function third (){
//     console.trace()
// }
// first();

// console.log(a)         //causes referance error (TDZ)
// let a=34532

//*******UNIT-2*******

// console.log("first line")
// setTimeout(()=> {console.log("after 2 seconds")},2000);
// console.log("second line")

// const timerId=setInterval(()=>{               //lec-10
//     console.log("After 3 sec")
// },1000)
// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000)

// let count=1
// const timerId=setInterval(()=>{
//     if(count===10)clearInterval(timerId)
//         console.log(count)
//     count+=1
// },1000)

// console.log("before")
// setTimeout(()=>{
//     console.log("inside")
// },0)
// console.log("after")

const name=document.querySelector("#name")              //lec-11
const btn=document.querySelector(".btn")
const list=document.querySelector(".list")

btn.addEventListener('click',()=>{
    if(name.value==="")return
    const li=document.createElement('li')         //creating
    const dlt=document.createElement('button')

    dlt.innerText="Delete"                        //providing text
    li.innerText=name.value;

    dlt.addEventListener('click',()=>{
        list.removeChild(li)
    })

    list.appendChild(li)                          //appending
    li.appendChild(dlt)

    name.value=""               //empty the box after submission
})