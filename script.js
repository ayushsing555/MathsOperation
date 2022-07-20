let responce,number,a=12,maximum_number,d,myAudio2;
const analysis_div = document.getElementsByClassName("analysis")[0];
const problem_div  = document.getElementsByClassName("problem")[0];
const analysis_btn = document.getElementById("analysis");
const reset_btn    = document.getElementsByTagName("button")[0];
const click        = document.getElementsByClassName("btn-click")[0];
const question_div = document.getElementsByClassName("col-4 bg-info p-4 text-black text-center")[0];
const answer_div   = document.getElementsByClassName("offset-1 bg-success text-black col-3 p-4  text-center")[0];
const responce_div = document.getElementsByClassName("offset-1 bg-danger p-4 col-3  text-black text-center")[0];
const operation    = ["*","/"];
const operation1   = ["+","-"];
let emptyArray     = [];
let flag           = false;
let check          = 0;
let random1        = find_operation(12);
let b              = 100;
let c              = 15;
const audio1 = new Audio("songs/buttonMusic.wav");
var myAudio = new Audio("songs/game.wav");
myAudio.play();
let myAudio1 = new Audio("songs/button1.wav");
setTimeout(() => {
     myAudio2 = new Audio('songs/backgroundMusic.mp3'); 
    if (typeof myAudio2.loop == 'boolean')
    {
        myAudio2.loop = true;
    }
    else
    {
        myAudio2.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    myAudio2.play();
}, 3000);
setInterval(()=>{
      b--;
      c--;

      document.getElementById("time").innerHTML = b;
      document.getElementById("timeParticular").innerHTML = c;
      if(c==0)
       {
        let Number          = document.getElementById("number").innerHTML;
        let random1        = find_operation(Number);
        document.getElementById("button1").innerHTML = random1[0];
        document.getElementById("button2").innerHTML = random1[1];
        c=15;
       }
       if(b==0)
        {
            analysis_btn.click();
        }
},1000)
document.getElementById("button1").innerHTML = random1[0];
document.getElementById("button2").innerHTML = random1[1];
function find_operation(number){
    let a                = Math.floor(Math.random()*2);
    let random_operator  = operation[a];
    if(random_operator =="*")
    {
        let random_number = Math.floor(Math.random()*9);
        if(random_number==0||random_number==1)
            random_number=2;
        emptyArray[1]     = `${random_operator}${random_number}`
        let value         = eval(`${number}${emptyArray[1]}`);
        let final_value   = eval(`${value}${operation1[Math.floor(Math.random()*2)]}${Math.floor(Math.random()*5)}`);
        final_value = Math.abs(final_value);
        emptyArray[0]     = `+${final_value}`;
    }
    else
        {
            let random_number = Math.floor(Math.random()*9);
            if(random_number==0||random_number==1)
                random_number=2;
            emptyArray[1]     = `${random_operator}${random_number}`
            let value         = Math.floor(eval(`${number}${emptyArray[1]}`));
            let absValue      = Math.abs(eval(`${number}-${value}`));
            let final_value   = eval(`${absValue}${operation1[Math.floor(Math.random()*2)]}${Math.floor(Math.random()*5)}`);
            final_value = Math.abs(final_value);
            emptyArray[0]     = `-${final_value}`;
        }
    return emptyArray;
}

// let operator1  = operation[random_operator];
click.addEventListener("click",(e)=>{
audio1.play();
flag = true;
c = 15;
let Number          = document.getElementById("number").innerHTML;
let value1          = document.getElementById("button1").innerHTML;
let value2          = document.getElementById("button2").innerHTML;
let maximum_number  = Math.max((Math.floor(eval(`${a}${value1}`))),(Math.floor(eval(`${a}${value2}`))));
a = maximum_number;
let question_subdiv = document.createElement("div");
let answer_subdiv   = document.createElement("div");
let responce_subdiv = document.createElement("div");
let responce_option = document.createElement("div");
let answer_option   = document.createElement("div");  
let option1         = document.createElement("div");       
let option2         = document.createElement("div");             
question_subdiv.classList.add('row','p-3');
responce_subdiv.classList.add('row','p-3');
answer_subdiv.classList.add('row','p-3');
option1.classList.add("col-3");
option1.append(value1+",");
question_subdiv.appendChild(option1);
option2.classList.add("col-3");
option2.append(value2);
question_subdiv.appendChild(option2);
question_div.appendChild(question_subdiv);

const btnPosition =  document.getElementsByClassName("operation")[e.target.value].innerHTML;
Number = Math.floor(eval(`${Number}${btnPosition}`));
document.getElementById("number").innerHTML = Number;

if(e.target.value==0)
    responce = document.getElementsByClassName("operation")[e.target.value].innerHTML;
else
    responce = document.getElementsByClassName("operation")[e.target.value].innerHTML;
responce_option.classList.add("col-12");
responce_option.append(`${responce} = ${Number}`);
responce_subdiv.appendChild(responce_option);
responce_div.appendChild(responce_subdiv);
answer_option.classList.add("col-12");
answer_option.append(maximum_number);
answer_subdiv.append(answer_option);
answer_div.append(answer_subdiv);
/*console.log( "first"+ value1);
console.log( "second"+ value2);
console.log( "third"+ value3);*/
random1      = find_operation(Number);
document.getElementById("button1").innerHTML = random1[0];
document.getElementById("button2").innerHTML = random1[1];
// console.log(e.target.id);
});
reset_btn.addEventListener("click",()=>{
  myAudio1.play();
  location.reload();
});
// console.log(analysis_btn);
analysis_btn.addEventListener("click",()=>{
myAudio2.pause();
myAudio1.play();
let userResult     = document.getElementById("number").innerHTML;
let computerResult = a;
console.log(computerResult);
console.log(userResult);
if((userResult==computerResult)&&flag){
      document.getElementById("result").innerHTML   = "You Won<br><br>🙌THANKS FOR PLAYING THE GAME🙌"
      document.getElementById("result").style.color =  "green"
}
else if(flag==false){
    document.getElementById("result").innerHTML = "you haven't played the game yet<br> <br>🙌YOU HAVE TO PLAY THE GAME FIRST🙌";
    document.getElementById("result").style.color = "brown"
}
else{
    if(userResult<0){
        a = -(userResult);
        var ans = `${computerResult+a}`;
    }
    else
        var ans = `${computerResult-userResult}`;
        document.getElementById("result").innerHTML = `You failed by ${computerResult}-${userResult}=${ans} points<br> <br>🙌THANKS FOR PLAYING THE GAME🙌`;
}
    let userName = document.getElementById("username").value.toUpperCase();
    document.getElementById("name").innerHTML=userName;
    problem_div.style.display="none";
    analysis_div.style.display="block";
});
