var Pagine = require('pagine');

require('./style.scss');

new Pagine({
  view: '#view',
  routes: [
    {
      path: '/',
      layout: 'main',
      md: './pages/home.md'
    },
    {
      path: '/components',
      layout: 'main',
      md: './pages/components.md'
    }
  ]
});

var app = {
  init: function() {
    window.addEventListener('hashchange', this.navigate.bind(this));
    window.addEventListener('load', this.navigate.bind(this));
  },

  navigate: function() {
    this.location = window.location.hash;
    
    var _this = this;
    var children = Array.from(document.getElementsByClassName('nav__list--right')[0].children);
    if (this.location === '') {
      return children[0].children[0].classList.add('nav__link--active');
    }

    children.forEach(function(node) {
      if (node.children[0].getAttribute('href') === _this.location) {
        node.children[0].classList.add('nav__link--active');
      } else {
        node.children[0].classList.remove('nav__link--active');
      }
    })
  }
}

app.init();
