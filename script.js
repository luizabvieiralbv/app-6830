function CliqueAqui() {
    alert("Fofoqueiro");
}

const Botaoquefoge = document.getElementById('fujao')
Botaoquefoge.addEventListener("mouseover", function () {
    const largurajanela = window.innerWidth;
    const alturajanela = window.innerHeight;
    const largurabotao = Botaoquefoge.offsetWidth;
    const alturabotao = Botaoquefoge.offsetHeight;
    const novox = Math.floor(Math.random() * (largurajanela - largurabotao));
    const novoy = Math.floor(Math.random() * (alturajanela - alturabotao));

    Botaoquefoge.style.left = novox + "px";
    Botaoquefoge.style.top = novoy + "px";
})