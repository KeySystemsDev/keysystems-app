angular.module('starter.services', [])

.factory('Sections', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var sections = [{
    id: 0,
    name: 'INICIO',
    icon: './img/inicio.png',
    url: '',
    lastText: ''
  }, {
    id: 1,
    name: 'WEB',
    icon: './img/web.png',
    url: 'desarrollo-web',
    lastText: ''
  }, {
    name: 'DISEÑO',
    icon: './img/diseno.png',
    url: 'diseno-grafico',
    lastText: ''
  }, {
    name: 'ARQUITECTURA',
    icon: './img/arquitectura.png',
    url: 'aquitectura',
    lastText: ''
  }, {
    name: 'PLANES',
    icon: './img/planes.png',
    url: 'planes',
    lastText: ''
  }, {
    name: 'PORTAFOLIO',
    icon: './img/portafolio.png',
    url: 'portafolio',
    lastText: ''
  }, {
    name: 'CONTACTO',
    icon: './img/contacto.png',
    url: 'contacto',
    lastText: ''
  }];

  return {
    all: function() {
      return sections;
    },
    get: function(sectionId) {
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].id === parseInt(sectionId)) {
          return sections[i];
        }
      }
      return null;
    }
  }
});

