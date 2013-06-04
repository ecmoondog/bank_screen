$(document).ready(function(){

  $(ch_dep_button).on("click", deposit_in_checking);
  function deposit_in_checking(event) {
    event.preventDefault();
    var checking_balance = $("#checking_balance").text();
    var checking_input = $("#checking_input").val();
    var checking_total = (parseInt(checking_balance) + parseInt(checking_input));

    $("#checking_balance").text(checking_total);
  }

  $(sav_dep_button).on("click", deposit_in_savings);
  function deposit_in_savings(event) {
    event.preventDefault();
    var checking_balance = $("#checking_balance").text();
    var checking_input = $("#checking_input").val();
    var checking_total = (parseInt(checking_balance) + parseInt(checking_input));

    $("#checking_balance").text(checking_total);
  }



});