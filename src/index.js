class App {

  constructor() {
    this.menu = document.querySelector('.menu');
    this.menuToggle = document.querySelector('.menu-toggle');
    this.toggleMenu = this.toggleMenu.bind(this);
    
    let self = this;
    this.menuToggle.addEventListener('click', self.toggleMenu);
    
  }

  toggleMenu(event) {
    console.log();
    this.menu.classList.toggle('hidden');
  }
}

const app = new App();