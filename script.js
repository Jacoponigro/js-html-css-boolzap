$(document).ready(function() {
// invio messaggi
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
  $("#search").keyup(
     function() {
       var searchInput = $(this).val();
       searchInput = searchInput.toLowerCase();
       var contactsName = $(".contact .name");
       contactsName.each(function() {
         var name = $(this).text();
         name = name.toLowerCase();
         if(name.includes(searchInput) == true) {
           $(this).parents(".contact").show();
         } else {
           $(this).parents(".contact").hide();
         }
       });
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
     if (minutes < 10) {
       minutes = "0" + minutes;
     }
    templateMessage.find(".message-text").text(inputText);
    templateMessage.find(".message-time").text(time);
    templateMessage.addClass("sent");

    $(".main-right").append(templateMessage);
    $("#texy").val("");
  }
}
// ricerca contatti
