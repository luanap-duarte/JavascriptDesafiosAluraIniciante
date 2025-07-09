let amigos = [];

function adicionar(){
    let adicionarAmigo = document.getElementById('nome-amigo');
    if(adicionarAmigo.value == ''){
        console.log('Adicione o nome do amigo');
        return;
    }
    if(amigos.includes(adicionarAmigo.value)){
        console.log('Nome já adicionado');
        return;
    }
    // Funcionalidade faltante: Validar nomes iguais que tenham letras maisculas e minusculas como diferença

    let listaAmigos =  document.getElementById('lista-amigos');
    amigos.push(adicionarAmigo.value);

    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = adicionarAmigo.value;
    }else{
        listaAmigos.textContent = listaAmigos.textContent  + ", " + adicionarAmigo.value;
    }
    adicionarAmigo.value = '';
}

function sortear(){
    if (amigos.length < 4){
        console.log('Adicione pelo menos 4 amigos');
        return;
    }

     embaralhar(amigos);
     let listaSorteio = document.getElementById('lista-sorteio');
     for(let i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '> ' + amigos[0] + '<br>';
        } else {
        listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '> '+ amigos[i + 1] + '<br>';}
    }
}

function embaralhar(lista) {

    let indice = lista.length
    
    while(indice) {
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}



function reiniciar(){
     amigos = [];
     listaAmigos =  document.getElementById('lista-amigos').innerHTML = '';
     listaSorteio = document.getElementById('lista-sorteio').innerHTML = '';
}