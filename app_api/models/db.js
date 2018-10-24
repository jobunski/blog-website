var mongoose = require ('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost:27017/loc8r';
if (process.env.NODE_ENV === 'production') {
  dbURI= 'mongodb://Job:Firefox43@ds251112.mlab.com:51112/loc8r';
}

mongoose.connect(dbURI,{ useNewUrlParser: true });

mongoose.connection.on('connected',function () {
  console.log('Mongoose connected to : ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error:'+ err);
});

gracefulShutdown = function (msg,callback) {
  mongoose.connection.on(function () {
    console.log('Mongoose disconnected through'+ msg);
    callback();
  });
};

//For nodemon restart
process.once('SIGUSR2',function () {
  gracefulShutdown('nodemon restart',function () {
    process.kill(process.pid,'SIGUSR2');
  });
});

//For app termination
process.on('SIGINT',function () {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
});

//For Heroku App termination
process.on('',function () {
  gracefulShutdown('Heroku termination',function () {
    process.exit(0);
  });
});


require('./location');
require('./tech');
