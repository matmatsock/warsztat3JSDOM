let newsletterForm = document.getElementById('newsletter-form');

let allAgreeChbox = document.getElementById('agree-all');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko!';
        errors.appendChild(liError)
        
    }


    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres email!';
        errors.appendChild(liError)
        
    }

    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres musi zawierać znak @ !';
        errors.appendChild(liError)
        
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Musisz wyrazić zgode w zał nr 1';
        errors.appendChild(liError)
        
    }
    
    if (errors.children.length > 0) {
        event.preventDefault();
    }
    

    
}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;


    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
    // console.log(event.target.checked)
}

newsletterForm.addEventListener('submit', validate);

allAgreeChbox.addEventListener('change', allAgree)

