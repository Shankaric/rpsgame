const resultcont=document.getElementById('resultcont');
const userimg=document.getElementById('userimg');
const compimg=document.getElementById('compimg');
const uscore=document.getElementById('uscore');
const cscore=document.getElementById('cscore');
var overall=document.getElementById('overall');
var p=0;
var c=0;
var round=0;
let person = prompt("Please enter your name");
document.getElementById('pname').innerHTML=person;
if(person != '' && person != null){
function btnvalue(value){
    round++;
    console.log(round);
    let val=value;
    computer=['rock','paper','scissor'];
    compchoose=computer[Math.floor(Math.random()*computer.length)];
    console.log(val);
    console.log(compchoose);
    if(val==compchoose){
        console.log('match Tie');
        resultcont.innerHTML='Match Tie';
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
        resultcont.innerHTML=person+ ' win';
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
     
        resultcont.innerHTML=person+ ' win';
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
       
        resultcont.innerHTML=person+ ' win';
        document.getElementById('userimg').src="./images/Scissors.png";
        document.getElementById('compimg').src="./images/cpaper.png";
        p++;
        uscore.textContent =p;
       }
       if(round===5){
        uscore.textContent=0;
        cscore.textContent=0;
        document.getElementById('overall').style.display="none";
        document.getElementById('resultdiv').style.display="block";
        if(val>compchoose){
            document.getElementById('result').innerHTML=person+ ' won';
        }
        else if(val==compchoose){
            document.getElementById('result').innerHTML='Match Tie';

        }
        else{
            document.getElementById('result').innerHTML='computer won';
        }
    

    }
}

}

else{
    alert('you must enter your name');
    location.reload();
}