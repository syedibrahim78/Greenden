// selecting side navbar,menu icon

let sidenav=document.getElementById('sidenav')
let menuicon=document.getElementById('menuicon')
let closenav=document.getElementById('closenav')

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

//product search functionalty

let productContainer=document.getElementById("product-container")
let search=document.getElementById("search")
let productlist=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    enteredvalue=event.target.value.toUpperCase()

    for(count=1;count<productlist.length;count=count+1){

         let productName=productlist[count].querySelector('h1').textContent

        if(productName[count].toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})