//4. Направити функцију која прима низ покемона, 
//пореди покемоне по јачини и враћа као победника
// оног који има највећу јачину напада.

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

function findStrongest (pokemoni) {
    let nizAttack = pokemoni.sort((a, b) => b.stats.Attack - a.stats.Attack)
    let strongestPokemon = nizAttack[0]
    return strongestPokemon
}
console.log(findStrongest(pokemons))
