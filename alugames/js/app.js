function alterarStatus(id) {
    let gameClick = document.getElementById(`game-${id}`);
    let img = gameClick.querySelector('.dashboard__item__img');
    let botao = gameClick.querySelector('.dashboard__item__button');

    if(img.classList.contains('dashboard__item__img--rented')){
        img.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else{
        img.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}