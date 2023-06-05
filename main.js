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
  
  