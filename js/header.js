document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
  });
  
  // Close dropdown if clicking outside
  window.addEventListener('click', function (e) {
    if (!e.target.closest('.login-dropdown')) {
      const dropdown = document.querySelector('.dropdown-menu');
      if (dropdown) dropdown.style.display = 'none';
    }
  });
  