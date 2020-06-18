function createBubble () {
  const section = document.querySelector('section');
  const spanEl = document.createElement('span');

  let size = Math.random() * 90;

  spanEl.style.width = 20 + size + 'px';
  spanEl.style.height = 20 + size + 'px';
  
  spanEl.style.left = Math.random() * innerWidth + 'px';

  section.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  },4000)
}

setInterval(createBubble,50)