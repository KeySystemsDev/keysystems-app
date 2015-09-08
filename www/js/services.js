angular.module('starter.services', [])

.factory("Noticias", function ($resource) {
    return $resource("http://keysystemsca.com.ve/post/post.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("Mensaje", function ($resource) {
    return $resource("http://keypanelservices.com/app/key-systems/mail.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: false }
    })
})

.factory("Planes", function ($resource) {
    return $resource("http://keypanelservices.com/app/key-systems/consulta_planes.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("Aplicaciones", function ($resource) {
    return $resource("http://keypanelservices.com/app/key-systems/consulta_app.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("Slider", function ($resource) {
    return $resource("http://keypanelservices.com/app/key-systems/consultar_slider.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
});
