import Deck from '../data/deck.js';
import { CreatePlayerCard, CreateComputerCard } from './Player.mjs';

export function GenerateRandomImgPathCard() {
    let card = getRandomCard();
	return '/libs/assets/images/' + card.value + '_' + card.suit + '.png'	
}

function getRandomCard() {
	var obj_keys = Object.keys(Deck);
	var ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
	return Deck[ran_key];
}
