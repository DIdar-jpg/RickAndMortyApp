const createCharCards = (characters) => {
    const {info, results} = characters
    console.log(info);
    console.log(results);
}
const getData = new Promise((resolve, reject) => {
    resolve(((() => {
        return fetch('https://rickandmortyapi.com/api/character')
        // fetch функция в js которая делает запрос на сервер и возвращает промис
    }))())
    reject('error')
}).then( res => res.json()).then( res => createCharCards(res))
// Анонимная функция - ф-я без названия. Удобно в случае если она является колбеком или
// самовызывашка