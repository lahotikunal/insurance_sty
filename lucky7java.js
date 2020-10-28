var diceValue1,
    diceValue2;
var diceValue,
    potValue,
    radioValue = '=7',
    bidValue = 15;

function myRadioValue(dice) {
    radioValue = dice;
    return;
}

//slider code
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  bidValue = parseInt(this.value);
}
//slider code


function myFunction()
{
  let a = arguments[0],
      b = arguments[1],
      c = arguments[2],
      d = arguments[3],
      e = arguments[4],
      f = arguments[5],
      g = arguments[6],
      h = arguments[7],
      i = arguments[8],
      value = arguments[9];
  
  document.getElementById(a).style.display = 'none';
  document.getElementById(b).style.display = 'none';
  document.getElementById(c).style.display = 'none';
  document.getElementById(d).style.display = 'none';
  document.getElementById(e).style.display = 'none';
  document.getElementById(f).style.display = 'none';
  document.getElementById(g).style.display = 'none';
  document.getElementById(h).style.display = 'none';
  document.getElementById(i).style.display = 'none';
  
  switch(value){
  case 1:
    {
      document.getElementById(e).style.display = 'block';
        break;
    }
  case 2:
    {
      document.getElementById(g).style.display = 'block';
      document.getElementById(c).style.display = 'block';
        break;
    }
    case 3:
    {
      document.getElementById(g).style.display = 'block';
      document.getElementById(e).style.display = 'block';
      document.getElementById(c).style.display = 'block';
        break;
    }
    case 4:
    {
      document.getElementById(a).style.display = 'block';
      document.getElementById(c).style.display = 'block';
      document.getElementById(g).style.display = 'block';
      document.getElementById(i).style.display = 'block';
        break;
    }
  case 5:
    {
      document.getElementById(a).style.display = 'block';
      document.getElementById(c).style.display = 'block';
      document.getElementById(e).style.display = 'block';
      document.getElementById(g).style.display = 'block';
      document.getElementById(i).style.display = 'block';
        break;
    }
  case 6:
    {
      document.getElementById(a).style.display = 'block';
      document.getElementById(c).style.display = 'block';
      document.getElementById(d).style.display = 'block';
      document.getElementById(f).style.display = 'block';
      document.getElementById(g).style.display = 'block';
      document.getElementById(i).style.display = 'block';
        break;
    }
  } 
  return;
}

//rules
rules.addEventListener('click', function() {
  //document.getElementById('text-area').innerHTML = "Put the bid the value of bid is fixed 15, and initial sum of 90 is given , select one of <7 , =7 or >7 and, roll the dice.If you select one of <7 and the sum of dice more than 7 ,  else if you choice option more than >7 and the sum of dice is more than 7 the initial value is  "+"<br>"+"added with twice the bidding value but the the choice is not same as the dice sum the bidding value is removed from the initial sum.The other choice is to select 7 and sum of dice is  7 you get 3 times the bidding value. If you select 7 and the value is anything other than 7 the bidding value is removed from the initial sum. "+"<br>"+"You will be given a option of insurance at certian point, if you choose to select insurance your loss "+"<br>"+"<br>"+"will be compensated(no money will removed in case of "+"<br>"+"loss) but a insurance premium will be removed from "+"<br>"+"your total amount at each roll , but if you win you "+"<br>"+"get the winning amount minus the premium amount "+"<br>"+"added to total sum "+"<br>"+"Have Fun!";
  //document.getElementById('rules').style.display = 'none';
    {location.href = "https://lahotikunal.github.io/introduction_page/";}
});

next_game.addEventListener('click',function(){
  if(potValue<0)
    {location.href = "https://lahotikunal.github.io/insurance_sefi/";}
});
//rules

button.addEventListener('click',function()
 {
     diceValue1 = Math.floor(Math.random()*6)+1;
     diceValue2 = Math.floor(Math.random()*6)+1;
     myFunction('a','b','c','d','e','f','g','h','i',diceValue1);
     myFunction('a2','b2','c2','d2','e2','f2','g2','h2','i2',diceValue2);
     diceValue = diceValue1 + diceValue2;
     potValue = parseInt(document.getElementById("pot").innerHTML);
     if(radioValue === '>7')
       {
       if(diceValue > 7)
         {
           potValue += bidValue;
         }
         else
           {
             potValue -= bidValue;
           }
       }
 
      else if(radioValue === '<7')
      {
        if(diceValue <7)
          {
            potValue += bidValue;
          }
        else
          {
            potValue -= bidValue;
          }
      }
      else
      {
       if(diceValue == 7)
         {
           potValue =  2*bidValue + potValue;
         }
         else
           {
             potValue -= bidValue;
           }
        }
  if(potValue<=45){
    
      pass=prompt('Do you need insurance y/n ');
      if(pass=='y'){
    
              if (window.confirm('If you click "ok" you would be redirected  ')) 
                    {
                                      window.location.href='https://lahotikunal.github.io/with60/';
                    }
      }
      else  {
              if (window.confirm('If you click "ok" you would be redirected  ')) 
                    {
                    window.location.href='https://lahotikunal.github.io/without60/';
                    };
        
            }
          //}
    
  }
  
  document.getElementById("pot").innerHTML = potValue;
     
});



