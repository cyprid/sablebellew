// Wait for the DOM to be fully loaded before running code
document.addEventListener("DOMContentLoaded", function() {
  // Handle hover effects for the main gallery navigation buttons
  document.querySelectorAll('.image-button img').forEach((img) => {
    const defaultSrc = img.dataset.default;
    const hoverSrc = img.dataset.hover;
    
    img.addEventListener('mouseover', () => {
      img.src = hoverSrc;
    });
    
    img.addEventListener('mouseout', () => {
      img.src = defaultSrc;
    });
  });
  
  // Modal functionality
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const closeBtn = document.getElementsByClassName("close")[0];
  
  // Get all images with the class "modal-opener"
  const images = document.querySelectorAll(".modal-opener");
  
  // Add click event to each gallery image
  images.forEach(img => {
    img.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
  });
  
  // Close the modal when the × is clicked
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }
  
  // Close the modal when clicking outside of the image
  modal.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// If you have a gallery with thumbnails and a larger preview area
function loadGallery(galleryNum) {
  const right = document.getElementById("right");
  const center = document.getElementById("center");
  
  // Exit if these elements don't exist
  if (!right || !center) return;
  
  right.innerHTML = "";
  center.innerHTML = "";
  
  // Check if galleries array exists and has the requested gallery
  if (window.galleries && galleries[galleryNum]) {
    const images = galleries[galleryNum];
    
    images.forEach(({ thumb, full }) => {
      const img = document.createElement("img");
      img.src = thumb;
      img.className = "thumbnail";
      img.onclick = () => {
        center.innerHTML = `<img src="${full}" class="large-image" />`;
      };
      right.appendChild(img);
    });
  }
}
document.getElementById('emailLink').addEventListener('click', function(e) {
  e.preventDefault();
  window.location.href = 'mailto:your.email@example.com';
});
