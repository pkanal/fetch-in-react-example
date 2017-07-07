import { combineEpics } from 'redux-observable';

import { FETCH_POKEMON, setPokemon } from '../actions';
import { fetchPokemon } from '../api/pokemon';

const fetchPokemonEpic = action$ =>
  action$.ofType(FETCH_POKEMON)
  .mergeMap(action => fetchPokemon(action.payload))
  .map(response => setPokemon(response));

export default combineEpics(
  fetchPokemonEpic
)
