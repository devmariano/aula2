var user = {
    username:'',
    password:''
}
let login= document.getElementById('login');
console.log(login)
let botaoCriado= document.getElementById('teste');
botaoCriado.innerHTML = `<button id="logon" style="margin-top: 10px; padding: 10px; border-radius: 15px; background-color:blue">Logar</button>`
//login.onclick=clicou
login.addEventListener('click',clicou)
function clicou(){
    alert('este cara clicou')
    login.removeEventListener('click',clicou)
}
let logon= document.getElementById('logon');
logon.addEventListener('click',ativa)
function ativa(){
    alert('reativado')
    login.addEventListener('click',clicou)
}
//const handleChange = (event) => {console.log(event.target.value)}
const pickUser = (event) => {user.username=event.target.value}
console.log(user.username)
//let username = document.getElementById('username')
//username.addEventListener('change',handleChange)