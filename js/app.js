let myIndex = 0;
carousel();

function carousel() {

  const x = document.getElementsByClassName("slide-img");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

let buyButton = document.getElementsByClassName("buy-now");
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
const sellBtn = document.querySelector('#sellBtn');
const alert = document.querySelector('.alert-warning');
const close = document.getElementsByClassName("closebtn");


sellBtn.addEventListener('click', () => {
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
})

let arrs =[];

for(const btn of buyButton){
  btn.addEventListener('click', () => {
    modal.style.display = "block";
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
   })
}






