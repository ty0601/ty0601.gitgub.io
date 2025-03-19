// main.js
document.addEventListener('DOMContentLoaded', function() {
    console.log("Web Done Loading!");
  
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
      header.style.backgroundColor = header.style.backgroundColor === 'lightblue' ? '#f8f8f8' : 'lightblue';
    });

  });