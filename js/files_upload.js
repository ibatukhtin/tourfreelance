function uploadFile(button, name, label) {
  const buttonName = document.getElementById(button);
  const fileName = document.getElementById(name);
  const buttonLabel = document.getElementById(label);
  buttonName.addEventListener('change', function(){
    const file = this.files[0];
    fileName.innerText = file.name;
    buttonLabel.classList.add('selected');
  })
}

uploadFile('inn-btn', 'inn-name', 'inn-label');
uploadFile('passport1-btn', 'passport1-name', 'passport1-label');
uploadFile('passport2-btn', 'passport2-name', 'passport2-label');
