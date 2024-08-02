/*let firstName ="carry"
let lastName ="cate"
let address ="main street"
address = "first street"
console.log(firstName,lastName,address)*/

/*var street="melrose"
var country="kitale"
var fullmailingaddress=street+"        " +country
console.log(fullmailingaddress)*/

/*let num1 = 50 
let num2 =60
let num3 =num1+num2
console.log(`the sum of ${num1} and ${num2} is ${num3}`)*/

/*let score1=30
let score2=10
let score3=40
let total=score1+score2+score3
let average=total/3
console.log(total,average)


var plates=20
var people=7
let rem=20%7
rem++
let msg=`there are ${rem} plates available`

console.log(msg)*/

//array
/*let fruits=['mangoes','oranges','apples']
console.log(fruits)*/

//objects
/*let student ={    
name:'shiko',
age:19,
gander:'female',
}
 
let person1={
  name:'shiko',
  age:18,
  status:'resident'}

 let person2={
  name:'carry',
  age:18,
  status:'tourist' }

  console.log(person1,person2)*/

//function
/* let target=function(element,value,speed){
/* console.log(`hello world`)*/
/*let total=element+value+speed 
 console.log(`here are the totals ${total}`)

}
target(243,456,678)*/

// there are  3 types of functions:statement functioncs , callback functions and anonymous functions

/*let home=function(){
console.log(`my name is shiko`)
all()

}

let all=function(all){
console.log(`I am a student`)

}

home()*/

/*let students=[
  {name:'john',age:10,sport:'football'},
  {name:'mary',age:12,sport:'basketball'},
  {name:'ann',age:15,sport:'netball'},
  {name:'paul',age:13,sport:'golf'}
]
let totalages=students.forEach(function(cate){
  console.log(cate.name)
})*/

/*let calculateTotal=function(subtotal,tax){
return subtotal+tax
}
console.log(`the sum of total is ${calculateTotal (100,50)}`)*/

/*let radius=302
let pi=3.142
let area=pi*radius*radius

console.log(`the area of the circle is ${area}`)*/

//funcional expression(function uses variale name)
/*let area=function(pi,radius,radius){
  let area=pi*radius*radius
  console.log(`the area of the circle is ${area} `)
}

area(3.142,302,302)*/

/* function rem(element,value){
 rem=element/value
  console.log(`the rem is ${rem} `)
}
rem(24,6)*/

/*let doors={
  colour:'blue',
  height:500,
  width:100,
  type:['wooden','steel','brass'],
  hello:function(){
    console.log(`hello how are you`)
  }
 total:function(pi,radius){
  let total=0.5*pi*radius*radius
  console.log(`the area of the circle is ${total}`)
 }
}
console.log(doors.area(3.142,200))*/

/*function one(){
  console.log(`i am one`)
}
  function two(cb){
    cb()
    console.log(`i am two`)
  }
two(one)*/

/*let colour='blue'
if(colour=='yellow'){
  console.log(`the colour is correct`)
}else{
  console.log(`the colour is wrong`)
}
let number=15
if(number<15){
  console.log(`the number is correct`)
}else{
  console.log(`the number is wrong`)
}
let fname='joy'
let age=18
if(fname=='joy' && age==19){
  console.log(`correct`)
}else{
  console.log('wrong')
}*/

/*let time=10 
let day='tuesday'
let colour='blue'
if(time==10 && day=='wednesday'||colour=='blue'){
  console.log(`correct`)
}else {
  console.log(`wrong`)
}

let fruits=['mangoes','oranges','watermelon','berries','kiwi']

for(let i=0;1<9;i|++){
  console.log(i)
}*/

/*let dice=3
if(dice==1){
  console.log(`you got one`)
}else if(dice ==2){
  console.log(`you got 2`)
}else if(dice ==3){
  console.log(`you got 3`)
}else if(dice==4){
  console.log(`you got 4`)
}else if(dice==5){
  console.log(`you got 5`)
}else if(dice==6){
  console.log(`you got 6`)
}else{
  console.log(`invalid`)
}*/

