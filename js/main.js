const resultcont=document.getElementById('resultcont');
const userimg=document.getElementById('userimg');
const compimg=document.getElementById('compimg');
const uscore=document.getElementById('uscore');
const cscore=document.getElementById('cscore');
var p=0;
var c=0;
    
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
      c++;
      cscore.innerHTML=c;
    
       }
       else if(val=='rock' && compchoose=='scissor'){
        console.log('you win');
        resultcont.innerHTML='you win';
        document.getElementById('userimg').src="./images/Rock.png";
        document.getElementById('compimg').src="./images/cScissors.png";
        p++;
        uscore.textContent=p;
       }
       else if(val=='paper' && compchoose=='scissor'){
        console.log('computer win');
        resultcont.innerHTML='computer win';
        
        document.getElementById('userimg').src="./images/paper.png";
        document.getElementById('compimg').src="./images/cScissors.png";
        c++;
        cscore.textContent=c;
       }
       else if(val=='paper' && compchoose=='rock'){
        console.log('you win');
     
        resultcont.innerHTML='you win';
        document.getElementById('userimg').src="./images/paper.png";
        document.getElementById('compimg').src="./images/cRock.png";
        p++;
        uscore.textContent=p;
       }

       else if(val=='scissor' && compchoose=='rock'){
        console.log('computer win');
        resultcont.innerHTML='computer win';
       
        document.getElementById('userimg').src="./images/Scissors.png";
        document.getElementById('compimg').src="./images/cRock.png";
        c++;
        cscore.textContent =c;
       }
       else if(val=='scissor' && compchoose=='paper'){
        console.log('you win');
       
        resultcont.innerHTML='you win';
        document.getElementById('userimg').src="./images/Scissors.png";
        document.getElementById('compimg').src="./images/cpaper.png";
        p++;
        uscore.textContent =p;
       }
     



}