import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryList = createGalleryItems(galleryItems);
galleryEl.insertAdjacentHTML(`beforeend` , galleryList )

function createGalleryItems(galleryItems) {
   return galleryItems.map((galleryItems) => 
   `<div class="gallery__item">
      <a class="gallery__link" href="${galleryItems.original}">
        <img
          class="gallery__image"
          src="${galleryItems.preview}"
          data-source="${galleryItems.original}"
          alt="${galleryItems.description}"
        />
      </a>
    </div>`
      )
      .join("");
}

galleryEl.addEventListener(`click` , onGalleryImageClick);

function onGalleryImageClick(event) {
    event.preventDefault();

    const sourseImage = event.target.dataset.source;
    const instance = basicLightbox
        .create(`<img src='${sourseImage}' width="800" height="600">`);
    
    instance.show();

    window.addEventListener('keydown', onEscPress);

    function onEscPress(event) {
        if (event.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscPress);
        }
    }
}

  
   
    
