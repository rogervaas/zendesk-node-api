var request = require('request');
var API_VERSION = 'v2';

var ZDRequest = function(config){
  return {
    get: function(uri){
      var options = {
        url: config.url + '/api/' + API_VERSION + '/' + uri,
        headers: {
          Authorization: 'Basic ' + new Buffer(config.email + '/token:' + config.token).toString('base64')
        },
        forever: true
      }

      return new Promise(function(fufill, reject){
        request(options, function(err, res, body){
          if (err) { reject(err); }
          fufill(JSON.parse(body));
        });
      })
    },

    post: function(uri, data){
      var options = {
        url: config.url + '/api/' + API_VERSION + '/' + uri,
        headers: {
          Authorization: 'Basic ' + new Buffer(config.email + '/token:' + config.token).toString('base64')
        },
        json: data
      }
      return new Promise(function(fufill, reject){
        request.post(options, function(err, res, body){
          if (err) { reject(err); }
          fufill(body);
        });
      })
    },

    put: function(uri, data){
      var options = {
        url: config.url + '/api/' + API_VERSION + '/' + uri,
        headers: {
          Authorization: 'Basic ' + new Buffer(config.email + '/token:' + config.token).toString('base64')
        },
        json: data
      }

      return new Promise(function(fufill, reject){
        request.put(options, function(err, res, body){
          if (err) { reject(err); }
          fufill(body);
        });
      })
    },

    delete: function(uri, data){
      var options = {
        url: config.url + '/api/' + API_VERSION + '/' + uri,
        headers: {
          Authorization: 'Basic ' + new Buffer(config.email + '/token:' + config.token).toString('base64')
        }
      }

      return new Promise(function(fufill, reject){
        request.delete(options, function(err, res, body){
          if (err) { reject(err); }
          fufill();
        });
      })
    }
  }
}

module.exports = ZDRequest
