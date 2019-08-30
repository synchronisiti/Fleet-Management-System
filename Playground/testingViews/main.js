var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel

    // panel: {
    //   swipe: 'left',
    // },
    // Add default routes
    // routes: [
    //   {
    //     name: 'POI',
    //     path: '/POI/',
    //     url: './POI.html',
    //     options: 'reloadCurrent'

    //   },
    //   {
    //     name: 'home',
    //     path: '/',
    //     url: './index.html',
    //     options: 'reloadCurrent'
    //   }
    // ],
    // ... other parameters
  });

  var $$ = Dom7;

  //VIEWS
  var homeView = app.views.create('#view-home', {
    url: '/'
  });
  var poiView = app.views.create('#view-poi', {
    url: '/poi/'
  });
  var geofenceView = app.views.create('#view-geofence', {
    url: '/geofence/'
  });

  var alertsView = app.views.create('#view-alerts', {
    url: '/alerts/'
  });
  var summaryView = app.views.create('#view-summary', {
    url: '/summary/'
  });
  var playbackView = app.views.create('#view-playback', {
    url: '/playback/'
  });

//   // DOM events for About popover
// $$('.popover-user').on('popover:open', function (e, popover) {
//   console.log('User popover open');
// });
// $$('.popover-user').on('popover:opened', function (e, popover) {
//   console.log('User popover opened');
// });
