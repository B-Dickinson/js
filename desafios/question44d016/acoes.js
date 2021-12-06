let txtAno = document.getElementById('ano');
let data = new Date();
let anoAtual = data.getFullYear();
let idade = 0;
let res = document.getElementById('res');
let sex = document.getElementsByName('sexo');
let sexo = '';
let img = document.createElement('img');



function isEmpty(){
    if(txtAno.value.length == 0){
        return true;
    } else {
        return false;
    }
}

function itsValid(){
    if(txtAno.value.length == 4){
        return true;   
    } else {
        return false;
    }
} 

function verificar(){
    let ano = Number(txtAno.value);
    
    if(isEmpty()){
        alert('Verifique os dados e tente novamente');
    } else if(!itsValid()){
        alert('Valor referente ao ano é inválido, tente outro ano.');
    } else {
        finish(ano);
    }
}

function whatIsTheSex(){

    if(sex[0].checked){
        sexo = 'Homem';
    } else{
        sexo = 'Mulher';
    }

}

function finish(ano){
    idade = (anoAtual - ano);
    whatIsTheSex();

    if(sexo === 'Homem'){
        if(idade <= 10){
            sexo = 'menino';
            img.setAttribute('src','homem-crianca.png');
            img.style.maxWidth = '400px';
            res.style.textAlign = 'center';
            res.innerHTML = `<h3>Detectamos um ${sexo} de ${idade} anos</h3>`;
            res.appendChild(img);
        } else if(idade < 21){
            sexo = 'rapaz';
            img.setAttribute('src','homem-jovem.png');
            img.style.maxWidth = '400px';
            res.style.textAlign = 'center';
            res.innerHTML = `<h3>Detectamos um ${sexo} de ${idade} anos</h3>`;
            res.appendChild(img);
        } else if(idade < 50){
            sexo = 'homem';
            img.setAttribute('src','homem-adulto.png');
            img.style.maxWidth = '400px';
            res.style.textAlign = 'center';
            res.innerHTML = `<h3>Detectamos um ${sexo} de ${idade} anos</h3>`;
            res.appendChild(img);
        } else {
            sexo = 'senhor';
            img.setAttribute('src','homem-idoso.png');
            img.style.maxWidth = '400px';
            res.style.textAlign = 'center';
            res.innerHTML = `<h3>Detectamos um ${sexo} de ${idade} anos</h3>`;
            res.appendChild(img);
        }
            document.body.style.backgroundColor = 'rgb(39, 79, 131)';
            document.body.style.transitionDuration = '0.5s';
    } else if(sexo === 'Mulher'){
        if(idade <= 10){
            sexo = 'menina';
            img.setAttribute('src','mulher-crianca.png');
            img.style.maxWidth = '400px';
            res.style.textAlign = 'center';
            res.innerHTML = `<h3>Detectamos uma ${sexo} de ${idade} anos</h3>`;
            res.appendChild(img);
        } else if(idade < 21){
            sexo = 'rapariga';
            img.setAttribute('src','mulher-jovem.png');
            img.style.maxWidth = '400px';
            res.style.textAlign = 'center';
            res.innerHTML = `<h3>Detectamos uma ${sexo} de ${idade} anos</h3>`;
            res.appendChild(img);
        } else if(idade < 50){
            sexo = 'mulher';
            img.setAttribute('src','mulher-adulta.png');
            img.style.maxWidth = '400px';
            res.style.textAlign = 'center';
            res.innerHTML = `<h3>Detectamos uma ${sexo} de ${idade} anos</h3>`;
            res.appendChild(img);
        } else {
            sexo = 'senhora';
            img.setAttribute('src','mulher-idosa.png');
            img.style.maxWidth = '400px';
            res.style.textAlign = 'center';
            res.innerHTML = `<h3>Detectamos um ${sexo} de ${idade} anos</h3>`;
            res.appendChild(img);
        } 
            document.body.style.backgroundColor = 'rgb(168, 94, 143)';
            document.body.style.transitionDuration = '0.5s';        
    }

}

