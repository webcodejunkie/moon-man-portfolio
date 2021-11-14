let socialArrow = document.getElementsByClassName('social-arrow')[0];
socialArrow.addEventListener('click', function() {
  let sidebarContainer = document.querySelectorAll('.sidebar-container')[0];
  sidebarContainer.classList.toggle('move-social-arrow');
});

function openHiddenMenu() {
  let x = document.querySelectorAll('.hidden-menu')[0];
  x.addEventListener('click', function() {
    if (x === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  });
}
