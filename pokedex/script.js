const pokeContainer = document.getElementById('poke-container');
const pokemonCount = 150;
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

const mainTypes = Object.keys(colors);
console.log(mainTypes);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  createPokeCard(data);
};

const createPokeCard = (pokemon) => {
  const pokeEl = document.createElement('div');
  pokeEl.classList.add('pokemon');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, '0');
  const pokeTypes = pokemon.types.map((type) => type.type.name);
  let type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);

  const typeColor = colors[type];

  pokeEl.style.backgroundColor = typeColor;
  type = type[0].toUpperCase() + type.slice(1);

  const pokeInnerHTML = `
    <div class="img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
    </div>
    <div class="info">
      <span class="number">${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type"><span>${type}</span></small>
    </div>`;

  pokeEl.innerHTML = pokeInnerHTML;
  pokeContainer.appendChild(pokeEl);
};

fetchPokemons();
