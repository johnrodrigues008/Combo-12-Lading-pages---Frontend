
function OpenNavbar() {
      const btnOpen = document.getElementById('btn-open');
      const btnClose = document.getElementById('btn-close');
      const navbarItems = document.getElementById('navbar-items');

      btnOpen.addEventListener('click', () => {
            btnOpen.style.display = 'none';
            btnClose.style.display = 'block';
            navbarItems.style.display = 'flex';

      })

      btnClose.addEventListener('click', () => {
            btnClose.style.display = 'none';
            btnOpen.style.display = 'block';
            navbarItems.style.display = 'none';
      })
}

OpenNavbar();