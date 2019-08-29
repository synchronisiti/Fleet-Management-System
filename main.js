var app = new Framework7({
    root: '#app',
    name: 'My App',
    id: 'com.myapp.test',
    routes: [
      {
          name: 'Login',
          path: '/Login/',
          url: './Login.html',
          options: 'reloadCurrent'
      },
      {
          name: 'Dashboard',
          path: '/Dashboard/',
          url: './Dashboard.html',
          options: 'reloadCurrent'
      },
      {
          name: 'Geofence',
          path: '/Geofence/',
          url: './Geofence.html',
          options: 'reloadCurrent'
      }
    ],
  });
  var mainView = app.views.create('.view-main');