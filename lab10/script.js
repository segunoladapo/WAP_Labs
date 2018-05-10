var baseUrl = "http://jsonplaceholder.typicode.com";

$(function(){
    $('#find_id_btn').click(function () {
        $.get(baseUrl + "/users/" + document.getElementById("user_id").value)
        .done(display)
        .fail(ajaxFailure)

    });
});
function display(data){
    //JSON.parse(data);
    $('#output').text('');
    $('#output').append('User ID: ' + data.id);
    $('#output').append('<p></p>');
    $('#output').append('Name: ' + data.name);
    $('#output').append('<p></p>');
    $('#output').append('Username: ' + data.username);
    $('#output').append('<p></p>');
    $('#output').append('Address: ' + data.address.street + ', ' + data.address.suite);
    $('#output').append('<p></p>');
    $('#output').append('Phone: ' + data.phone);
    $('#output').append('<p></p>');
    console.log(data.id);
     
}
function ajaxFailure(xhr, status, exception) {
    $('#output').text(exception);
}