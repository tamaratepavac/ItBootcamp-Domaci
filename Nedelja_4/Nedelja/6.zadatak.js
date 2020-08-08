/*6. На страници постоје 2 дугмета за наручивање 
(као на страници пицерије, ORDER)
    И постоје 2 дугмета за наручивање одмах 

    1. Дугмићи за 'наручивање' повећавају бројач
    2. Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку
     (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ])
    Напомена:  X је бројач, проверити да ли је бројач 0, и ако
     јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку*/


var brojac = 0

const naruciBtn = document.getElementById('narucivanje')
const naruciOdmahBtn = document.getElementById('narucivanjeOdmah')
const p = document.getElementById('brojPica')
p.textContent = brojac

function getDate() {
    return new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay()
}

function getTime() {
    return new Date().getHours() + ':' + new Date().getMinutes()
}

naruciBtn.addEventListener('click', () => {
    brojac++
    p.textContent = brojac
})
naruciOdmahBtn.addEventListener('click', () => {
    if (brojac == 0) {
        p.textContent = 'Korpa je prazna'
        return
    }

    p.textContent = `Наручили сте ${brojac} пица ${getDate()} ${getTime()}`
    brojac = 0


})
