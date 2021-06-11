
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {


    // Cordova is now initialized. Have fun!

    window.fn = {};

	window.fn.open = function() {
	  var menu = document.getElementById('menu');
	  menu.open();
	};

	window.fn.load = function(page) {
	  var content = document.getElementById('content');
	  var menu = document.getElementById('menu');
	  content.load(page)
	    .then(menu.close.bind(menu));
	};
	
	document.addEventListener('prechange', function(event) {
		  document.querySelector('ons-toolbar .center').innerHTML = 'Dashboard - '+event.tabItem.getAttribute('label');
		});



    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');

    // For Mobile Only
    // var myDB = window.sqlitePlugin.openDatabase({name: "mySQLite.db", location: 'default'});

    // For Browser Only
    var myDB = window.openDatabase('my', "0.1", "My list", 200000);


}
   
   

