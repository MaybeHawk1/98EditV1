const fileInput = document.getElementById('editing');
const fileContents = document.getElementById('text');
const saveBtn = document.getElementById('saveBtn');
const text = document.getElementById('text');


fileInput.addEventListener('change', (e) => {
  const file = fileInput.files[0];
  const reader = new FileReader()

  reader.onload = (event) => {
    fileContents.value = event.target.result;
  }

  reader.readAsText(file);
  currentFileName = file.name
});

let currentFileName = ''

saveBtn.onclick = () => { 
  var contentToWrite = text.value;
  var textBlob = new Blob([contentToWrite], { type: 'text/plain' });
  var fileNameToWrite = currentFileName;
  
  if (!currentFileName) {
    window.alert("No File Uploaded!");
  }

  var downloadLink = document.createElement('a');
  downloadLink.download = fileNameToWrite;

  if (window.webkitURL != null) {
    downloadLink.href = window.webkitURL.createObjectURL(textBlob);
  } else {
    downloadLink.href = window.URL.createObjectURL(textBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink)
    }
    downloadLink.click();
}

function destroyClickedElement(event) {
  document.body.removeChild(event.target)
}