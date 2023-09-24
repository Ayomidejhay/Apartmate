const getStarted = document.getElementById('get-started')
const signIn = document.getElementById('sign-in')
const signUpStudent = document.getElementById('sign-up1')
const signUpAgent = document.getElementById('sign-up2')
const passwordReset = document.getElementById('password-reset')
const resetLink = document.getElementById('reset-link')
const createForm = document.getElementById('create-form')
const forgetLink = document.getElementById('forget-link')
const createLink = document.getElementById('create-link')
const studentBtn = document.getElementById('student-btn')
const agentBtn = document.getElementById('agent-btn')
const studentsBtn = document.getElementById('students-btn')
const agentsBtn = document.getElementById('agents-btn')
const resetBtn = document.getElementById('reset-btn')
const linkBtn =document.getElementById('link-btn')

function removeAll() {
 signIn.style.display='none'
 signUpStudent.style.display='none'
 signUpAgent.style.display='none'
 passwordReset.style.display='none'
 resetLink.style.display='none'
 createForm.style.display='none'
}
getStarted.addEventListener('click', () => {
 removeAll()
 signIn.style.display='block'
})
forgetLink.addEventListener('click', () => {
 removeAll()
 passwordReset.style.display='block'
})
resetBtn.addEventListener('click', () => {
 removeAll()
 resetLink.style.display='block'
})
linkBtn.addEventListener('click', () => {
 removeAll()
 signIn.style.display='block'
})
createLink.addEventListener('click', ()=> {
 removeAll()
 createForm.style.display='block'
})
studentBtn.addEventListener('click', ()=> {
 removeAll()
 signUpStudent.style.display='block'
})
agentBtn.addEventListener('click', ()=> {
 removeAll()
 signUpAgent.style.display='block'
})
studentsBtn.addEventListener('click', ()=> {
 removeAll()
 signUpStudent.style.display='block'
})
agentsBtn.addEventListener('click', ()=> {
 removeAll()
 signUpAgent.style.display='block'
})