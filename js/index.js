// Acá debo hacer una función que cambie la clase normal-nav
// del div externo al nav, por una navbar-fixed, cuando
// llegue a la parte superior de la página. Para que se
// quede ahí mismo, pero, si el usuario scrollea hacia abajo, que se vuelva a bajar
// hasta que ya no pueda más porque está la imagen del fondo

// La siguiente es una función que me puede ayudar a hacerlo:

window.onscroll = function() {scrollFunction()};

const buttonToTop = document.getElementById('button-to-top');

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonToTop.style.display = "block";
  } else {
    buttonToTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

buttonToTop.addEventListener('click', () => {
  topFunction();
})


