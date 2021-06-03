// SCROLL TO TOP WHEN NAV-LINK IS CLICKED
const navLinks = document.querySelectorAll('.nav-link');
for (let link of navLinks) {
    link.addEventListener('click', function () {
        window.scrollTo(0, 0);
    });
}

// EMAIL JS
function disableSubmit() {
    document.querySelector('#submit').disabled = true;
}

function enableSubmit() {
    document.querySelector('#submit').disabled = false;
}

var successModal = new bootstrap.Modal(document.querySelector('#success-modal'));
var failureModal = new bootstrap.Modal(document.querySelector('#failure-modal'));

document.querySelector('#success-modal').addEventListener('hidden.bs.modal', function () {
    location.reload();
});

document.querySelector('#failure-modal').addEventListener('hidden.bs.modal', function () {
    enableSubmit();
});

(function () {
    emailjs.init('user_mAnea3QFbT15oFRptm5qE');
})();


window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        disableSubmit();
        emailjs.sendForm('gmail', 'contact_form', this)
            .then(function () {
                successModal.show();
            }, function (error) {
                failureModal.show();
            });
    });
};