//SWITCH STATEMENT
/*let dice=5
switch(dice){
  case 1:
    console.log(`you got one`)
    break
    case 2:
      console.log(`you got two`)
      break
      case 3:
        console.log(`you got three`)
        break
        case 4:
          console.log(`you got four`)
          break
          case 5:
            console.log(`you got five`)
            break
            case 6:
              console.log(`you got six`)
              default:
                console.log(`!!!!INVALID ERROR!!!!`)

}


let i=1
for(i;i<=10;i++){
  console.log(i)
}*/

/*let i=1
for(i;i<=15;i++){
  console.log(i)
}*/

/* let employees=[
  {fname:'joy',age:34,nationality:'kenyan',gender:'female',id:4},
  {fname:'bill',age:46,nationality:'tanzanian',gender:'male',id:5},
  {fname:'mary',age:23,nationality:'ugandan',gender:'female',id:7}
]
 /* function allAges(ages){
console.log(ages.age)
  }
  employees.forEach(allAges)*/

/*let fd=employees.find(function(names){
return names.id==7
})
console.log(fd)

/*let filter=employees.filter(function(names){
  return names.age==46
})
console.log(filter)*/

//reduce method(combines values in an array to one value)
/*let allAges=employees.reduce(function(acc,currentvalue){
  return acc+currentvalue.age
},0)
console.log(allAges)
//callback
function callback(acc,currentvalue){
  return acc+currentvalue.id
}
let allid=employees.reduce(callback,0)
console.log(allid)
//map(returns an array )
let mp=employees.map(function(carry){
  return carry.age
})
console.log(mp)

let arr=[69,89,49,100]
let cate=arr.reduce(function(){
  return arr[3]
})
console.log(cate)


//introduction to dom( document,object,model)
//getelementbyid
/*let heading=document.getElementById('one')
heading.style.color="orange"
//getElementbyTagname
 let heading=document.getElementsByTagName('h1')
 heading[0].style.colour='pink'*/
//querryselector
//queryselectorall

/*let carry=document.querySelector('.one')
console.log(carry)
//getelementbyclassname
let hello=document.getElementsByClassName('bnt')
hello[0].style.color="pink"
hello[1].style.color="blue"
hello[0].style.backgroundColor ="black"
hello[0].style.fontSize="60px"
console.log(hello)
 

/*let fruits=document.getElementsByClassName('first')
fruits[0].style.color="green"
fruits[0].style.fontSize="20px"
console.log(fruits)*/

//nextsibling,previoussibling
//nextelementsibling,previouselementsibling
/*let fruits=document.querySelectorAll('li')
console.log(fruits)

const div1=getElementsById('div1');
console.log(div1)

const maya=div1.getAttributeById('div1')
console.log(maya)*/

/*let carry=document.querySelector('.first')

//let tree=all.getAttribute('href')
let rain=document.querySelector('.list')
let attr=rain.getAttribute('class')
console.log(attr)*/

/*function replacetext(){
  var subscribe=document.getElementById('subscibe')
  subscribe.setAttribute('disable',true)
  subscribe.textContent="subscribed"
}
console.log(replacetext)*/

/*let mypara=document.getElementById("myparagraph")
mypara.classList.add('bold','big-font')
mypara.classList.remove('big-font')
mypara.classList.replace('big-font','yellowbg')

console.log(mypara.classList)*/
/*function carry(){
  let heading=document.querySelector('.two')
  heading.style.color='pink',
  heading.style.fontSize='50px',
  heading.style.background='purple'
}
let btn=document.querySelector('.one')
btn.addEventListener('keypress',carry)
 console.log(btn)*/

//currenttarget-element o which the event handler has been attached to
//target-identifies the element to which the event occured

