document.getElementById("to-introduction-button").onclick = function () {
    window.location.href = "introduction/introduction.html";
};

document.getElementById("back-to-welcome-button").onclick = function () {
    window.location.href = "https://stackoverflow.com/questions/15759020/window-location-href-doesnt-redirect";
    alert('worked')
};

document.getElementById("to-form-1-button").onclick = function () {
    window.location.href = "introduction/form/form1.html";
};



function switchContent (passedId, newText) {
    document.getElementById(passedId).innerHTML = newText;
}

function getContentBack (passedId, originalText) {
    document.getElementById(passedId).innerHTML = originalText;
}
