/*
Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a 
banshee but would also like to lead a normal life, with other activities. But he just 
can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1

The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'
*/

function paul(x) {
    let kata = x.filter(x => x === 'kata');
    let petesKata = x.filter(x => x === 'Petes kata');
    let eating = x.filter(x => x === 'eating');

    let kataPoints = kata.length * 5;
    let petesKataPoints = petesKata.length * 10;
    let eatingPonits = eating.length * 1;

    let totalPoints = kataPoints + petesKataPoints + eatingPonits;

    if (totalPoints > 100) { return 'Miserable!'; }
    else if (totalPoints < 100 && totalPoints >= 70) { return 'Sad!'; }
    else if (totalPoints < 70 && totalPoints >= 40) { return 'Happy!'; }
    else if (totalPoints < 40) { return 'Super happy!'; }

}

/*
function paul(arr){
  const dic = {kata: 5, 'Petes kata': 10, life: 0, eating: 1}
  const num = arr.reduce( (a, i)=> +a + dic[i], 0)
  return num < 40 ? 'Super happy!' : num < 70 ? 'Happy!' : num < 100 ? 'Sad!' : 'Miserable!'
}
*/