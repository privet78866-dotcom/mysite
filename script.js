function helloUser() {
    let name = prompt("Введите ваше имя:");

    if (name) {
        document.getElementById("result").innerText = "Здравствуйте, " + name + "!";
    } else {
        document.getElementById("result").innerText = "Имя не было введено.";
    }
}

function showMessage() {
    alert("Это пример работы JavaScript на странице сайта.");
}