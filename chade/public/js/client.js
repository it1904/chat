const socket = io();
const prihlaseni = document.getElementById('prihlaseni');
const username = document.getElementById('username');
const login = document.getElementById('continue');
const send = document.getElementById('send');
const message = document.getElementById('message');
const boxZ = document.getElementById('zadejZpravu');
const chede = document.getElementById('cede');
let uzivatel;

boxZ.style.display = 'none';

login.addEventListener('click',function(e){
    if(username.value){
        console.log(username.value);
        uzivatel = username.value;
        socket.emit('login', username.value);
    }
});

socket.on('message',msg =>{
    console.log(msg);
    prihlaseni.style.display = 'none';
    boxZ.style.display = 'block';
})

send.addEventListener('click',function(e){
    if(message.value){
        console.log(message.value);
        socket.emit('chat', message.value, uzivatel);
    }
})

socket.on('chat', (msg, username) => {
    console.log(msg);
    chede.innerHTML += '<div><strong style = "color: navy;">' + username + '</strong> <i>píše</i>: ' + msg + '</div>';
});