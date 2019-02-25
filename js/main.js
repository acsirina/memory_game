
var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png',
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png',
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png',
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png',
}];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
} else {
}
}



var flipCard = function(cardId) {
checkForMatch();

if (cardsInPlay.length === 2) {

} if (cardsInPlay[0] === cardsInPlay[1]) {
  alert('You found a match!');

} else {
	alert('Sorry, try again.');
}

console.log('User flipped ' + cards[cardId].rank);
console.log('User flipped ' + cards[cardId].cardImage);
console.log('User flipped ' + cards[cardId].suit);


};
cardsInPlay.push(cards['queen']);
cardsInPlay.push(cards['king']);
flipCard(0);
flipCard(2);

