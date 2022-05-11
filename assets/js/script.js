let zone=document.querySelector(".zone")
let item1=document.querySelector(".icon1")
let item2=document.querySelector(".icon2")
let item3=document.querySelector(".icon3")

item1.style.backgroundColor="red"
item2.style.backgroundColor="yellow"
item3.style.backgroundColor="orange"
zone.style.backgroundColor="red"


item1.addEventListener('dragend',()=>{
    zone.style.backgroundColor=item1.style.backgroundColor
})
item2.addEventListener('dragend',()=>{
    zone.style.backgroundColor=item2.style.backgroundColor
})
item3.addEventListener('dragend',()=>{
    zone.style.backgroundColor=item3.style.backgroundColor
})