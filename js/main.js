let cardContainer = document.querySelector(".row");

for (let i =1; i<=100; i++){

    if(i%3==0 && i%5==0){
        cardContainer.innerHTML += `<div class="col-2"><div class="d-flex align-items-center justify-content-center square square-fizz-buzz mb-3"><div>FizzBuzz</div></div></div>`;
    }
    else if(i % 3==0 ){
        cardContainer.innerHTML += `<div class="col-2"><div class="d-flex align-items-center justify-content-center square square-fizz mb-3"><div>Fizz</div></div></div>`;
    }
    else if(i% 5==0){
        cardContainer.innerHTML += `<div class="col-2"><div class="d-flex align-items-center justify-content-center square square-buzz mb-3"><div>Buzz</div></div></div>`;
    }
    else{
        cardContainer.innerHTML += `<div class="col-2"><div class="d-flex align-items-center justify-content-center square square-number mb-3"><div>${i}</div></div></div>`;
    }
}