/*let btn=document.querySelectorAll('.btn')
btn.forEach(function(e){
  e.addEventListener('click',function(clicked){
clicked.target.style.color='blue'
//clicked.currentTarget.style.color='red'
  })
})*/

/*let btn1=document.querySelector('.btn1')
function cb(){
  btn1.style.color='red'
  btn1.style.fontSize='50px'
}
btn1.addEventListener('click',cb)*/

//create element and create textnode

//return the total age of all employees
/*let employees=[
  {fname:'joy',age:34,nationality:'kenyan',gender:'female',id:4},
  {fname:'bill',age:46,nationality:'tanzanian',gender:'male',id:5},
  {fname:'mary',age:23,nationality:'ugandan',gender:'female',id:8},
  {fname:'mary',age:23,nationality:'kenyan',gender:'female',id:7}
]
let allages=employees.reduce(function(acc,currentvalue){
  return acc+currentvalue.age
},0)
console.log(allages)

let filter=employees.filter(function(names){
  return names.fname=='mary'
})
console.log(filter)

/*let thursday=document.querySelector('.two')
let button=document.querySelector('.three')
function cb(){
thursday.style.background='green'
thursday.style.fontSize='50px'
thursday.style.color='orange'
console.log(thursday)}
 
button.addEventListener('click',cb)*/

/*let h1=document.querySelector('.today')
let today=document.querySelectorAll('.btn1')
 function all(e){
  h1.style.background='pink'
  h1.style.fontSize='50px'
  h1.style.color='lime'
 }
today.forEach(function(e){ 
  e.addEventListener('click',all)*/

/*let calculateTotal=function(subtotal,tax){
  return subtotal+tax
}

let order1,order2,order3;
order1=calculateTotal(10,30);
order2=calculateTotal(40,50);
order3=calculateTotal(50,50)

console.log(`the total of order one is ${order1}`)
console.log(`the total of order two is ${order2}`)
console.log(`the total of order three is ${order3}`)*/

/*let person1={
  Name:'peter',
  Age:17,
  Status: 'tourist'
}
let person2={
  Name:'shiko',
  Age:25,
  Status: 'resident'
}

if(person1.age>=18 && person1.status==='resident'){
  console.log('you can vote')
}
else{
  console.log('you will not vote')
}*/

/*let h1=document.querySelector('.main_heading')
let monday=document.querySelectorAll('.btn ')
let all=monday.forEach(function(c){
c.addEventListener('click',function(a){
  let reset=a.currentTarget.classList
  h1.style.background='pink'
    h1.style.fontSize='50px'
    h1.style.color='orange'
})
})*/

/*let list=document.getElementById('link')
let all=list.getAttribute('href')
console.log(all)

let heading=document.querySelector('.all')
let any=heading.getElementsByTagName('h4')
console.log(heading)

//textcontent and nodevalues
//classlists and classnames
//createelements
//replacechild
//prepend innertexts
//remove and remove child
//inner html and text content
//eventbubbling capturing
//form submit
//local storage

let text=document.getElementById('div5')
text.textContent='mangoes and bananas'
console.log(text)

let text1=document.getElementById('m')
console.log(text1.childNodes[0].nodeValue)

let myPara=document.getElementById('mypara')
myPara.classList.add('bold')
myPara.classList.add('bg')
myPara.classList.add('big-font')
console.log(myPara.classList)*/

