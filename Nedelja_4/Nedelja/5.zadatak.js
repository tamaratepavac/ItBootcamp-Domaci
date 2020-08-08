

const pokemons = [
    {
        name: "Raichu (Alola)",
        type: ["Electric", "Psychic"],
        moves: ["Thunder Shock", "Psychic"],
		stats: { Attack: 201, Defence: 154, Stamina: 155 },
		img: 'https://www.pokepedia.fr/images/thumb/7/79/Raichu_d%27Alola-SL.png/1200px-Raichu_d%27Alola-SL.png'
    },
    {
        name: "Breloom",
        type: ["Fighting", "Grass"],
        moves: ["Counter", "Dynamic Punch"],
		stats: { Attack: 241, Defence: 144, Stamina: 155 },
		img: 'https://cdn.bulbagarden.net/upload/d/de/286Breloom.png'
    },
    {
        name: "Delcatty",
        type: "Normal",
        moves: ["Charm", "Wild Charge"],
		stats: { Attack: 132, Defence: 127, Stamina: 172 },
		img: 'https://i.pinimg.com/originals/82/b8/1a/82b81ae01fe42ab3b925d388576faf7a.jpg'
    },
    {
        name: "Aggron",
        type: ["Steel", "Rock"],
        moves: ["Smack Down", "Stone Edge"],
		stats: { Attack: 198, Defence: 257, Stamina: 172 },
		img: 'https://i.pinimg.com/originals/a1/44/47/a14447e3215e74758a2c5aa6c2219120.jpg'
    },
    {
        name: "Aron",
        type: ["Steel", "Rock"],
        moves: ["Metal Claw", "Iron Head"],
		stats: { Attack: 121, Defence: 141, Stamina: 137 },
		img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/304.png'
    },
    {
        name: "Pichu",
        type: "Electric",
        moves: ["Thunder Shock", "Thunder Punch"],
		stats: { Attack: 77, Defence: 53, Stamina: 85 },
		img: 'https://www.drawingtutorials101.com/drawing-tutorials/Anime-and-Manga/Pokemon/pichu/how-to-draw-Pichu-from-Pokemon-step-0.png'
	}

]

let divLista = document.getElementById('lista')

const prikaziBtn = document.getElementById('prikaz')
prikaziBtn.addEventListener('click', () => {
	removeAllChildren(divLista)
	
	pokemons.forEach(el => {
		let div = document.createElement('div')
		divLista.appendChild(div)

		let pOpis = document.createElement('p')
		div.appendChild(pOpis)
		pOpis.textContent = el.name

		let slika = document.createElement('img')
		slika.src = el.img
		slika.width = 200
		div.appendChild(slika)
		
	})
})

function findStrongest (pokemoni) {
    pokemoni.sort((a, b) => b.stats.Attack - a.stats.Attack)
    let strongestPokemon = pokemoni[0]
    return strongestPokemon
}

const pobednikBtn = document.getElementById('pobednik')
pobednikBtn.addEventListener('click', () =>  {
	removeAllChildren(divLista)
	let strongest = findStrongest(pokemons)
	
	let div = document.createElement('div')
	divLista.appendChild(div)

	let pOpis = document.createElement('p')
	div.appendChild(pOpis)
	pOpis.textContent = strongest.name

	let slika = document.createElement('img')
	slika.src = strongest.img
	slika.width = 200
	div.appendChild(slika)
})

function removeAllChildren(element) {
	while (element.lastElementChild) {
		element.removeChild(element.lastElementChild);
	}
}
	
	


