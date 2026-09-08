/* ================= TELAS ================= */

const screens = document.querySelectorAll(".screen");
const navigationButtons = document.querySelectorAll("[data-screen]");
const navButtons = document.querySelectorAll(".nav button");


function abrirTela(nomeTela) {

    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });


    const tela = document.getElementById(nomeTela);

    if (tela) {

        tela.classList.add("active");

    }


    navButtons.forEach(function(button) {

        button.classList.remove("active");

        if (button.dataset.screen === nomeTela) {

            button.classList.add("active");

        }

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================= NAVEGAÇÃO ================= */

navigationButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const destino = button.dataset.screen;

        abrirTela(destino);

    });

});


/* ================= TEMA ================= */

const btnTema = document.getElementById("btnTema");

if (btnTema) {

    btnTema.addEventListener("click", function() {

        document.body.classList.toggle("light");


        if (document.body.classList.contains("light")) {

            btnTema.textContent = "☀";

        } else {

            btnTema.textContent = "☾";

        }

    });

}


/* ================= TECLA ESC ================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        abrirTela("home");

    }

});


/* ================= INÍCIO ================= */

function telaInicial() {
    const hash = window.location.hash.replace("#", "");
    const telaValida = hash && document.getElementById(hash);

    if (telaValida) {
        abrirTela(hash);
    } else {
        abrirTela("home");
    }
}

telaInicial(); 