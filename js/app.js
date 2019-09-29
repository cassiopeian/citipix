// 1. Write a detailed pseudocode for this game
// 2. Follow your pseudocode line by line (or in an order that makes sense)
// 3. Can't remember a method/function, Google it. Ask out loud. You got this :)


// When you submit the form by clicking on the submit button, 
// the background should change to match the city the user selected in the dropdown.

$('form').on('submit', function(event){
  event.preventDefault();
  $('body').css('background', 'url("images/'+$('#city-options').val()+'.jpg")');
});

