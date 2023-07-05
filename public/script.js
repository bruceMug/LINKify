function copyToClipboard1() {
  const inputField = document.getElementById("inputField1");
  inputField.select();
  inputField.setSelectionRange(0, 99999);

  if (inputField.value == "") {
    return false;
  }

  document.execCommand("copy");
  const copyMessage = document.getElementById("copyMessage1");
  copyMessage.innerText = "Text copied!";
  copyMessage.style.display = "inline-flex";

  setTimeout(function () {
    copyMessage.style.display = "none";
  }, 200);
}



function copyToClipboard2() {
    const inputField = document.getElementById("inputField2");
    inputField.select();
    inputField.setSelectionRange(0, 99999);
  
    if (inputField.value == "") {
      return false;
    }
  
    document.execCommand("copy");
    const copyMessage = document.getElementById("copyMessage2");
    copyMessage.innerText = "Text copied!";
    copyMessage.style.display = "inline-flex";
  
    setTimeout(function () {
      copyMessage.style.display = "none";
    }, 200);
  }




  function copyToClipboard3() {
    const inputField = document.getElementById("inputField3");
    inputField.select();
    inputField.setSelectionRange(0, 99999);
  
    if (inputField.value == "") {
      return false;
    }
  
    document.execCommand("copy");
    const copyMessage = document.getElementById("copyMessage3");
    copyMessage.innerText = "Text copied!";
    copyMessage.style.display = "inline-flex";
  
    setTimeout(function () {
      copyMessage.style.display = "none";
    }, 200);
  }

