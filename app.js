var p = document.querySelector("#para");

var img_2 = document.querySelector("#img_2")
var box_1 = document.querySelector("#box_1")

function toss(){
    var abc = Math.ceil(Math.random()*2);
    if(abc == 1){
        box_1.src ="./images-removebg-preview.png "
        p.innerHTML = `<p id="p_js">You won the toss</p>`
    }else if(abc == 2){
        box_1.src = "./images__1_-removebg-preview.png"
        p.innerHTML = `<p id="p_js2">You lost the toss</p>`
    }
}
function toos2(){
    var cd = Math.ceil(Math.random()*2);
    if(cd == 2){
        box_1.src= "./images__1_-removebg-preview.png";
        p.innerHTML = `<p id="p_js">You won the toss</p>`

    }else if(cd == 1){
        box_1.src="./images-removebg-preview.png"
        p.innerHTML = `<p id="p_js2">You lost the toss</p>`


    }
}




// var p = document.querySelector("p");
// var haid = document.querySelector("#haid")


// function toos(para){
//  var abc = Math.ceil(Math.random()*2);
//  if(abc == 1){
//     p.innerHTML = "your don"
//  }else if(abc == 2){
//     p.innerHTML ="your loos"
//  }
// }