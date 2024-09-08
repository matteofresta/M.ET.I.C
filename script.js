document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');

    // Add event listeners to pause/resume animation on hover
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused'; // Pause the animation
        });

        item.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running'; // Resume the animation
        });
    });
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene l'invio del form

    // Recupera gli elementi del form
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const tarea = document.getElementById('tarea');

    // Recupera i messaggi di errore
    const fnameError = document.getElementById('fnameError');
    const lnameError = document.getElementById('lnameError');
    const emailError = document.getElementById('emailError');
    const tareaError = document.getElementById('tareaError');

    // Flag di validazione
    let isValid = true;

    // Reset degli errori precedenti
    resetErrors([fname, lname, email, tarea], [fnameError, lnameError, emailError, tareaError]);

    // Controlla se i campi sono validi
    if (!fname.value.trim()) {
        showError(fname, fnameError);
        isValid = false;
    }

    if (!lname.value.trim()) {
        showError(lname, lnameError);
        isValid = false;
    }

    if (!validateEmail(email.value)) {
        showError(email, emailError);
        isValid = false;
    }

    if (!tarea.value.trim()) {
        showError(tarea, tareaError);
        isValid = false;
    }

    // Se tutti i campi sono validi, invia il form
    if (isValid) {
        alert('Form inviato con successo!');
        // Puoi sbloccare il form qui o inviarlo con JS
        // this.submit(); // Sblocca questa linea se vuoi inviare il form
    }
});

// Funzione per mostrare gli errori
function showError(inputElement, errorElement) {
    inputElement.classList.add('invalid');
    errorElement.style.display = 'block';
}

// Funzione per resettare gli errori
function resetErrors(inputElements, errorElements) {
    inputElements.forEach(input => input.classList.remove('invalid'));
    errorElements.forEach(error => error.style.display = 'none');
}

// Funzione per validare l'indirizzo email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const burgerMenu = document.getElementById("burgerMenu");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        burgerMenu.style.display = "block"; // Show burger menu
    } else {
        sidebar.style.width = "250px";
        burgerMenu.style.display = "none"; // Hide burger menu
    }
}