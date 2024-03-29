(function (global, $) {
  "use strict";
  
  global.querySelectorAll(".item").forEach(item => {
    item.addEventListener('click', () => {
      toggle(item, 'completed')      
    });
  });

  function toggle(item, status) {
    if (item.classList.contains(status)) {
      item.classList.remove(status);
    } else {
      item.classList.add(status);
    }
  }

  global.querySelectorAll("ul li span").forEach(deleteSpan => {
    deleteSpan.addEventListener('click', () => {
      console.log('deleteSpan', deleteSpan)
      fadeOut(deleteSpan, "li");
    });
  });

  function fadeOut(fadeTarget, item) {
    let fadeEffect = setInterval(() => {
      if(!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1;
      } 
      if(fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.1;
      } else {
        clearInterval(fadeEffect)
      }
      if (item) { 
        fadeTarget.closest(item).remove(); 
      }
    }, 500);
  }

  global.querySelector('h1').addEventListener('click', (item) =>{ 
    const inputField = global.querySelector('input#new-note');
    // fadeOut(inputField);

  })

  // /* Toggle the new note input field. */
  // $('i#btn-plus').click(function(event) {
  //   $('input#new-note').fadeToggle();
    
  //   event.stopPropagation(); // Absorb the touch.
  // });
  
  /* Add the new Note to the list. */
  $('input#new-note').keypress(function (event) {
    // user clicked on enter.
    if (event.which === 13) {
      // grabbing new todo text from input
      var valueOfInput = $(this).val();
      // create a new li and add to ul.
      $("ul#list").append(`<li class="item"><span class="btn-trash"><i class="fa fa-trash"></i></span>${valueOfInput}</li>`);
      $(this).val("");
    }

  });
}(document, jQuery));