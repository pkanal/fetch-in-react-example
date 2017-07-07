// Types: use these to listen
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const FETCH_POKEMON = 'FETCH_POKEMON';
export const SET_POKEMON = 'SET_POKEMON';


// Action creators: use these to dispatch
export const inputChange = value => ({
  type: INPUT_CHANGE,
  payload: value,
});

export const fetchPokemon = id => ({
  type: FETCH_POKEMON,
  payload: id
});

export const setPokemon = pokemon => ({
  type: SET_POKEMON,
  payload: pokemon
})
