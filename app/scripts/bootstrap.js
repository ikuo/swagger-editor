'use strict';

$(function () {
  $.getJSON('/config/defaults.json').done(function (resp) {
    window.$$$defaults$$$ = resp;
    angular.bootstrap(window.document, ['PhonicsApp']);
  }).fail(function () {
    console.error('Failed to load defaults.json at', '/config/defaults.json');
  });
});
