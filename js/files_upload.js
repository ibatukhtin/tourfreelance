function uploadFile(button, name) {
  const buttonName = document.getElementById(button);
  const fileName = document.getElementById(name);
  buttonName.addEventListener('change', function(){
    const file = this.files[0];
    fileName.textContent = file.name;
  })
}

uploadFile('inn-btn', 'inn-name');
uploadFile('passport1-btn', 'passport1-name');
uploadFile('passport2-btn', 'passport2-name');
