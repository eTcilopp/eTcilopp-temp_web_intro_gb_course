function captureText() {
    let userName = document.getElementById("nameField");
    let userNameValue = userName.value;
    hideForm();
    writeNameOnThePage(userNameValue);
}

function hideForm() {
    let form = document.getElementById("nameCaptureForm");
    form.style.display = "none";
}

function writeNameOnThePage(userNameValue) {
    let div = document.getElementById("greeting");
    let textGreeting = document.createTextNode("Здравствуйте, " + userNameValue + "!");
    div.appendChild(textGreeting);
    console.log("Здравствуйте, " + userNameValue + "!");
}
