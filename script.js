let randomNumber=parseInt(Math.random()*100)
const submit=document.querySelector('#subt')
const input=document.querySelector('#guessField')
const guesses=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lh=document.querySelector('.lh')
const start=document.querySelector('.resultParas')

const p=document.createElement('p')
let prevguess=[]
let numguess=1
let playgame=true
console.log(lh)
if(playgame)
{
    submit.addEventListener('click',function(e)
{
    e.preventDefault()
   const guess= parseInt(input.value)
   validate(guess)

})
}
function validate(guess)
{
    if(isNaN(guess))
        alert('plsese enter valid number')
    else if(guess<1||guess>100)
        alert('please enter a valid number range 1-100')
       else
       {
        prevguess.push(guess)
        if(numguess===11)
           { displayguess(guess)
            display(`Game Over!!..Random number was ${randomNumber}`)
            endgame()
           }
           else{
            displayguess(guess)
            checkguess(guess)
           }
       } 
}


function checkguess(guess)
{
  if(guess===randomNumber)
  {
    display(`You Guessed it right..Welldone`)
    endgame()
  }
  else
  {
    if(guess<randomNumber)
    {
        display(`Number is TOO low`)
    }
    if(guess>randomNumber)
        {
            display(`Number is TOO high`)
        }
  }

}
function displayguess(guess)
{
input.value=''
guesses.innerHTML+=`${guess} `
numguess+=1
remaining.innerHTML=`${11-numguess}`
}

function display(message)
{

    lh.innerHTML=`<h3>${message}</h3>`
}
function newgame()
{
const ngbutton=document.querySelector('#newgame')
ngbutton.addEventListener('click',function(e)
{
    randomNumber=parseInt(Math.random()*100)
    prevguess=[]
    numguess=1
    guesses.innerHTML=''
   remaining.innerHTML=`${11-numguess}`
   input.removeAttribute('disabled')
   start.removeChild(p)
})
}
function endgame()
{
   input.value=''
   input.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML=`<h2 id="newgame">Start New Game</h2>`
   start.appendChild(p)
   playgame=false
   newgame()
}