// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const ulElGallery = document.querySelector('.gallery');
ulElGallery.insertAdjacentHTML('beforeend', createImageGallery(galleryItems));
function createImageGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
          return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`;
        })
      .join('');
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  