//createtextnode
/*let one=document.querySelector('.one')
one.style.background="red"
one.style.fontSize='40px'
one.style.color='white'
one.style.padding='16px'
let tuesday=document.createElement('div')
let text=document.createTextNode('HELLO WORLD')
tuesday.appendChild(text)
document.body.appendChild(tuesday)
tuesday.style.background='purple'
tuesday.style.color='orange'
tuesday.style.padding='16px'
tuesday.addEventListener('click',function(){
  tuesday.style.color='pink'
  tuesday.style.background='grey'
  tuesday.style.fontSize='40px'
  tuesday.style.padding='16px'
})
//appendchild and innertext
let m=document.createElement('h1')
let text2=document.createTextNode('yesterday was monday')
m.appendChild(text2)
document.body.appendChild(m)
m.style.color='yellow'
m.style.background='pink'
m.style.padding='16px'
m.addEventListener('click',function(){
m.style.background='blue'
m.style.color='green'
m.style.padding='16px'
m.style.fontSize='40px'
})

let t=document.createElement('h2')
t.innerText='A good day'
document.body.prepend(t)*/

//remove and removechild(used when in a container)
/*let m=document.createElement('h1')
let text=document.createTextNode('hello world')
m.appendChild(text)
document.body.appendChild(m)
m.style.background='indigo'
m.style.color='beige'
m.style.padding='16px'
m.style.fontSize='40px'
//let T=m.removeChild(text)

let r=document.createElement('p')
let t2=document.createTextNode('i woke up early today,i will get to class early')
r.appendChild(t2)
document.body.appendChild(r)
r.style.color='pink'
r.style.background='grey'
r.style.padding='15px'

let t=document.createElement('h1')
t.innerText='wcw'
document.body.prepend(t)
t.style.color='white'
t.style.background='maroon'
t.style.padding='16px'
t.style.fontSize='30px'*/

//innerhtml and textcontent
/*let m=document.querySelector('.first')
let n=document.querySelector('.container')
let o=document.getElementById('item')
console.log(m.textContent)
console.log(m.innerHTML)


let content="today is wednesday"
let list=document.createElement('ul')
list.innerHTML=` <ul class="first">
  <li id="item">Kenya</li>
  <li>Uganda</li>
</ul>`
document.body.appendChild(list)
let list2=document.createElement('h1')
list2.innerHTML=`<h1>${content}<h1>`
document.body.appendChild(list2)

let list3=document.createElement('h2')
list3.innerHTML=`<h2>thursday<h2>`
document.body.appendChild(list3)*/
//contains
//add
//remove

/*let cc = document.querySelector("#one");
cc.addEventListener("click", function () {
  let allClass = cc.classList.contains("one");
  if (allClass) {
    cc.classList.remove("one");
  } else {
    cc.classList.add("one");
  }
});

let mm=document.querySelector('#two')
mm.addEventListener('click',function(){
  let anyclass=mm.classList.contains('two')
  if(anyclass){
    mm.classList.remove('two')
  }else{
    mm.classList.add('two')
  }
})*/

//date
//math method
/*let months=['january','february','march','april','may','june','july','august','september','october','november','december']
let days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

let date=new Date
let month=new Date().getMonth()
let day=new Date().getDay()
console.log(days[day])
console.log(months[month])

let number=18.9
let roundup=Math.ceil(number)
let rounddown=Math.floor(number)
console.log(rounddown)

const body=document.getElementsByTagName('body')
const div=document.getElementById('div')
const span=document.getElementById('span')
const btn=document.getElementById('btn')*/

/* body.addEventListener('click',function(){
    console.log('body was clicked')
  })
  div.addEventListener('click',function(){
    console.log('div was clicked')
  })
  span.addEventListener('click',function(){
    console.log('span was clicked')
  })
  btn.addEventListener('click',function(){
    console.log('btn was clicked')
  })*/
/*let myForm=document.getElementById('myForm')
myForm.addEventListener('submit',(e)=>{
e.preventDefault()
console.log('form has been submitted')
})

let myobj={
name:'carry',
age:20
}
let myObj_serialized=JSON.stringify(myobj)
console.log(myObj_serialized)*/
/*localStorage,getItem('myObj',myobj)
console.log(localStorage)*/

//asynchronous
/*console.log('I')
console.log('am')
setTimeout(()=>{
  console.log('drawing')
},5000)
console.log('right')
console.log('now')*/

