const lastname = document.querySelector('.input-lastname-js')
const username = document.querySelector('.input-username-js')
const age = document.querySelector('.input-age-js')

const personBox = document.querySelector('.person-box')
const persons = document.querySelectorAll('.person');

const buttonAdd = document.querySelector('.btn-add-js');
const buttonRemove = document.querySelector('.btn-remove-js');
const buttonEdit = document.querySelector('.btn-edit-js');


// Функция кнопки добавить
buttonAdd.addEventListener('click', () => {
    if (
        lastname.value === '' ||
        username.value === '' ||
        age.value === ''
    ) {
        alert('Вы не заполнили все поля')
    } else {
        clickButtonAdd()
    }
})


const clickButtonAdd = () => {
    var div = document.createElement('div')
    div.className = 'person';
    personBox.appendChild(div)

    var usernameTag = document.createElement('p')
    usernameTag.className = 'person-lastname';
    usernameTag.innerText = lastname.value;
    div.appendChild(usernameTag)

    var lastnameTag = document.createElement('p')
    lastnameTag.className = 'person-username';
    lastnameTag.innerText = username.value;
    div.appendChild(lastnameTag)

    var userageTag = document.createElement('p')
    userageTag.className = 'person-age';
    userageTag.innerText = age.value;
    div.appendChild(userageTag)

    lastname.value = '';
    username.value = '';
    age.value = '';
}




const btnHide = () => {
    buttonAdd.classList.remove('active'),
    buttonRemove.classList.add('active'),
    buttonEdit.classList.add('active')
}

const btnShow = () => {
    buttonAdd.classList.add('active'),
    buttonRemove.classList.remove('active'),
    buttonEdit.classList.remove('active')
}

// Функция выборки пользователей
persons.forEach(person => {
    person.addEventListener('click', () => {
        if (person.classList.contains('active')) {
            person.classList.remove('active')
            btnHide();
        } else {
            persons.forEach(p => p.classList.remove('active'))
            person.classList.add('active')

            if (person.classList.contains('active')) {
                btnShow();
            } else {
                btnHide();
            }
        }

        // Функция удаления
        buttonRemove.addEventListener('click', () => {
            if (person.classList.contains('active'))
                person.remove()
                btnHide()
        })

        // Функция редактирования
        // buttonEdit.addEventListener('click', () => {
        //     if (person.classList.contains('active'))
        //         btnHide()
        // })
    })
})