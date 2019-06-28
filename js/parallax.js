function parallax(event) {
    this.querySelectorAll('.axure-design-title-container').forEach(section => {
      section.style.transform = `translateX(${event.clientX/30}px`;
    });
}

document.addEventListener('mousemove', parallax);
