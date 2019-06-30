class Carousel {
  constructor(el) {
    this.el = el;
    this.currentIndex = 0;
    this.initElements();
    this.initCarousel();
    this.listenEvents();
  }

  left;
  middle;
  right;

  initElements() {
    this.elements = {
      prev: this.el.querySelector('[data-prev]'),
      next: this.el.querySelector('[data-next]'),
      slides: this.el.querySelector('.review-elements'),
    };
  }

  initCarousel() {
    this.initSlides();
  }

  initSlides() {
    this.slides = this.el.querySelectorAll('.element');
    this.left = this.slides[0];
    this.middle = this.slides[1];
    this.right = this.slides[2];
    this.left.className = 'element left';
    this.middle.className = 'element middle';
    this.right.className = 'element right';
  }

  listenEvents() {
    this.elements.prev.addEventListener('click', () => {
      this.elements.slides.prepend(this.slides[this.slides.length - 1]);
      this.left.style.animationName = "leftElementToLeft";
      this.middle.style.animationName = "middleElementToLeft";
      this.right.style.animationName = "rightElementToLeft";
      this.initSlides();
    });
    this.elements.next.addEventListener('click', () => {
      this.elements.slides.append(this.slides[this.currentIndex]);
      this.left.style.animationName = "leftElementToRight";
      this.middle.style.animationName = "middleElementToRight";
      this.right.style.animationName = "rightElementToRight";
      this.initSlides();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Carousel(document.querySelector('.reviews-container'));
  new Carousel(document.querySelector('.reviews-container-test'));
});
