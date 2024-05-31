const getData = async (createCards, url='https://rickandmortyapi.com/api/character') => {
    const request = await fetch(url)
    const response = await request.json()
    createCards(response)
}
const createCharCards = characters => {
    const {info, results} = characters
    const cardWrap = document.querySelector('.all_characters')
    results.forEach(character => {
        const card = document.createElement('div')
        card.classList.add('card')
        // добавляем card класс card
        card.style = 'width: 100%'
        card.innerHTML = 
        `
            <img src=${character.image} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${character.species}</li>
                <li class="list-group-item">${character.gender}</li>
                <li class="list-group-item d-flex align-items-center">${character.status} <span class="alive_status" style="background: ${ character.status === 'Alive' ? "#C4E74A" : "#EB4C42"}"></span></li>
            </ul>
        `
        cardWrap.append(card)

    })
}
getData(createCharCards)