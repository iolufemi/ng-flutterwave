/* globals angular */
"use strict";

// Remember to include jQuery and Angular
var noAngular;
if(typeof angular === 'undefined'){
  noAngular = true;
  console.warn('Could not detect Angular. Please include Angular'); // jshint ignore:line 
}else{
  noAngular = false;
}


// inject aesjs
var aesjs = require('./bower_components/aes-js/index.js');
// inject js-base64
var Base64 = require('./bower_components/js-base64/base64.js').Base64;
// inject jquery of jquery is not found
// If angular is found, don't bootstarp
// write separate doc for when running within angular and when running in a normal html app

angular.module('ng-flutterwave',[])
.config(['$httpProvider','$compileProvider','$logProvider', function($httpProvider,$compileProvider,$logProvider){
  $httpProvider.interceptors.push('FlutterwaveSecurityInterceptor');
  $compileProvider.debugInfoEnabled(false);
  $logProvider.debugEnabled(false);
}])
// run this settings in config. set apiKey, merchantKey and url
.factory('FlutterwaveSettings',['$rootScope','$log',function($rootScope,$log){
  $rootScope.settings = {};
  return {
    get: function(key){
      return $rootScope.settings[key];
    },
    set: function(key, value){
      $rootScope.settings[key] = value;
      $log.debug('Set: ', $rootScope.settings);
      return $rootScope.settings[key];
    }
  };
}])
.factory('Flutterwave', ['$http','FlutterwaveSettings','$q','$rootScope','$log',function($http,FlutterwaveSettings,$q,$rootScope,$log){
  return {
    initialize: function(){
      return $http({
        method: 'GET',
        url: FlutterwaveSettings.get('url')+'/initialize',
      })
      .then(function(resp){
        $http.defaults.headers.common['x-apiKey'] = $rootScope.settings.apiKey;
        $http.defaults.headers.common['x-merchantKey'] = $rootScope.settings.merchantKey;
        return $q.resolve(FlutterwaveSettings.set('tag',resp.data.data['x-tag']));
      });
    },
    card: {
      tokenize: function(data){
        $log.debug('I got this data: ', data);
        return $http({
          method: 'POST',
          url: FlutterwaveSettings.get('url')+'/card/tokenize',
          data: data
        });
      },
      charge: function(data){
        return $http({
          method: 'POST',
          url: FlutterwaveSettings.get('url')+'/card/charge',
          data: data
        });
      },
      validate: function(data){
        return $http({
          method: 'POST',
          url: FlutterwaveSettings.get('url')+'/card/validate',
          data: data
        });
      }
    }
  };
}])
.factory('FlutterwaveSecurityInterceptor', ['$q','AES','$log','FlutterwaveSettings',function($q,AES,$log,FlutterwaveSettings) {
  return {
    request: function(config) {
      var deferred = $q.defer();
      $log.debug('Request: ',config);
      if(config.method === 'POST'){
        var key  = FlutterwaveSettings.get('tag');
        config.headers['x-tag'] = key;
        var text = JSON.stringify(config.data);
        AES.encrypt(text, key)
        .then(function(resp){
          config.data = {};
          config.data.secureData = resp;
          deferred.resolve(config);
        })
        .catch(function(err){
          $log.debug('FlutterwaveSecurityInterceptor Request Error: ', err, config);
          deferred.reject(err);
        });
      }else{
        deferred.resolve(config);
      }   
      return deferred.promise;
    },

    response: function(response) {
      var deferred = $q.defer();
      $log.debug('Response: ',response.headers());
      if(response.data){
        if(response.data.secure){
          var key  = response.headers('x-tag') ? response.headers('x-tag') : response.headers('X-Tag');
          $log.debug('decrypt key: ', key);
          var text = response.data.data;

          AES.decrypt(text, key)
          .then(function(resp){
            response.data.data = JSON.parse(resp);
            deferred.resolve(response);
          })
          .catch(function(err){
            $log.debug('FlutterwaveSecurityInterceptor Response Error: ', err, response);
            deferred.reject(err);
          });
        }else{
          $log.debug(response);
          deferred.resolve(response);
        }
      }else{
        deferred.resolve(response);
      }
      return deferred.promise;
    }
  };
}])
.factory('AES',['$q','$log',function($q,$log){
  return {
    encrypt: function(text, key){
      var deferred = $q.defer();
      $log.debug('The request: ',text);
      $log.debug('The Key: ', key, Base64.decode(key));
      key =  Base64.decode(key);
      var splitKey = key.split('//////');
      $log.debug('splitKey: ', splitKey);
      key = splitKey[0];
      var counter = ((splitKey[1] * 1) * 10) / 5;
      $log.debug('Key Again: ', key);
      key = aesjs.util.convertStringToBytes(key, 'hex');
      $log.debug('Key Again: ', key);
        // Convert text to bytes
        var textBytes = aesjs.util.convertStringToBytes(text);
        var aesCbc = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(counter));
        var encryptedBytes = aesCbc.encrypt(textBytes);

        // Convert our bytes back into text
        var encryptedText = aesjs.util.convertBytesToString(encryptedBytes, 'hex');
        deferred.resolve(encryptedText);
        return deferred.promise;
      },

      decrypt: function(text, key){
        var deferred = $q.defer();
        key = Base64.decode(key);
        var splitKey = key.split('//////');
        key = splitKey[0];
        var counter = ((splitKey[1] * 1) * 10) / 5;
        key = aesjs.util.convertStringToBytes(key, 'hex');

        // Convert text to bytes
        var textBytes = aesjs.util.convertStringToBytes(text, 'hex');

        // The cipher-block chaining mode of operation maintains internal
          // state, so to decrypt a new instance must be instantiated.
          var aesCbc = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(counter));
          var decryptedBytes = aesCbc.decrypt(textBytes);

          // Convert our bytes back into text
          var decryptedText = aesjs.util.convertBytesToString(decryptedBytes);
          deferred.resolve(decryptedText);
          return deferred.promise;
        }
      };
    }])
