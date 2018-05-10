"use strict";

$(function() {
    $('#hw').change(function() {
        var file = '/~rshrestha/homework-ajax/homeworks/'+$('#hw').val();
        $.ajax({
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Access-Control-Allow-Origin", "http://mumstudents.org/");
            },
            'url': file,
            'type': 'GET',
            'success': ajaxSuccess,
            'error': ajaxFailure
        });
    });
});

function ajaxSuccess(data) {
    $('#output').val(data);
}

function ajaxFailure(xhr, status, exception) {
    console.log(xhr, status, exception);
}

$.get('https://www.google.com/images/branding/product/ico/googleg_lodp.ico');