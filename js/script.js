$(document).ready(function(){

  $(ch_dep_button).on("click", deposit_in_checking);
  function deposit_in_checking(event) {
    
    var checking_balance = $("#checking_balance").text();
    var checking_input = $("#checking_input").val();
    var checking_total = (parseInt(checking_balance) + parseInt(checking_input));

    $("#checking_balance").text(checking_total);
    event.preventDefault();
  }

  $(sav_dep_button).on("click", deposit_in_savings);
  function deposit_in_savings(event) {
    
    var savings_balance = $("#savings_balance").text();
    var savings_input = $("#savings_input").val();
    var savings_total = (parseInt(savings_balance) + parseInt(savings_input));

    $("#savings_balance").text(savings_total);
    event.preventDefault();
  }

  $(sav_with_button).on("click", withdraw_from_savings);
  function withdraw_from_savings(event) {
    
    var savings_balance = $("#savings_balance").text();
    var savings_input = $("#savings_input").val();
    
    if(parseInt(savings_balance) < parseInt(savings_input)){
      alert("You do not have enough money for that withdraw!");
    }
    else {
      var savings_total = (parseInt(savings_balance) - parseInt(savings_input));
    }

    $("#savings_balance").text(savings_total);
    event.preventDefault();
  }

  $(ch_with_button).on("click", withdraw_from_checking);
  function withdraw_from_checking(event) {
    
    var savings_balance = $("#savings_balance").text();
    var checking_balance = $("#checking_balance").text();
    var checking_input = $("#checking_input").val();
    
    if(parseInt(checking_balance) < parseInt(checking_input)){
      if((parseInt(checking_balance) + parseInt(savings_balance)) > parseInt(checking_input)){
        var checking_total = 0;
        var savings_total = parseInt(savings_balance) - parseInt(checking_input);
      }
      else {
        alert("You do not have enough money for that withdraw!");
        
      }
    }  
    else {
      var checking_total = (parseInt(checking_balance) - parseInt(checking_input));
    }
    
    

    $("#checking_balance").text(checking_total);
    $("#savings_balance").text(savings_total);

    event.preventDefault();

  };


});