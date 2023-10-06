const navLinkEls = document.querySelectorAll('.nav-link')
const windowPathname = window.location.pathname

navLinkEls.forEach(navLinkEl => {
 const navLinkPathname = new URL(navLinkEl.href).pathname

 if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')) {
  navLinkEl.classList.add('active-link')
 }
})

const faqQuestion = document.querySelector('.faq-question')
const faqAnswer = document.querySelector('.faq-answer')
const faqs = document.querySelectorAll('.faq')
const faqBtn = document.querySelector('.faq-btn')
const faqButton = document.querySelector('.faq-button')
const questionOne = document.getElementById('question-one')
const answerOne = document.getElementById('answer-one')
const questionTwo = document.getElementById('question-two')
const answerTwo = document.getElementById('answer-two')
const questionThree = document.getElementById('question-three')
const answerThree = document.getElementById('answer-three')
const questionFour = document.getElementById('question-four')
const answerFour = document.getElementById('answer-four')
const questionFive = document.getElementById('question-five')
const answerFive = document.getElementById('answer-five')
const questionSix = document.getElementById('question-six')
const answerSix = document.getElementById('answer-six')
const questionSeven = document.getElementById('question-seven')
const answerSeven = document.getElementById('answer-seven')
const questionEight = document.getElementById('question-eight')
const answerEight = document.getElementById('answer-eight')
const questionNine = document.getElementById('question-nine')
const answerNine = document.getElementById('answer-nine')
const questionTen = document.getElementById('question-ten')
const answerTen = document.getElementById('answer-ten')
const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')
const btn5 = document.getElementById('btn-5')
const btn6 = document.getElementById('btn-6')
const btn7 = document.getElementById('btn-7')
const btn8 = document.getElementById('btn-8')
const btn9 = document.getElementById('btn-9')
const btn10 = document.getElementById('btn-10')

questionOne.addEventListener('click', () => {
 if (answerOne.style.display === 'none'){
  answerOne.style.display = 'block'
 }else {
  answerOne.style.display = 'none'
 }
 if (btn1.style.transform ==='rotate(0deg)'){
  btn1.style.transform = 'rotate(90deg)'
 } else{
  btn1.style.transform = 'rotate(0deg)'
 }
})
questionTwo.addEventListener('click', () => {
 if (answerTwo.style.display === 'none'){
  answerTwo.style.display = 'block'
 }else {
  answerTwo.style.display = 'none'
 }
 if (btn2.style.transform ==='rotate(0deg)'){
  btn2.style.transform = 'rotate(90deg)'
 } else{
  btn2.style.transform = 'rotate(0deg)'
 }
})
questionThree.addEventListener('click', () => {
 if (answerThree.style.display === 'none'){
  answerThree.style.display = 'block'
 }else {
  answerThree.style.display = 'none'
 }
 if (btn3.style.transform ==='rotate(0deg)'){
  btn3.style.transform = 'rotate(90deg)'
 } else{
  btn3.style.transform = 'rotate(0deg)'
 }
})
questionFour.addEventListener('click', () => {
 if (answerFour.style.display === 'none'){
  answerFour.style.display = 'block'
 }else {
  answerFour.style.display = 'none'
 }
 if (btn4.style.transform ==='rotate(0deg)'){
  btn4.style.transform = 'rotate(90deg)'
 } else{
  btn4.style.transform = 'rotate(0deg)'
 }
})
questionFive.addEventListener('click', () => {
 if (answerFive.style.display === 'none'){
  answerFive.style.display = 'block'
 }else {
  answerFive.style.display = 'none'
 }
 if (btn5.style.transform ==='rotate(0deg)'){
  btn5.style.transform = 'rotate(90deg)'
 } else{
  btn5.style.transform = 'rotate(0deg)'
 }
})
questionSix.addEventListener('click', () => {
 if (answerSix.style.display === 'none'){
  answerSix.style.display = 'block'
 }else {
  answerSix.style.display = 'none'
 }
 if (btn6.style.transform ==='rotate(0deg)'){
  btn6.style.transform = 'rotate(90deg)'
 } else{
  btn6.style.transform = 'rotate(0deg)'
 }
})
questionSeven.addEventListener('click', () => {
 if (answerSeven.style.display === 'none'){
  answerSeven.style.display = 'block'
 }else {
  answerSeven.style.display = 'none'
 }
 if (btn7.style.transform ==='rotate(0deg)'){
  btn7.style.transform = 'rotate(90deg)'
 } else{
  btn7.style.transform = 'rotate(0deg)'
 }
})
questionEight.addEventListener('click', () => {
 if (answerEight.style.display === 'none'){
  answerEight.style.display = 'block'
 }else {
  answerEight.style.display = 'none'
 }
 if (btn8.style.transform ==='rotate(0deg)'){
  btn8.style.transform = 'rotate(90deg)'
 } else{
  btn8.style.transform = 'rotate(0deg)'
 }
})
questionNine.addEventListener('click', () => {
 if (answerNine.style.display === 'none'){
  answerNine.style.display = 'block'
 }else {
  answerNine.style.display = 'none'
 }
 if (btn9.style.transform ==='rotate(0deg)'){
  btn9.style.transform = 'rotate(90deg)'
 } else{
  btn9.style.transform = 'rotate(0deg)'
 }
})
questionTen.addEventListener('click', () => {
 if (answerTen.style.display === 'none'){
  answerTen.style.display = 'block'
 }else {
  answerTen.style.display = 'none'
 }
 if (btn10.style.transform ==='rotate(0deg)'){
  btn10.style.transform = 'rotate(90deg)'
 } else{
  btn10.style.transform = 'rotate(0deg)'
 }
})

const heartBtn = document.getElementsByClassName('heart-btn')
heartBtn.addEventListener('click', () => {
 heartBtn.src = "./images/Property 1=Frame 5973"
})