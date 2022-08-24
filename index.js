let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eghit = document.querySelector(".eghit")
let nine = document.querySelector(".nine")
let zero = document.querySelector(".zero")
let dot = document.querySelector(".dot")

let multiply = document.querySelector(".multiply")
let divide = document.querySelector(".divide")
let add = document.querySelector(".add")
let subtract = document.querySelector(".subtract")
let equal = document.querySelector(".equal")
let maininput = document.querySelector(".maininput")

let del = document.querySelector(".del")
let ac = document.querySelector(".ac")
/*
maininput.addEventListener("click", function(a,b){

})
*/
/*
equal.addEventListener("click", function(a,b,c) {
    let valuee = maininput.value

    if(valuee.includes(1)){
        return a;
    }
/*if(valuee.indexOf(add.textContent) > -1) {
    alert(valuee.indexOf(1))
}
})

*/

/*
function cal(a,b) {
    
    if(a * b){
        alert(a + b)
    }
    
}
cal(2,3)*/






let cuu = document.querySelector(".cuu")
 
let addi = 0;
add.addEventListener("click", function() {
    cuu.textContent = +cuu.textContent + +maininput.value 
    maininput.value = ""

    equal.addEventListener("click", function() {
        let alla = +maininput.value + +cuu.textContent 
        maininput.value = alla
        addi = 1
        cuu.textContent = ""
       })
       
       while(addi > 0){
           divide.disabled = true;
           subtract.disabled = true;
           multiply.disabled = true;
       }
})

let sub = 0;
subtract.addEventListener("click", function() {
      
    if(cuu.textContent == ""){
        cuu.textContent = maininput.value
    maininput.value = ""
    } else {
        cuu.textContent = +cuu.textContent - +maininput.value
    maininput.value = ""
    }

    equal.addEventListener("click", function() {
        let alls = +cuu.textContent - +maininput.value
        maininput.value = alls
        sub = 1;

        cuu.textContent = ""
       })

       while(sub > 0){
        divide.disabled = true;
        add.disabled = true;
        multiply.disabled = true;
    }
})

let mul = 0;
multiply.addEventListener("click", function() {
   /* cuu.textContent = maininput.value
    maininput.value = ""*/
    if(cuu.textContent == ""){
        cuu.textContent = maininput.value
    maininput.value = ""
    } else {
        cuu.textContent = +cuu.textContent * +maininput.value
    maininput.value = ""
    }

    equal.addEventListener("click", function() {
       /* let allm = +cuu.textContent * +maininput.value
        maininput.value = allm*/
        maininput.value = +cuu.textContent * +maininput.value
        mul = 1;
cuu.textContent = ""
       })

       while(mul > 0){
        divide.disabled = true;
        subtract.disabled = true;
        add.disabled = true;
    }
})

let divi = 0;
divide.addEventListener("click", function() {
 /*   cuu.textContent = maininput.value
    maininput.value = ""*/

    if(cuu.textContent == ""){
        cuu.textContent = cuu.textContent + maininput.value
    maininput.value = ""
    } else {
        cuu.textContent = +cuu.textContent / +maininput.value
    maininput.value = ""
    }

    equal.addEventListener("click", function() {
        let alld = +cuu.textContent / +maininput.value
        maininput.value = alld
        divi = 1

        cuu.textContent = ""
       })

       while(divi > 0){
        add.disabled = true;
        subtract.disabled = true;
        multiply.disabled = true;
    }
})

del.addEventListener("click", function() {
    maininput.value = ""

    addi = 0 
    sub = 0 
    divi = 0
    mul = 0
})

ac.addEventListener("click", function(){
    maininput.value = "";
    cuu.textContent = "";
})


zero.addEventListener("click", function() {

    if(maininput.value !== ""){
        maininput.value = maininput.value + zero.textContent
    }
    
})

one.addEventListener("click", function() {
    maininput.value = maininput.value + one.textContent
})

two.addEventListener("click", function() {
    maininput.value = maininput.value + two.textContent

})

three.addEventListener("click", function() {
    maininput.value = maininput.value + three.textContent

})

four.addEventListener("click", function() {
    maininput.value = maininput.value + four.textContent

})

five.addEventListener("click", function() {
    maininput.value = maininput.value + five.textContent

})

six.addEventListener("click", function() {
    maininput.value = maininput.value + six.textContent

})

seven.addEventListener("click", function() {
    maininput.value = maininput.value + seven.textContent

})

eghit.addEventListener("click", function() {
    maininput.value = maininput.value + eghit.textContent

})

nine.addEventListener("click", function() {
    maininput.value = maininput.value + nine.textContent

})

let dott = 0;
dot.addEventListener("click", function() {
    if(maininput.value != ""){
        maininput.value = maininput.value + dot.textContent
        dott = 1
    }  if (dott > 0){
    document.getElementById("dot").disabled = true;
    
    }
})
