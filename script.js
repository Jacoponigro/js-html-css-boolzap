$(document).ready(function() {

  $(".send-message").click(
    function() {
      sendMessage();
    }
  );

  $("#text").keyup(
    function(event) {
      if(event.which == 13) {
        sendMessage();
      }
    }
  );

});

function sendMessage() {
  var inputText = $("#text").val();

  if(inputText != "") {
    var templateMessage = $(".templates .message-row").clone();

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var time = hours + ":" + minutes;

    templateMessage.find(".message-text").text(inputText);
    templateMessage.find(".message-time").text(time);
    templateMessage.addClass("sent");

    $(".main-right").append(templateMessage);
    $("#texy").val("");
  }
}
