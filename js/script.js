$(document).ready(function(){

  var checking_balance = 1000;
  $("#checking_balance").text(checking_balance);

  var savings_balance = 3000;
  $("#savings_balance").text(savings_balance);

  $(ch_dep_button).on("click", deposit_in_checking);
  function deposit_in_checking(event) {

    var checking_input = $("#checking_input").val();
    var checking_total = checking_balance + checking_input;

    $("#checking_balance").text(checking_total);
    var checking_balance = checking_total;

    event.preventDefault();
  }

});