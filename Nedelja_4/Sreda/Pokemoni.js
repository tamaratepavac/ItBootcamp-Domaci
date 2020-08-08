/*  1.Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)
Име
Врста
Способности (низ способности покемона)
Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))
Даље, направити низ од ових објеката
пикачу:
име: пикачу
врста: електрични
способности: Статички електрицитет,...
карактеристике: напад: 55, одбрана: 30, брзина: 90*/

const pokemons = [
    {
        name: "Raichu (Alola)",
        type: ["Electric", "Psychic"],
        moves: ["Thunder Shock", "Psychic"],
        stats: { Attack: 201, Defence: 154, Stamina: 155 }
    },
    {
        name: "Breloom",
        type: ["Fighting", "Grass"],
        moves: ["Counter", "Dynamic Punch"],
        stats: { Attack: 241, Defence: 144, Stamina: 155 }
    },
    {
        name: "Delcatty",
        type: "Normal",
        moves: ["Charm", "Wild Charge"],
        stats: { Attack: 132, Defence: 127, Stamina: 172 }
    },
    {
        name: "Aggron",
        type: ["Steel", "Rock"],
        moves: ["Smack Down", "Stone Edge"],
        stats: { Attack: 198, Defence: 257, Stamina: 172 }
    },
    {
        name: "Aron",
        type: ["Steel", "Rock"],
        moves: ["Metal Claw", "Iron Head"],
        stats: { Attack: 121, Defence: 141, Stamina: 137 }
    },
    {
        name: "Pichu",
        type: "Electric",
        moves: ["Thunder Shock", "Thunder Punch"],
        stats: { Attack: 77, Defence: 53, Stamina: 85 }
    }

]

/* 2. Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона   [<...>,...]*/

function moves() {
    let pokemonMoves = pokemons.map(el => el.moves)
    return pokemonMoves.flat()

}
console.log(moves())

// 3. Сортирати покемоне по брзини, растуће.

let pokemonStamina = pokemons.sort((a, b) => a.stats.Stamina - b.stats.Stamina)

console.log(pokemonStamina)