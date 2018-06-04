var scores, roundscores, activePlayer, //dice; so these are the variable for the scores
scores = [0,0];
roundscores = 0;
activePlayer = 1;
document.querySelector('.dice').style.display = 'none';// so our dice is now gone
document.getElementById('score-0').textContent = '0';// so here we don't use the css style,so we don't use the hash symbole , so as we did with querySelector
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';// we set all values to 0
document.querySelector('.btn-roll').addEventListener('click', function(){
  var dice = Math.floor(Math.random() * 6) +1;
  var diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png'


});
