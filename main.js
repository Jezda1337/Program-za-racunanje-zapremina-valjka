var btn = document.getElementById("btn");
var poluprecnik = document.getElementById("poluprecnik");
var visina = document.getElementById("visina");

btn.addEventListener("click", () => {
    var summ = document.getElementById("rezultat");
    summ.value = Math.PI * poluprecnik.value * poluprecnik.value * visina.value;
});