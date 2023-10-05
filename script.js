const navigation = document.querySelector('.navigation');

// Add a scroll event listener to change the navigation menu on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navigation.classList.add('scrolled');
  } else {
    navigation.classList.remove('scrolled');
  }
});

// Add an active class to the current menu item (e.g., when you're on that page)
const currentPath = window.location.pathname;
const menuItems = document.querySelectorAll('menu-item');

menuItems.forEach((menuItem) => {
  const link = menuItem.querySelector('a');
  if (link.getAttribute('href') === currentPath) {
    menuItem.classList.add('active');
  }
});