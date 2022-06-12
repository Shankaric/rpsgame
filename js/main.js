const resultcont=document.getElementById('resultcont');
const userimg=document.getElementById('userimg');
const compimg=document.getElementById('compimg');
function btnvalue(value){
    let val=value;
    computer=['rock','paper','scissor'];
    compchoose=computer[Math.floor(Math.random()*computer.length)];
    console.log(val);
    console.log(compchoose);
    if(val==compchoose){
        console.log('match draw');
        resultcont.innerHTML='match draw';
        if(val='rock'){
            document.getElementById('userimg').src="./images/Rock.png";
        }
        else if(val='paper'){
            document.getElementById('userimg').src="./images/paper.png";
        }
        else{
            document.getElementById('userimg').src="./images/Scissors.png";  
        }
         
        if(compchoose='rock'){
            document.getElementById('compimg').src="./images/cRock.png";
        }
        else if(compchoose='paper'){
            document.getElementById('compimg').src="./images/cpaper.png";
        }
        else{
            document.getElementById('compimg').src="./images/cScissors.png";
        }
       }
       else if(val=='rock' && compchoose=='paper'){
        console.log('computer win');
        resultcont.innerHTML='computer win';
        document.getElementById('userimg').src="./images/Rock.png";
      document.getElementById('compimg').src="./images/cpaper.png";
    
       }
       else if(val=='rock' && compchoose=='scissor'){
        console.log('you win');
        resultcont.innerHTML='you win';
        document.getElementById('userimg').src="./images/Rock.png";
        document.getElementById('compimg').src="./images/cScissors.png";
    
       }
       else if(val=='paper' && compchoose=='scissor'){
        console.log('computer win');
        resultcont.innerHTML='computer win';
        document.getElementById('userimg').src="./images/paper.png";
        document.getElementById('compimg').src="./images/cScissors.png";
    
       }
       else if(val=='paper' && compchoose=='rock'){
        console.log('you win');
        resultcont.innerHTML='you win';
        document.getElementById('userimg').src="./images/paper.png";
        document.getElementById('compimg').src="./images/cRock.png";
    
       }

       else if(val=='scissor' && compchoose=='rock'){
        console.log('computer win');
        resultcont.innerHTML='computer win';
        document.getElementById('userimg').src="./images/Scissors.png";
        document.getElementById('compimg').src="./images/cRock.png";
    
       }
       else if(val=='scissor' && compchoose=='paper'){
        console.log('you win');
        resultcont.innerHTML='you win';
        document.getElementById('userimg').src="./images/Scissors.png";
        document.getElementById('compimg').src="./images/cpaper.png";
    
       }








}