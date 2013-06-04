$(document).ready(function(){
  

  var checking_container = $("#checking")
  var savings_container = $("#savings")
  var checking_bal_container = $("#checking_balance")
  var savings_bal_container = $("#savings_balance")

  empty_inputs_and_show_errors()

  function empty_inputs_and_show_errors() {
    if (checking_bal_container.text() == 0) {
      checking_container.addClass("error");
    }
    else {
      checking_container.removeClass("error");
    }

    if(savings_bal_container.text() == 0) {
      savings_container.addClass("error");
    }
    else {
      savings_container.removeClass("error");
    }

    $('input').val('');

  }


  $(ch_dep_button).on("click", deposit_in_checking);
  function deposit_in_checking(event) {
    
    var checking_balance = checking_bal_container.text();
    var checking_input = $("#checking_input").val(); //still need to prepare for input = "" error
    var checking_total = (parseInt(checking_balance) + parseInt(checking_input));

    checking_bal_container.text(checking_total);
    empty_inputs_and_show_errors();
    event.preventDefault();
  }

  $(sav_dep_button).on("click", deposit_in_savings);
  function deposit_in_savings(event) {
    
    var savings_balance = savings_bal_container.text();
    var savings_input = $("#savings_input").val(); //still need to prepare for input = "" error
    var savings_total = (parseInt(savings_balance) + parseInt(savings_input));

    savings_bal_container.text(savings_total);
    empty_inputs_and_show_errors();
    event.preventDefault();
  }

  $(sav_with_button).on("click", withdraw_from_savings);
  function withdraw_from_savings(event) {
    
    var savings_balance = savings_bal_container.text();
    var savings_input = $("#savings_input").val(); //still need to prepare for input = "" error
    
    if(parseInt(savings_balance) < parseInt(savings_input)){
      alert("You do not have enough money for that withdraw!");
    }
    else {
      var savings_total = (parseInt(savings_balance) - parseInt(savings_input));
    }

    savings_bal_container.text(savings_total);
    empty_inputs_and_show_errors();
    event.preventDefault();
  }

  $(ch_with_button).on("click", withdraw_from_checking);
  function withdraw_from_checking(event) {
    
    var savings_balance = savings_bal_container.text();
    var checking_balance = checking_bal_container.text();
    var checking_input = $("#checking_input").val(); //still need to prepare for input = "" error
    
    if(parseInt(checking_balance) < parseInt(checking_input)){
      if((parseInt(checking_balance) + parseInt(savings_balance)) >= parseInt(checking_input)){
        var checking_total = 0;
        var savings_total = parseInt(savings_balance) - parseInt(checking_input) + parseInt(checking_balance);
      }
      else {
        alert("You do not have enough money for that withdraw!");
        
      }
    }  
    else {
      var checking_total = (parseInt(checking_balance) - parseInt(checking_input));
    }
    
    

    checking_bal_container.text(checking_total);
    savings_bal_container.text(savings_total);
    empty_inputs_and_show_errors();
    event.preventDefault();

  };


});