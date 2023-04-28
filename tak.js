
document.addEventListener('DOMContentLoaded', () => {
    const siema1 = document.querySelector('.napis1');
    const siema2 = document.querySelector('.napis2 ');
    const siema3 = document.querySelector('.napis3');
    console.log(siema2);

    

    const myInterval = setInterval(zmiana, 500);

function zmiana() {

    

     if (siema1.classList.contains('active')){
        siema1.classList.remove('active');
        siema2.classList.add('active');
     }

     else if (siema2.classList.contains('active'))
     {
        siema2.classList.remove('active');
        siema3.classList.add('active');
        
    }
    else if (siema3.classList.contains('active'))
    {
        siema3.classList.remove('active');
        siema1.classList.add('active');
    }
    }
})