.directive('flutterwaveForm',['FlutterwaveSettings',function(FlutterwaveSettings){
  // Parameters
  // title
  // description
  // email
  // amount
  // logo
  var ourTemplate = '';
  ourTemplate += '<flutterwave>';
  ourTemplate += '<style type="text/css">flutterwave{font-family:Raleway,HelveticaNeue,"Helvetica Neue",Helvetica,Arial,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;font-size:80.5%;line-height:1.6;font-weight:400;color:#222}flutterwave article,flutterwave aside,flutterwave details,flutterwave figcaption,flutterwave figure,flutterwave footer,flutterwave header,flutterwave hgroup,flutterwave main,flutterwave menu,flutterwave nav,flutterwave section,flutterwave summary{display:block}flutterwave audio,flutterwave canvas,flutterwave progress,flutterwave video{display:inline-block;vertical-align:baseline}flutterwave audio:not([controls]){display:none;height:0}flutterwave [hidden],flutterwave template{display:none}flutterwave a{background-color:transparent;color:#1EAEDB}flutterwave a:active,flutterwave a:hover{outline:0}flutterwave abbr[title]{border-bottom:1px dotted}flutterwave b,flutterwave optgroup,flutterwave strong{font-weight:700}flutterwave dfn{font-style:italic}flutterwave h1{margin:.67em 0}flutterwave mark{background:#ff0;color:#000}flutterwave small{font-size:80%}flutterwave sub,flutterwave sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}flutterwave sup{top:-.5em}flutterwave sub{bottom:-.25em}flutterwave img{border:0}flutterwave svg:not(:root){overflow:hidden}flutterwave figure{margin:1em 40px}flutterwave hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}flutterwave pre{overflow:auto}flutterwave code,flutterwave kbd,flutterwave pre,flutterwave samp{font-family:monospace,monospace;font-size:1em}flutterwave button,flutterwave input,flutterwave optgroup,flutterwave select,flutterwave textarea{color:inherit;font:inherit;margin:0}flutterwave button{overflow:visible}flutterwave button,flutterwave select{text-transform:none}flutterwave button,flutterwave html input[type=button],flutterwave input[type=reset],flutterwave input[type=submit]{-webkit-appearance:button;cursor:pointer}flutterwave button[disabled],flutterwave html input[disabled]{cursor:default}flutterwave button::-moz-focus-inner,flutterwave input::-moz-focus-inner{border:0;padding:0}flutterwave input{line-height:normal}flutterwave input[type=checkbox],flutterwave input[type=radio]{box-sizing:border-box;padding:0}flutterwave input[type=number]::-webkit-inner-spin-button,flutterwave input[type=number]::-webkit-outer-spin-button{height:auto}flutterwave input[type=search]{-moz-box-sizing:content-box;-webkit-box-sizing:content-box}flutterwave input[type=search]::-webkit-search-cancel-button,flutterwave input[type=search]::-webkit-search-decoration{-webkit-appearance:none}flutterwave fieldset{border:1px solid silver;margin:0 2px}flutterwave legend{border:0;padding:0}flutterwave table{border-collapse:collapse;border-spacing:0}flutterwave h1,flutterwave h2,flutterwave h3,flutterwave h4,flutterwave h5,flutterwave h6{margin-top:0;margin-bottom:2rem;font-weight:300}flutterwave h1{font-size:4rem;line-height:1.2;letter-spacing:-.1rem}flutterwave h2{font-size:3.6rem;line-height:1.25;letter-spacing:-.1rem}flutterwave h3{font-size:3rem;line-height:1.3;letter-spacing:-.1rem}flutterwave h4{font-size:2.4rem;line-height:1.35;letter-spacing:-.08rem}flutterwave h5{font-size:1.8rem;line-height:1.5;letter-spacing:-.05rem}flutterwave h6{font-size:1.5rem;line-height:1.6;letter-spacing:0}@media (min-width:550px){flutterwave h1{font-size:5rem}flutterwave h2{font-size:4.2rem}flutterwave h3{font-size:3.6rem}flutterwave h4{font-size:3rem}flutterwave h5{font-size:2.4rem}flutterwave h6{font-size:1.5rem}}flutterwave p{margin-top:0}flutterwave a:hover{color:#0FA0CE}flutterwave .button,flutterwave button,flutterwave input[type=button],flutterwave input[type=reset],flutterwave input[type=submit]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:11px;font-weight:600;line-height:38px;letter-spacing:.1rem;text-transform:uppercase;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:4px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}flutterwave .button:focus,flutterwave .button:hover,flutterwave button:focus,flutterwave button:hover,flutterwave input[type=button]:focus,flutterwave input[type=button]:hover,flutterwave input[type=reset]:focus,flutterwave input[type=reset]:hover,flutterwave input[type=submit]:focus,flutterwave input[type=submit]:hover{color:#333;border-color:#888;outline:0}flutterwave .button.button-primary,flutterwave button.button-primary,flutterwave input[type=button].button-primary,flutterwave input[type=reset].button-primary,flutterwave input[type=submit].button-primary{color:#FFF;background-color:#006dc7;border-color:#005094}flutterwave .button.button-primary:focus,flutterwave .button.button-primary:hover,flutterwave button.button-primary:focus,flutterwave button.button-primary:hover,flutterwave input[type=button].button-primary:focus,flutterwave input[type=button].button-primary:hover,flutterwave input[type=reset].button-primary:focus,flutterwave input[type=reset].button-primary:hover,flutterwave input[type=submit].button-primary:focus,flutterwave input[type=submit].button-primary:hover{color:#FFF;background-color:#006dc7;border-color:#006dc7}flutterwave input[type=email],flutterwave input[type=text],flutterwave input[type=tel],flutterwave input[type=url],flutterwave input[type=password],flutterwave input[type=number],flutterwave input[type=search],flutterwave select,flutterwave textarea{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #D1D1D1;border-radius:4px;box-shadow:none;box-sizing:border-box}flutterwave input[type=email],flutterwave input[type=text],flutterwave input[type=tel],flutterwave input[type=url],flutterwave input[type=password],flutterwave input[type=number],flutterwave input[type=search],flutterwave textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}flutterwave textarea{overflow:auto;min-height:65px;padding-top:6px;padding-bottom:6px}flutterwave input[type=email]:focus,flutterwave input[type=text]:focus,flutterwave input[type=tel]:focus,flutterwave input[type=url]:focus,flutterwave input[type=password]:focus,flutterwave input[type=number]:focus,flutterwave input[type=search]:focus,flutterwave select:focus,flutterwave textarea:focus{border:1px solid #33C3F0;outline:0}flutterwave label,flutterwave legend{display:block;margin-bottom:.5rem;font-weight:600}flutterwave fieldset{padding:0;border-width:0}flutterwave input[type=checkbox],flutterwave input[type=radio]{display:inline}flutterwave label>.label-body{display:inline-block;margin-left:.5rem;font-weight:400}flutterwave ul{list-style:circle inside}flutterwave ol{list-style:decimal inside}flutterwave ol,ul{padding-left:0;margin-top:0}flutterwave ol ol,flutterwave ol ul,flutterwave ul ol,flutterwave ul ul{margin:1.5rem 0 1.5rem 3rem;font-size:90%}flutterwave .button,flutterwave button,flutterwave li{margin-bottom:1rem}flutterwave code{padding:.2rem .5rem;margin:0 .2rem;font-size:90%;white-space:nowrap;background:#F1F1F1;border:1px solid #E1E1E1;border-radius:4px}flutterwave pre>code{display:block;padding:1rem 1.5rem;white-space:pre}flutterwave #card,flutterwave #email{background-repeat:no-repeat;background-size:20px 20px;background-position:2% 50%;padding-left:35px}flutterwave td,flutterwave th{padding:12px 15px;text-align:left;border-bottom:1px solid #E1E1E1}flutterwave td:first-child,flutterwave th:first-child{padding-left:0}flutterwave td:last-child,flutterwave th:last-child{padding-right:0}flutterwave fieldset,flutterwave input,flutterwave select,flutterwave textarea{margin-bottom:1.5rem}flutterwave blockquote,flutterwave dl,flutterwave figure,flutterwave form,flutterwave ol,flutterwave p,flutterwave pre,flutterwave table,flutterwave ul{margin-bottom:2.5rem}flutterwave .u-full-width{width:100%;box-sizing:border-box}flutterwave .u-max-full-width{max-width:100%;box-sizing:border-box}flutterwave .u-pull-right{float:right}flutterwave .u-pull-left{float:left}flutterwave hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #E1E1E1}flutterwave .container:after,flutterwave .row:after,flutterwave .u-cf{content:"";display:table;clear:both}@media (min-width:550px){flutterwave .column,flutterwave .columns{margin-left:4%}flutterwave .column:first-child,flutterwave .columns:first-child{margin-left:0}flutterwave .six.columns{width:48%}}flutterwave #topRow{position:relative;margin-top:25%;border-style:solid;border-width:.01vw;border-color:#737373 #737373 #ccc;padding-top:2vw;border-radius:8px 8px 0 0;background:rgba(222,222,222,1);background:-moz-linear-gradient(top,rgba(222,222,222,1) 0,rgba(236,239,241,1) 60%,rgba(246,246,246,1) 100%);background:-webkit-gradient(left top,left bottom,color-stop(0,rgba(222,222,222,1)),color-stop(60%,rgba(236,239,241,1)),color-stop(100%,rgba(246,246,246,1)));background:-webkit-linear-gradient(top,rgba(222,222,222,1) 0,rgba(236,239,241,1) 60%,rgba(246,246,246,1) 100%);background:-o-linear-gradient(top,rgba(222,222,222,1) 0,rgba(236,239,241,1) 60%,rgba(246,246,246,1) 100%);background:-ms-linear-gradient(top,rgba(222,222,222,1) 0,rgba(236,239,241,1) 60%,rgba(246,246,246,1) 100%);background:linear-gradient(to bottom,rgba(222,222,222,1) 0,rgba(236,239,241,1) 60%,rgba(246,246,246,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr="#dedede", endColorstr="#f6f6f6", GradientType=0 )}flutterwave .overlay{position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,.7);top:0;left:0}.overlay *,flutterwave .overlay{-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out}flutterwave #bottomRow{border-color:#e6e6e6 #737373 #737373;border-style:solid;border-width:.1vw;padding-left:2vw;padding-right:2vw;border-radius:0 0 8px 8px;background-color:#f4f6f7}flutterwave #primaryContainer{min-width:300px;max-width:300px;margin:auto}flutterwave #email{background-image:url(data:image/png;base64,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)}flutterwave #card{background-image:url(data:image/png;base64,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dQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCACFB1/pBAgQIFBXQACoO/YqJ0CAAIHCAgJA4cFXOgECBAjUFRAA6o69ygkQIECgsIAAUHjwlU6AAAECdQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCACFB1/pBAgQIFBXQACoO/YqJ0CAAIHCAgJA4cFXOgECBAjUFRAA6o69ygkQIECgsIAAUHjwlU6AAAECdQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCABJg//7pt3vk9rXLIEeAi9aI5/1aEgbBAgsTkAASBqybQBIal6zBLoI/EMA6OKoEQJLFBAAkkZNAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKTh2gaA+D9YC4E5C3w2542zbQQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMV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)}flutterwave #checkboxDiv{border-style:solid;border-radius:4px;border-width:.1vw;border-color:silver;padding:.3vw .3vw .3vw 1vw;height:30px}flutterwave .column,flutterwave .columns{width:100%;float:left;box-sizing:border-box}flutterwave input:disabled{color:#c7c7c7!important;background-color:#006dc7!important;border-color:#006dc7!important}flutterwave input:disabled:hover,flutterwave input[type=submit]:disabled:hover{color:#c7c7c7!important;background-color:#006dc7!important;border-color:#006dc7!important;cursor:not-allowed}flutterwave input[type=submit]:hover{color:#fff!important;background-color:#005196!important;border-color:#005196!important}flutterwave button#exit{line-height:0;padding:14px 10px;margin:0;height:0;border-radius:50%;border:none;color:#fff;background-color:#333;position:absolute;top:-10px;right:-10px;box-shadow:-1px 1px 10px #333;text-shadow:-1px 1px 1px #000}</style>';
  ourTemplate += '<input id="init" type="submit" class="button-primary" value="{{label}}"></input>';
  ourTemplate += '<div class="overlay" ng-controller="flutterwaveController">';
  ourTemplate += '<div id="primaryContainer">';
  ourTemplate += '<form autocomplete="off">';
  ourTemplate += '<div  id="topRow">';
  ourTemplate += '<button id="exit">x</button>';
  ourTemplate += '<img src="{{logo}}" style="position:absolute; top:-30px; left:38%; border-radius:100%; width:60px; height:60px;"></img>';
  ourTemplate += '<img src="data:image/png;base64,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" style="position:absolute; top:-34px; left:36.3%; border-radius:100%; width:70px; height:70px;"></img>';
  ourTemplate += '<br>';
  ourTemplate += '<center>';
  ourTemplate += '<h6 style="font-weight:bold; margin-bottom: 0px">{{title}}</h6>';
  ourTemplate += '<div style="margin-bottom: 20px">{{description}}</div>';
  ourTemplate += '</center>';
  ourTemplate += '</div>';
  ourTemplate += '<div id="bottomRow">';
  ourTemplate += '<br>';
  ourTemplate += '<input type="text" id="email" required="yes" placeholder="Email" ng-model="email" value={{email}} class="u-full-width togo">';
  ourTemplate += '<input type="text" id="card" required="yes" onkeyup="" placeholder="Card Number" ng-model="cardno" class="u-full-width togo" maxlength="19">';
  ourTemplate += '<div class="row togo">';
  ourTemplate += '<div class="six columns">';
  ourTemplate += '<input id="expiry" type="text" required="yes" placeholder="MM / YY" ng-model="expiry" class="u-full-width" maxlength="7">';
  ourTemplate += '</div>';
  ourTemplate += '<div class="six columns">';
  ourTemplate += '<input id="cvv" type="text" required="yes" placeholder="CVV" class="u-full-width" ng-model="cvv" maxlength="3">';
  ourTemplate += '</div>';
  ourTemplate += '</div>';
  ourTemplate += '<input id="pin" autocomplete="off" type="password" placeholder="PIN" class="u-full-width togo" ng-model="pin" maxlength="6" style="display: none;">';
  ourTemplate += '<input id="bvn" autocomplete="off" type="text" placeholder="BVN" class="u-full-width togo" ng-model="bvn" maxlength="11" style="display: none;">';
  ourTemplate += '<input id="otp" autocomplete="off" required="yes" type="text" placeholder="{{validatetext}}" class="u-full-width" ng-model="otp" maxlength="6" style="display: none;">';
  ourTemplate += '<div id="checkboxDiv" class="togo" style="display: none;">';
  ourTemplate += '<label style="vertical-align:middle; line-height:30px; color:#737373;">';
  ourTemplate += '<input id="remembered" type="checkbox">';
  ourTemplate += '<span id="rememberText" class="label-body">Remember me</span>';
  ourTemplate += '</label>';
  ourTemplate += '</div>';
  ourTemplate += '<br style="display: none;" />';
  ourTemplate += '<div>';
  ourTemplate += '<input id="submit" ng-click="charge()" type="submit" class="togo {{classes}}" value="Pay {{amount}} {{currency}}" ng-disabled="disableCharge"></input>';
  ourTemplate += '<input id="validate" ng-click="validate()" type="submit" class="{{classes}}" value="Validate payment" style="display:none;" ng-disabled="disableValidate"></input>';
  ourTemplate += '</div>';
  ourTemplate += '<br>';
  ourTemplate += '</div>';
  ourTemplate += '</form>';
  ourTemplate += '</div>';
  ourTemplate += '</div>';
  ourTemplate += '</flutterwave>';
  return {
    scope:{},
    restrict: 'E',
    replace: true,
    template: ourTemplate,
    link: function(scope, elem, attrs) {
      elem.find('.overlay').hide();
      FlutterwaveSettings.set('apiKey',attrs.apiKey);
      FlutterwaveSettings.set('merchantKey',attrs.merchantKey);
      FlutterwaveSettings.set('url',attrs.url);
      scope.logo = attrs.logo;
      scope.title = attrs.title;
      scope.description = attrs.description;
      scope.email = attrs.email;
      scope.amount = attrs.amount;
      scope.currency = attrs.currency;
      scope.validateoption = attrs.validateoption;
      scope.authmodel = attrs.authmodel;
      scope.country = attrs.country;
      scope.action = attrs.action;
      scope.label = attrs.label;
      scope.classes = attrs.class;
      elem.removeAttr('api-key');
      elem.removeAttr('merchant-key');
      elem.removeAttr('url');
      elem.removeAttr('title');
      elem.removeAttr('description');
      elem.removeAttr('email');
      elem.removeAttr('amount');
      elem.removeAttr('currency');
      elem.removeAttr('validateoption');
      elem.removeAttr('authmodel');
      elem.removeAttr('country');
      elem.removeAttr('action');
      elem.removeAttr('logo');
      elem.removeAttr('label');
      elem.removeAttr('class');
      scope.validatetext = (scope.authmodel === 'RANDOM_DEBIT') ? 'RANDOM DEBIT AMOUNT' : 'OTP';
      if(scope.authmodel === 'BVN'){
        elem.find('#bvn').show();
      }

      if(scope.authmodel === 'PIN'){
        elem.find('#pin').show();
      }

      elem.find('#submit, #validate').click(function(e){
        e.preventDefault();
        $(this).val('Please wait...');
      });

      elem.find('#init').click(function(e){
        e.preventDefault();
        elem.find('.overlay').show();
      });

      elem.find('#exit').click(function(e){
        e.preventDefault();
        elem.find('.overlay').hide();
      });
      elem.append('<form id="flutterwaveCheckout" method="POST" action="'+scope.action+'"></form>');
    }
  };
}])
.controller('flutterwaveController',['$scope','Flutterwave','FlutterwaveSettings','$log',function($scope, Flutterwave, FlutterwaveSettings, $log){
  // create a form, send the content of the form to the action url
  $scope.charge = function(){
    $scope.disableCharge = true;
    
    var data = {
      validateoption: $scope.validateoption,
      authmodel: $scope.authmodel,
      cvv: $scope.cvv,
      amount: $scope.amount,
      currency: $scope.currency,
      custid: $scope.email,
      narration: $scope.description,
      country: $scope.country,
      pin: $scope.pin,
      bvn: $scope.bvn
    };

    if($scope.expiry){
      var spExpiry = $scope.expiry.split('/');
      var month = spExpiry[0].trim();
      var year = spExpiry[1].trim();
      data.expirymonth =  month;
      data.expiryyear = year;
    }

    if($scope.cardno){
      var cardno = $scope.cardno.split(' ').join('');
      data.cardno = cardno;
    }

    Flutterwave.initialize()
    .then(function(resp){
      $log.debug('x-tag: ',resp);
      return Flutterwave.card.charge(data);
    })
    .then(function(resp){
      $log.debug('The response',resp);
      resp.data.data.status = resp.data.status;
      $scope.disableCharge = false;
      if(resp.data.data.requiresValidation){
        angular.element('.togo').hide();
        angular.element('#validate').show();
        angular.element('#otp').show();
        $scope.otptransactionidentifier = resp.data.data.otptransactionidentifier;
      }else{
        // success! hide modal and redirect to success page
        angular.element('.overlay').hide();
        angular.forEach(resp.data.data, function(value, key) {
          angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="'+key+'" value="'+value+'" />');
        });
        angular.element('flutterwave #flutterwaveCheckout').submit();
      }
    })
    .catch(function(err){
      $log.debug(err);
      $scope.disableCharge = false;
      // failed! hide modal and redirect to failure page
      angular.element('.overlay').hide();
      if(typeof err.data.data !== 'object'){
        angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="responsemessage" value="'+err.data.message+'" />');
        angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="status" value="error" />');
        angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="validations" value="'+err.data.data+'" />');
      }else{
        err.data.data.status = err.data.status;
        angular.forEach(err.data.data, function(value, key) {
          angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="'+key+'" value="'+value+'" />');
        });
      }
      angular.element('flutterwave #flutterwaveCheckout').submit();
    });
  };

  $scope.validate = function(){
    $scope.disableValidate = true;

    var data = {
      "otptransactionidentifier": $scope.otptransactionidentifier,
      "otp": $scope.otp
    };
    Flutterwave.initialize()
    .then(function(resp){
      $log.debug('x-tag: ',resp);
      return Flutterwave.card.validate(data);
    })
    .then(function(resp){
      $log.debug('The response',resp);
      $scope.disableValidate = false;
        // success! hide modal and redirect to success page
        angular.element('.overlay').hide();
        angular.forEach(resp.data.data, function(value, key) {
          angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="'+key+'" value="'+value+'" />');
        });
        angular.element('flutterwave #flutterwaveCheckout').submit();
      })
    .catch(function(err){
      $log.debug(err);
      $scope.disableValidate = false;
      // failed! hide modal and redirect to failure page
      angular.element('.overlay').hide();
      if(typeof err.data.data !== 'object'){
        angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="responsemessage" value="'+err.data.message+'" />');
        angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="status" value="error" />');
        angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="validations" value="'+err.data.data+'" />');
      }else{
        err.data.data.status = err.data.status;
        angular.forEach(err.data.data, function(value, key) {
          angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="'+key+'" value="'+value+'" />');
        });
      }
      
      angular.element('flutterwave #flutterwaveCheckout').submit();
    });
  };
}]);

