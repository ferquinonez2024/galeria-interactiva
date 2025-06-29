const gallery = document.getElementById('gallery');
const imageUrlInput = document.getElementById('imageUrl');
const addImageBtn = document.getElementById('addImageBtn');
const removeImageBtn = document.getElementById('removeImageBtn');

let selectedImage = null;

addImageBtn.addEventListener('click', () => {
  const url = imageUrlInput.value.trim();
  if (url) {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Imagen agregada';
    img.addEventListener('click', () => selectImage(img));
    gallery.appendChild(img);
    imageUrlInput.value = '';
  }
});

removeImageBtn.addEventListener('click', () => {
  if (selectedImage) {
    selectedImage.remove();
    selectedImage = null;
  } else {
    alert('No hay ninguna imagen seleccionada.');
  }
});

function selectImage(imgElement) {
  if (selectedImage) {
    selectedImage.classList.remove('selected');
  }
  selectedImage = imgElement;
  selectedImage.classList.add('selected');
}

// Acceso con Enter desde input
imageUrlInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addImageBtn.click();
  }
});
