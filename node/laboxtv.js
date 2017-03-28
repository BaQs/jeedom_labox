// ONLY SUPPORTS RECEIVE INFO FOR NOW
// TODO: support sending commands

/*
*  To use: node <me>.js <http://urlJeedom> <labox-ip> <debug: 0|1>
*
*
*/


// load variables

var request = require('request'),
urlJeedom = process.argv[2],
laboxHost = process.argv[3] || 'websocket.labox',
power     = process.argv[4],
volume    = process.argv[5],
mute      = process.argv[6],
channelName = process.argv[7],
channelNumber = process.argv[8],
channelCategory = process.argv[9],
programName = process.argv[10],
programCategory = process.argv[11];
debug     = process.argv[12] || 1;



/*
power: true,
  volume: 13,
  mute: false,
  channel: { name: 'TF1 HD', number: 1, category: 'Généralistes' },
  program: 
   { name: 'Esprits criminels S04E17',
     category: 'Série policière' } }

*/


if (debug == 1) {console.log("Called with parameters: " + urlJeedom + " : " + laboxHost + " : " + debug);}


// load laboxtv module

var labox = require('labox-tv')(laboxHost); 

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


// wait for an event
labox.on('update', function(data) {

  if (debug == 1) {console.log("Received event: %s" , data);}

  urlj = urlJeedom + "&id=" + power + "&value=" + data.power ; 

  if (debug == 1) {console.log("Calling Jeedom: " + urlj );}

  request({    url: urlj,    method: 'PUT',    json: data,  },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      if (debug == 1) {console.log((new Date()) + "Got response Value: " + response.statusCode);}
    }else{
      console.log((new Date()) + " - Error : "  + error );
    }
  });


  urlj = urlJeedom + "&id=" + volume + "&value=" + data.volume ; 

  if (debug == 1) {console.log("Calling Jeedom: " + urlj );}
  request({    url: urlj,    method: 'PUT',    json: data,  },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      if (debug == 1) {console.log((new Date()) + "Got response Value: " + response.statusCode);}
    }else{
      console.log((new Date()) + " - Error : "  + error );
    }
  });


  urlj = urlJeedom + "&id=" + mute + "&value=" + data.mute ; 

  if (debug == 1) {console.log("Calling Jeedom: " + urlj );}
  request({    url: urlj,    method: 'PUT',    json: data,  },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      if (debug == 1) {console.log((new Date()) + "Got response Value: " + response.statusCode);}
    }else{
      console.log((new Date()) + " - Error : "  + error );
    }
  });


  urlj = urlJeedom + "&id=" + channelName + "&value=" + encodeURIComponent(data.channel.name) ; 

  if (debug == 1) {console.log("Calling Jeedom: " + urlj );}
  request({    url: urlj,    method: 'PUT',    json: data,  },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      if (debug == 1) {console.log((new Date()) + "Got response Value: " + response.statusCode);}
    }else{
      console.log((new Date()) + " - Error : "  + error );
    }
  });


  urlj = urlJeedom + "&id=" + channelNumber + "&value=" + data.channel.number; 

  if (debug == 1) {console.log("Calling Jeedom: " + urlj );}
  request({    url: urlj,    method: 'PUT',    json: data,  },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      if (debug == 1) {console.log((new Date()) + "Got response Value: " + response.statusCode);}
    }else{
      console.log((new Date()) + " - Error : "  + error );
    }
  });


  urlj = urlJeedom + "&id=" + channelCategory+ "&value=" + encodeURIComponent(data.channel.category); 

  if (debug == 1) {console.log("Calling Jeedom: " + urlj );}
  request({    url: urlj,    method: 'PUT',    json: data,  },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      if (debug == 1) {console.log((new Date()) + "Got response Value: " + response.statusCode);}
    }else{
      console.log((new Date()) + " - Error : "  + error );
    }
  });


  urlj = urlJeedom + "&id=" + programName  + "&value=" + encodeURIComponent(data.program.name) ; 

  if (debug == 1) {console.log("Calling Jeedom: " + urlj );}
  request({    url: urlj,    method: 'PUT',    json: data,  },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      if (debug == 1) {console.log((new Date()) + "Got response Value: " + response.statusCode);}
    }else{
      console.log((new Date()) + " - Error : "  + error );
    }
  });


  urlj = urlJeedom + "&id=" + programCategory  + "&value=" + encodeURIComponent(data.program.category); 

  if (debug == 1) {console.log("Calling Jeedom: " + urlj );}
  request({    url: urlj,    method: 'PUT',    json: data,  },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      if (debug == 1) {console.log((new Date()) + "Got response Value: " + response.statusCode);}
    }else{
      console.log((new Date()) + " - Error : "  + error );
    }
  });
});




/*
var dash = dash_button(conf, null, null, "all"); //address from step above

// We listen for "volume" events :
labox.on('update', function(data) {
  // For volume event, data is an integer
  console.log(data);
});

// root@9e8f90699977:~# cat labox-send.js 
// We load the module
var labox = require('labox-tv')('websocket.labox'); 

// We wait for connection to be open and increase volume
labox.on('open', function() {
  labox.sendButtonEvent(labox.buttons.BUTTON_VOLUME_PLUS_KEY_CODE);
  console.log("sent");
  // data = labox.getInfo();
  // console.log("data:");
  // cconsole.log(data);
  // cconsole.log("/ data:");
});

*/

