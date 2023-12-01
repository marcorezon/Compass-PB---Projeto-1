let signerName = document.getElementById("signer-name");
let signerEmail = document.getElementById("signer-email");
let signerAge = document.getElementById("signer-age");
let investimentDetails = document.getElementById("investiment-details");
let whichMarket = document.querySelector('input[name="which-market"]:checked');


function aboutIt() {
   window.location.href = "about-it/about-it.html";
}

function home() {
   window.location.href = "../index.html";
}

function toForms() {
   window.location.href = "../forms/form-1/form-1.html";
}

function backToAboutIt() {
   window.location.href = "../../about-it/about-it.html"; 
}
function back(previousPos) {
   window.location.href = '../form-' + previousPos + '/' + 'form-' + previousPos + '.html';
}

function next(nextPos) {
   if((nextPos !== 4) || (form3Validation() === true)) {
      if (nextPos === 2) 
         form1Validation();
      if (nextPos === 3) 
         form2Validation();
      window.location.href = '../form-' + nextPos + '/' + 'form-' + nextPos + '.html';
   }
}

function skip(nextPos) {
   window.location.href = '../form-' + nextPos + '/' + 'form-' + nextPos + '.html';
}

function finish() {

   if(signerName.value.length < 1) {
      return;
   }
   if (signerEmail.value.length < 1) {
      return;
   }
   if (signerAge.value.length < 1) {
      return;
   }
   localStorage.setItem("name", signerName.value);
   localStorage.setItem("email", signerEmail.value);
   localStorage.setItem("age", signerAge.value);
   window.location.href='../success/success.html';   
}


function form1Validation() {
   localStorage.setItem('account status', document.getElementById('account-status').value);
   localStorage.setItem('which market operates', document.querySelector('input[name="which-market"]:checked').value); 
}
function form2Validation() {
   localStorage.setItem('investing motivation', document.getElementById('investing-motivation').value);
   localStorage.setItem('information source', document.querySelector('input[name="information-source"]:checked').value);
}
function form3Validation() {
   if (investimentDetails.value.length >= 1) {
      localStorage.setItem("investiment details", investimentDetails.value);
      return true;
   }
}