//callback
/*let stock={
fruits:['strawberry','mango','orange','pinapple'],
toppings:['skittles','chocolate','gummies'],
holder:['cup','cone','stick'],
liquid:['water','milk','simple syrup']
}
let order=(fruit,cb)=>{
  
  setTimeout(()=>{
    console.log(`${stock.fruits[fruit]} was selected`)
    cb()
  },2000)
}
//callback hell (format)
let production=()=>{
  setTimeout(()=>{
    console.log('production has started')
setTimeout(()=>{
  console.log('the fruit has been chopped')
  setTimeout(()=>{
    console.log('water has been added')
    setTimeout(()=>{
      console.log('the icream was mixed')
      setTimeout(()=>{
        console.log(`toppings,${stock.toppings[1]},was added`)
      },2000)
    },2000)
  },1000)
},2000)
  },1000 )

}
order(0,production)*/

/*let stock = {
  fruits: ["strawberry", "mango", "orange", "pinapple"],
  toppings: ["skittles", "chocolate", "gummies"],
  holder: ["cup", "cone", "stick"],
  liquid: ["water", "milk", "simple syrup"],
};

let is_shop_open = false*/
/*let order=((time,work)=>{
  return new Promise((resolve, reject) => {
    if(is_shop_open){
      setTimeout(()=>{
        resolve(work())
      },time)
    }else{
      reject(console.log('our shop is closed'))
    }
  })
})
order(2000,()=>console.log(`${stock.fruits[1]} was selected`))
.then(()=>{
  return order(1000,()=>console.log('production has started'))
})
.then(()=>{
  return order(2000,()=>console.log(`the ${stock.fruits[1]} has been washed and chopped`))
})
.then(()=>{
  return order(2000,()=>console.log('the Ice cream has been made'))
})
.then(()=>{
  return order(1000,()=>console.log(`${stock.toppings[1]} has been chosen as topping`))
})
.catch(()=>{
  console.log('customer left')
})
.finally(()=>{
  console.log('shop closed for the day')
})*/

//async
/*async function order(){
  try{
    await abc
  }
  catch(error){
    console.log('abc does not exist',error)
  }
  finally{
    console.log('runs code anyway')
  }
}
order()*/

//await
/*let stock = {
  fruits: ["strawberry", "mango", "orange", "pinapple"],
  toppings: ["skittles", "chocolate", "gummies"],
  holder: ["cup", "cone", "stick"],
  liquid: ["water", "milk", "simple syrup"],
};

let is_shop_open = true
let topping_choice=()=>{
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(
        console.log('which topping would you like?')
      )
    
    },1000)
  })
}

async function kitchen(){
  console.log('A')
  console.log('B')
  console.log('C')
  await topping_choice()
  console.log('D')
  console.log('E')
}
kitchen()
console.log('doing the dishes')
console.log('cleaning the tables')
console.log('taking other orders')*/

let stock = {
  fruits: ["strawberry", "mango", "orange", "pinapple"],
  toppings: ["skittles", "chocolate", "gummies"],
  holder: ["cup", "cone", "stick"],
  liquid: ["water", "milk", "simple syrup"],
};

let is_shop_open = true
function time(ms){
  new Promise((resolve, reject) => {
    if(is_shop_open){
      setTimeout(resolve,ms)
    }else{
      reject(
        console.log('out of fruit ')
      )
    }
  })
}
async function kitchen(){
  try{
    await time(2000)
    console.log(`the fruit of choice is ${stock.fruits[3]}`)
    await time(1000)
    console.log('fruit has been washed and chopped')
    await time(2000)
    console.log(`${stock.liquid[2]} has been added to make the ice cream sweet`)
    await time(2000)
    console.log('process has been completed')
    await time(1000)
    console.log('the ice cream is served')
  }catch(error){
    console.log('customer left',error)
  }finally{
    console.log('day is over,shop is closed ')
  }
}
kitchen()
