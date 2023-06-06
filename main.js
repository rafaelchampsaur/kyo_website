// main.js
const menuItems = [
    { text: 'How We Teach', url: '#' },
    { text: 'Contact Us', url: '#' },
    { text: 'Prices', url: '#' },
    { text: 'Availability', url: '#' },
  ];
  
  const menu = document.getElementById('menu');
  
  function createMenu() {
    const ul = document.createElement('ul');
    menu.appendChild(ul);
  
    menuItems.forEach((menuItem) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = menuItem.url;
      a.textContent = menuItem.text;
      li.appendChild(a);
      ul.appendChild(li);
    });
  }
  
  function createVideoBackground() {
    const videoBackground = document.createElement('div');
    videoBackground.classList.add('video-background');
  
    const video = document.createElement('video');
    video.setAttribute('autoplay', '');
    video.setAttribute('loop', '');
    video.setAttribute('muted', '');
  
    const source = document.createElement('source');
    source.setAttribute('src', '/video.mp4');
    source.setAttribute('type', '/video/mp4');
  
    video.appendChild(source);
    videoBackground.appendChild(video);
  
    document.body.appendChild(videoBackground);
  }
  
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
      item.addEventListener('mouseover', () => {
          item.classList.add('active');
      });

      item.addEventListener('mouseout', () => {
          item.classList.remove('active');
      });
  });
  document.getElementById('toggleButton').addEventListener('click', function() {
    var body = document.body;
    var footer = document.getElementById('footer');
  
    // Toggle footer visibility class on the body
    body.classList.toggle('footer-visible');
  
    // Toggle background color and text color of the footer
    document.addEventListener('DOMContentLoaded', function() {
      var body = document.body;
      var footer = document.querySelector('footer');
      var footerLinks = document.querySelectorAll('.footer-menu a');
      var footerlinks= document.querySelectorAll('.footer-social a');
    
      if (body.classList.contains('footer-visible')) {
        footer.style.backgroundColor = 'white';
        footer.style.color = 'black';
        footerLinks.forEach(function(link) {
          link.style.color = 'black';
        });
      } else {
        footer.style.backgroundColor = 'black';
        footer.style.color = 'white';
        footerLinks.forEach(function(link) {
          link.style.color = 'white';
        });
        var elementsToHide = document.querySelectorAll('body > :not(footer)');
        elementsToHide.forEach(function(element) {
          element.style.display = 'none'; // or use element.disabled = true; to disable form elements
        });
      } else {
        // Set styles for the footer and footer links
        footer.style.backgroundColor = 'black';
        footer.style.color = 'white';
        footerLinks.forEach(function(link) {
          link.style.color = 'white';
        });
        footerSocialLinks.forEach(function(link) {
          link.style.color = 'white';
        });
      }
    });
    
  
  
  
  