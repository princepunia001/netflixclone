
const answers= document.querySelectorAll('.answer')
const ques1=document.querySelector('#question1')
const ans1=document.querySelector('#answer1')
const ques2=document.querySelector('#question2')
const ans2=document.querySelector('#answer2')
const ques3=document.querySelector('#question3')
const ans3=document.querySelector('#answer3')
const ques4=document.querySelector('#question4')
const ans4=document.querySelector('#answer4')
const ques5=document.querySelector('#question5')
const ans5=document.querySelector('#answer5')
const ques6=document.querySelector('#question6')
const ans6=document.querySelector('#answer6')

answers.forEach((e)=>{
e.style.display='none'
})
ques1.addEventListener('click',()=>{
    if(ans1.style.display==='none'){
    ans1.style.display='inherit';
    
}
    else {ans1.style.display='none';}
})
ques2.addEventListener('click',()=>{
    if(ans2.style.display==='none'){
    ans2.style.display='inherit';
}
    else {ans2.style.display='none';}
})
ques3.addEventListener('click',()=>{
    if(ans3.style.display==='none'){
    ans3.style.display='inherit';
}
    else {ans3.style.display='none';}
})
ques4.addEventListener('click',()=>{
    if(ans4.style.display==='none'){
    ans4.style.display='inherit';
}
    else {ans4.style.display='none';}
})
ques5.addEventListener('click',()=>{
    if(ans5.style.display==='none'){
    ans5.style.display='inherit';
}
    else {ans5.style.display='none';}
})
ques6.addEventListener('click',()=>{
    if(ans6.style.display==='none'){
    ans6.style.display='inherit';
}
    else {ans6.style.display='none';}
})