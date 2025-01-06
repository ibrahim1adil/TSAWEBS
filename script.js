document.addEventListener('DOMContentLoaded', () => {
  console.log('Website loaded');

  // Popup menu functionality
  const popupMenu = document.querySelector('#popupMenu');
  const openMenuButton = document.querySelector('#openMenu');
  const closeMenuButton = document.querySelector('#closeMenu');

  openMenuButton.addEventListener('click', () => {
    popupMenu.style.display = 'block';
  });

  closeMenuButton.addEventListener('click', () => {
    popupMenu.style.display = 'none';
  });
});

