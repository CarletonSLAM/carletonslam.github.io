$(function() {
  $(document).ready(function() {
    $.get('config.json', function(data) {
      $("<span>" + data.general.location + "</span>").replaceAll('slam-location');
      $("<span>" + data.general.time + "</span>").replaceAll('slam-time');
      $("<span>" + data.general.day + "</span>").replaceAll('slam-day');
    });
  });
});
