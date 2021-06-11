/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');

    // For Mobile Only
    // var myDB = window.sqlitePlugin.openDatabase({name: "mySQLite.db", location: 'default'});

    // For Browser Only
    var myDB = window.openDatabase('my', "0.1", "My list", 200000);

    // var myDB = window.openDatabase("[Database](database/database.html)", "1.0", "DemoBD", 200000);

 //    myDB.transaction(function(trans) {
	//     trans.executeSql("DROP TABLE rooms", [],
	//         function(tx, result) {
	//             alert("Delete na rooms.");
	//         },
	//         function(error) {
	//             console.log("Error creating the table.");
	//         });
	// });



    // Create table users if not exist
    myDB.transaction(function(trans) {
	    trans.executeSql('CREATE TABLE IF NOT EXISTS users (id integer primary key autoincrement, fname text, lname text'+
	    	', contact text, pin text, position text, active text) ', [],
	        function(tx, result) {
	            console.log("Users Table Created.");
	        },
	        function(error) {
	            console.log("Error creating the table.");
	        });
	});

	// Create table house if not exist
    myDB.transaction(function(trans) {
	    trans.executeSql('CREATE TABLE IF NOT EXISTS houses (id integer primary key autoincrement, house_name text,'+
	    	' active text)', [],
	        function(tx, result) {
	            console.log("Houses Table Created.");
	        },
	        function(error) {
	            console.log("Error creating the table.");
	        });
	});

    // Create table rooms if not exist
    myDB.transaction(function(trans) {
	    trans.executeSql('CREATE TABLE IF NOT EXISTS rooms (id integer primary key autoincrement, room_name text,'+
	    	' rate integer, house_id integer, vaccant text, active text)', [],
	        function(tx, result) {
	            console.log("Rooms Table Created.");
	        },
	        function(error) {
	            console.log("Error creating the table.");
	        });
	});

	// Create table boarders if not exist
    myDB.transaction(function(trans) {
	    trans.executeSql('CREATE TABLE IF NOT EXISTS boarders (id integer primary key autoincrement, boarder_name text,'+
	    	' contact1 text, contact2 text, companion text, comp_contact text, active_boarder text, room_rate integer,'+
	    	' room_id integer, active text, date_started text)', [],
	        function(tx, result) {
	            console.log("Boarders Table Created.");
	        },
	        function(error) {
	            console.log("Error creating the table.");
	        });
	});



		// var fname = 'chery';
  //  		var lname = 'fuens';
  //  		var position = 'staff';
  //  		var contact = '09269396484';
  //  		var pin = '1431';

		// if(fname=='' || lname=='' || contact=='' || pin=='' || position==''){
		// 	console.log('Insert Data First');
  //   	}else{
	 //    	myDB.transaction(function(trans) {
		// 	    var executeQuery = "INSERT INTO users (fname, lname, contact, pin, position) VALUES (?, ?, ?, ?, ?)";
		// 	    trans.executeSql(executeQuery, [fname, lname, contact, pin, position], function(tx, result) {
		// 	            console.log('Inserted');
		// 	        },
		// 	        function(error) {
		// 	            console.log('Error occurred');
		// 	        });
		// 	});
	 //    }


	// Pin Input Verification Functions

	$('#num1').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num2').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num3').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num4').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num5').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num6').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num7').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num8').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num9').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num0').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#numx').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal.slice(0, currentVal.length-1);
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#numcheck').click(function () {
	    if($('#passinput').val() == '082319'){
				window.location.href = "components/admin/main.html";
		}else{
			ons.notification.alert('Sorry, invalid pin. Please try again.');
			$('#passinput').val('');
		}
	});

	


	function verifyPin(){
		var pass = $('#passinput').val();

		if(pass.includes('0823')){

		}else{
			myDB.transaction(function(trans) {
			    trans.executeSql('SELECT * FROM users', [], (tx, results)=> {
			        var len = results.rows.length, i;
			        var isCorrect = false;
			        var position = '';
			        for (i = 0; i < len; i++) {
			        	if(results.rows.item(i).pin == pass){
			        		isCorrect = true;
			        		position = results.rows.item(i).position;
			        		localStorage.setItem("positionLogged", position);
			        		localStorage.setItem("isLoggedIn", "yes");
			        	} 
			        }

			        if(isCorrect){
			        	if(position == 'admin'){
			        		window.location.href = "components/admin/main.html";
			        	}else{
			        		window.location.href = "components/staff/main.html";	
			        	}
						
			        }else{
						ons.notification.alert('Sorry, invalid pin. Please try again.');
						$('#passinput').val('');
			        }
			    });
			}, function(err){
		      console.log(err.message);
		    });
		}
		
	}


		// myDB.transaction(function(trans) {
		//     trans.executeSql('SELECT * FROM users', [], (tx, results)=> {
		//         var len = results.rows.length, i;
		//             console.log(results.rows.length);
		            
		//         for (i = 0; i < len; i++) {

		//         	console.log(results.rows.item(i).fname);
		//     //     	$("#userBody").append("<tr><td>" + results.rows.item(i).id + "</td><td>" + 
		// 				// results.rows.item(i).fname + "</td><td>" + results.rows.item(i).lname + "</td></tr>");
		//         }
		//     });
		// });


		// var fname = 'Piolo';
  //  		var lname = 'Cruz';
  //  		var position = 'staff';
  //  		var username = 'dods';
  //  		var password = 'dods123';

		// if(fname=='' || lname=='' || username=='' || password=='' || position==''){
		// 	console.log('Insert Data First');
  //   	}else{
	 //    	myDB.transaction(function(trans) {
		// 	    var executeQuery = "INSERT INTO users (fname, lname, username, password, position) VALUES (?, ?, ?, ?, ?)";
		// 	    trans.executeSql(executeQuery, [fname, lname, username, password, position], function(tx, result) {
		// 	            console.log('Inserted');
		// 	        },
		// 	        function(error) {
		// 	            console.log('Error occurred');
		// 	        });
		// 	});
	 //    }


   	$('#submitUser').click(function(){
   		var fname = $('#fname').val();
   		var lname = $('#lname').val();
   		var position = $('#position').val();
   		var username = $('#username').val();
   		var password = $('#password').val();

		if(fname=='' || lname=='' || username=='' || password=='' || position==''){
			console.log('Insert Data First');
    	}else{
	    	myDB.transaction(function(trans) {
			    var executeQuery = "INSERT INTO users (fname, lname, username, password, position) VALUES (?, ?, ?, ?, ?)";
			    trans.executeSql(executeQuery, [fname, lname, username, password, position], function(tx, result) {
			            console.log('Inserted');
			        },
			        function(error) {
			            console.log('Error occurred');
			        });
			});
	    }
	});

    $('#viewData').click(function(){
    	$("#userBody").empty();
		myDB.transaction(function(trans) {
		    trans.executeSql('SELECT * FROM users', [], (tx, results)=> {
		        var len = results.rows.length, i;
		            console.log(results.rows.length);
		            
		        for (i = 0; i < len; i++) {
		        	$("#userBody").append("<tr><td>" + results.rows.item(i).id + "</td><td>" + 
						results.rows.item(i).fname + "</td><td>" + results.rows.item(i).lname + "</td></tr>");
		        }
		    });
		});
	});

    $('#clearTable').click(function(){
		myDB.transaction(function(trans) {
		    trans.executeSql('TRUNCATE TABLE users', [], function(tx, results) {
		        console.log(results);
		    }, null);
		}, function(err){
			console.log(err);
		}, function(success){
			console.log(success);
		});
	});
    	
}
   
   

