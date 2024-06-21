let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () => {
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () => {
        if (inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
    };
});

document.querySelectorAll('.faq .box-container .box h3').forEach(headings => {
    headings.onclick = () => {
        headings.parentElement.classList.toggle('active');
    }
});
// slider starts
let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

// Show first slide initially
showSlide(slideIndex);

// Auto-slide every 10 seconds
setInterval(nextSlide, 5000); // 10 seconds = 10000 milliseconds


// slider end

// registration form starts
function validateForm() {
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("c_pass").value;

    // Password length validation
    if (password.length < 6 || confirmPassword.length < 6) {
        document.getElementById("passwordError").style.display = "block";
        return false;
    }

    // Password pattern validation
    var passwordPattern = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-zA-Z]).{6,20}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").style.display = "block";
        return false;
    }

    // Password matching validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}
// registration form starts

function togglePopup() {
    var popup = document.getElementById('developerPopup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}