if(noAngular){
  angular.bootstrap('#flutterwaveContainer', ['ng-flutterwave']);
}

// Add jQuery script here

if(typeof $ !== 'undefined'){

  $('flutterwave').ready(function(){

    function trimCard(cardNumber){ // jshint ignore:line 
      while(/\s/.test(cardNumber)){
        cardNumber= cardNumber.replace(" ", "");
      }
      return cardNumber;
    }

    function changeBG() {
      var cardinput = $('flutterwave #card');
      var cardnumber = $('flutterwave #card').val();
      var mcArray = ["51", "52", "53", "54", "55"];

      if ((cardnumber.charAt(0) * 1) === 4) {
        cardinput.css('background-image', 'url("data:image/png;base64,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")');
      } else if ((mcArray.indexOf(cardnumber.substr(0, 2)) * 1) !== -1) {
        cardinput.css('background-image', 'url("data:image/gif;base64,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")');
      } else {
        cardinput.css('background-image', 'url("data:image/png;base64,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dQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCACFB1/pBAgQIFBXQACoO/YqJ0CAAIHCAgJA4cFXOgECBAjUFRAA6o69ygkQIECgsIAAUHjwlU6AAAECdQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCACFB1/pBAgQIFBXQACoO/YqJ0CAAIHCAgJA4cFXOgECBAjUFRAA6o69ygkQIECgsIAAUHjwlU6AAAECdQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCABJg//7pt3vk9rXLIEeAi9aI5/1aEgbBAgsTkAASBqybQBIal6zBLoI/EMA6OKoEQJLFBAAkkZNAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKTh2gaA+D9YC4E5C3w2542zbQQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMV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")');
      }
    }

    function changeCard(){
      var text = document.getElementById("card").value;
      text = text.replace(/\s/g, '');
      text = text.replace(/[A-z]/, '');
      text = text.replace(/((?![0-9]).)/, ''); // jshint ignore:line 
      text = text.replace(/([0-9]{4})/g,'$1 ');
      document.getElementById('card').value = text;
    }

    function changeDate(){ // jshint ignore:line 
      var text= document.getElementById("expiry").value;
      text= text.replace(/[0-9]{2}/g, text+ ' / ');
      document.getElementById("expiry").value= text;
    }

    $("flutterwave input").keydown(function(evt){
      var charCode=evt.charCode || evt.keyCode;
      if((charCode * 1) === 32){
        return false;
      }

    });


    $("flutterwave #card").on('keyup', function(e){
      if(!((e.keyCode * 1) === 8 || (e.keyCode * 1) === 37 || (e.keyCode * 1) === 38 || (e.keyCode * 1) === 39 || (e.keyCode * 1) === 40 || (e.keyCode * 1) === 17)){
        changeCard();
        changeBG();
        if($(this).val().length >= 19){
          $("flutterwave #expiry").focus();
        }
      }
    });

    $("flutterwave #card").blur(function(){
      changeCard();
    });


    $("flutterwave #expiry").keyup(function(e){
      var expiry= $("flutterwave #expiry").val();
      if(!(((e.keyCode * 1) === 8 || (e.keyCode * 1) === 37 || (e.keyCode * 1) === 38 || (e.keyCode * 1) === 39 || (e.keyCode * 1) === 40))){ 
        if(expiry.charAt(0) > 1){
          document.getElementById("expiry").value = "0" +expiry+ " / ";
        }   
        if(expiry.length === 2){
          document.getElementById("expiry").value = expiry += " / ";
        }
      }

      if(expiry.length>=7){
        $("flutterwave #cvv").focus();
      }

    });
    });

  }else{
  console.warn('Could not detect jquery. Please include Jquery'); // jshint ignore:line 
}
