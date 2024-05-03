const createCharCards = characters => {
    const {info, results} = characters
    // Используем деструктуризацию для получения данных из обьекта в переменные
    const cardWrap = document.querySelector('.all_characters')
    results.forEach(character => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.style = 'width: 100%'
        card.id = character.id
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
    console.log(info);
    console.log(results);
}
// async function name(params) {
//     Асинхронное действие
// }
const getData = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        createCharCards(data)
    } catch (error) {
        console.log(`Error is: ${error}`);
    } finally{
        console.log('Final!');
    }
}
getData()
// const getData = new Promise((resolve, reject) => {
//     resolve(((() => {
//         return fetch('https://rickandmortyapi.com/api/character')
//         // fetch функция в js которая делает запрос на сервер и возвращает промис
//     }))())
//     reject('error')
// }).then( res => res.json()).then( res => createCharCards(res))
// Анонимная функция - ф-я без названия. Удобно в случае если она является колбеком или
// самовызывашка
