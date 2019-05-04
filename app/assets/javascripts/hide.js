/* function hideWhenClicked(event) {
    var $target = $(event.target);
    $target.hide();
}

 $('#hide_this').click(hideWhenClicked); 
 
 */
 
 
 
 $('#hide_this').click(e => {
   return $(e.target).hide();
 });