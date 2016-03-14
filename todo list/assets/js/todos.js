(function (global, $) {
  "use strict";
  
  // Check off specific Todos by Clicking
  $("ul").on("click", "li", function (event) {
    
    $(this).toggleClass("completed"); // simply toggle the class, to indicate deletion.
    event.stopPropagation();
  });

  // Click on X to delete Todo
  $("ul").on("click", "span", function (event) {
    // Stop propagating.  
    $(this).parent().fadeOut(500, function () {
      $(this).remove();
    });

    event.stopPropagation(); // Make sure we absorb the touch.
  });

  
  /* Toggle the new note input field. */
  $('i#btn-plus').click(function(event) {
    $('input#new-note').fadeToggle();
    
    event.stopPropagation(); // Absorb the touch.
  });
  
  /* Add the new Note to the list. */
  $('input#new-note').keypress(function (event) {
    // user clicked on enter.
    if (event.which === 13) {
      // grabbing new todo text from input
      var valueOfInput = $(this).val();
      // create a new li and add to ul.
      $("ul#list").append('<li><span><i class="fa fa-trash"></i></span> ' + valueOfInput + '</li>');
      $(this).val("");
    }

  });
}(window, jQuery));