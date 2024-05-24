let randum =parseInt(Math.random() * 100 + 1);
  const userinput = document.querySelector('#guessField');
   const submit=document.querySelector('#subt');
   const prevguesses = document.querySelector('.guesses');
   const remain = document.querySelector('.lastResult');
    let p = document.createElement('p');
    let arr = [];
    const loworhig = document.querySelector('.lowOrHi');
    const startover = document.querySelector('.resultParas');
    let numguess = 0;
    let playgame = true;

    if (playgame){
      submit.addEventListener('click',function(e){
        e.preventDefault();
       const input = parseInt(userinput.value);
       validateguess(input);
      });
    }
     function validateguess(input){
       if(isNaN(input))
       {
         alert('please enter valid number');
       } else if(input>100)
       {
         alert('please enter within 100 ');
       } else {  numguess++;
        if(numguess === 10)
       { valuecleaner(input);
        checkguess(input);
            displaymessage(`game over chutya. the number is ${randum}`)
            endgame();
        } else
        { ;
            checkguess(input);
          valuecleaner(input);

        }
      }
    }
    function valuecleaner(input)
    {
      userinput.value = '';
      prevguesses.innerHTML += `${input},  `;
      
      remain.innerHTML = `${10-numguess}`;
     
    }
    function checkguess(input)
    {
      if(randum===input)
      {
        displaymessage("congratulation !!you guess right");
        endgame();
      }
      else if(randum > input)
      {
        displaymessage( " low  number")
      }
      else{
        displaymessage("greater number")
      }
    

    }
    function displaymessage(message)
    {
      loworhig.innerHTML = `<h2> ${message}</h2>`
    }
    function endgame()
    {
      userinput.value = '';
      userinput.setAttribute('disabled','')
      p.classList.add('button')
      p.innerHTML = 'start new game',
      startover.appendChild(p);
      playgame = false;
      newgame();
    }
      function newgame()
      {
        const newgame = document.querySelector('.button');
        newgame.addEventListener('click',function(e){
          randum = parseInt(Math.random() * 100 + 1);
          numguess = 0;
          prevguesses.innerHTML = '';
          remain.innerHTML = `${10-numguess}`;
          userinput.removeAttribute('disabled');
          startover.removeChild(p);
        
          playgame = true;

        })

      }

      