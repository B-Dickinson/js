let res = document.getElementById('res');
let p = document.createElement('p');
let img = document.createElement('img');
let data = new Date();
let hora = data.getHours();

p.innerHTML = `Agora são ${hora} horas`;

if(hora >= 6 && hora <= 11){
    img.setAttribute('src','manha.png');
    document.body.style.backgroundColor = '#b1812e';
} else if(hora > 11 && hora <= 17){
    img.setAttribute('src','tarde.png');
    document.body.style.backgroundColor = '#A7756E';
} else {
    img.setAttribute('src','noite.png');
    document.body.style.backgroundColor = '#41324E';
}

res.appendChild(p);
res.appendChild(img);