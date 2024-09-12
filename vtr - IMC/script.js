const form = document.getElementById('form');
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    calcularIMC()
})


function calcularIMC(){
    const resultadoHtml = document.getElementById('resultado');
    let peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));;
    let altura = document.getElementById('altura').value.replace(',', '.');;
    let IMC = (peso / (altura*altura));
    
    console.log(IMC)
    resultadoHtml.textContent = IMC.toFixed(2);
}

function modoWhite(){
    let body = document.getElementById('body');
    let title = document.getElementById('title');
    let inputPeso = document.getElementById('peso');
    let inputAltura = document.getElementById('altura'); 
    
    title.style.color = '#5D55D4';
    body.style.background = 'white';
    body.style.color = '#5D55D4';
    inputPeso.style.border = '2px solid #5E5DF0';
    inputAltura.style.border = '2px solid #5E5DF0';
}

function modoDark(){
    let body = document.getElementById('body');
    let inputPeso = document.getElementById('peso');
    let inputAltura = document.getElementById('altura'); 

    body.style.background = '#13112F';
    body.style.color = 'white';
    body.style.transition = '1s';
    inputPeso.style.border = 'none';
    inputAltura.style.border = 'none';
}

