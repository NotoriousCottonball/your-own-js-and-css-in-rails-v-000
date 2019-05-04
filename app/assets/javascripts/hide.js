/* function hideWhenClicked(event) {
    var $target = $(event.target);
    $target.hide();
}

 $('#hide_this').click(hideWhenClicked); 
 
 */
 
 
 
 $('#hide_this').click(e => {
   console.log(e);
   console.log(e.target);
   return $(e.target).hide();
  
 });