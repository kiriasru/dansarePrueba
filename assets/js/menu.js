export function setupResponsiveMenu() {
  const toggler = document.getElementById('toggler');
  const menu = document.querySelector('header .navbar');
  const menuLinks = menu.querySelectorAll('a');

  toggler.addEventListener('change', () => {
    menu.classList.toggle('active', toggler.checked);
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggler.checked = false;
      menu.classList.remove('active');
    });
  });
}