var FreshDeck = function(deck) {
  var fDeck = shuffle(deck);

  return fDeck
};

var MultiDeck = function(deck, n) {
  var n = n || 1;
  var fDeck = multiDeck(deck, n);

  return fDeck
};



  
var deck = [];
  
deck.push('Ah')
deck.push('2h')
deck.push('3h')
deck.push('4h')
deck.push('5h')
deck.push('6h')
deck.push('7h')
deck.push('8h')
deck.push('9h')
deck.push('10h')
deck.push('Jh')
deck.push('Qh')
deck.push('Kh')

deck.push('Ac')
deck.push('2c')
deck.push('3c')
deck.push('4c')
deck.push('5c')
deck.push('6c')
deck.push('7c')
deck.push('8c')
deck.push('9c')
deck.push('10c')
deck.push('Jc')
deck.push('Qc')
deck.push('Kc')

deck.push('Ad')
deck.push('2d')
deck.push('3d')
deck.push('4d')
deck.push('5d')
deck.push('6d')
deck.push('7d')
deck.push('8d')
deck.push('9d')
deck.push('10d')
deck.push('Jd')
deck.push('Qd')
deck.push('Kd')

deck.push('As')
deck.push('2s')
deck.push('3s')
deck.push('4s')
deck.push('5s')
deck.push('6s')
deck.push('7s')
deck.push('8s')
deck.push('9s')
deck.push('10s')
deck.push('Js')
deck.push('Qs')
deck.push('Ks')








function shuffle(arr) {
  var result = []
  var freshDeck = {};
  while (result.length < 52) {
    var ind = 52 * (Math.random());
    ind = Math.floor(ind)
    var draw = arr[ind];
    if (!freshDeck[draw]) {
      freshDeck[draw] = draw;
      result.push(draw);
     
    } else {
      
    }

  }
  return result;
};



function multiDeck(arr, n) {
  var result = []
  var freshDeck = {};
  while (result.length < 52 * n) {
    var ind = 52 * (Math.random());
    ind = Math.floor(ind)
    var draw = arr[ind];
    
      if (!freshDeck[draw]) {
      freshDeck[draw] = 1;
      result.push(draw);  
      } else if (freshDeck[draw] < n) {
        result.push(draw);
        freshDeck[draw] += 1;
        
    } else if (freshDeck[draw] > n) {
        
    }

  }
  
  return result;
} 




var multiDano = MultiDeck(deck, 10)
                          
                      

console.log(multiDano);
