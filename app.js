$(document).ready(function(){
  
  var newLi = "<li class='add-li'><div class='add-remove-button'></i><i class='fa fa-check-square'></i><i class='fa fa-check-square-o'></i><i class='fa fa-minus-square-o'></i></div></li>"
  


$('.add-button').click(function(){
      $('input').val(function(i,val){
        $('.list-item').append(newLi);
     $('.list-item  li').last().append(val);
      })
    });


  $('input').keydown(function(enter){
    if (enter.keyCode == 13) {
      $('input').val(function(i,val){
        $('.list-item').append(newLi);
      $('.list-item  li').last().append(val);
      });
    }
  });

  $('.list-item').on('click', '.fa-minus-square-o', function(){
    $(this).parent().parent().remove();
  });
  
 $('.list-item').on('click', '.fa-check-square', function(){
   $(this).hide();
   $(this).parent().parent().addClass('line-through');
   $(this).siblings('.fa-check-square-o').show();
 }).on('click', '.fa-check-square-o', function(){
   $(this).hide();
   $(this).parent().parent().removeClass('line-through');
   $(this).siblings('.fa-check-square').show();
 })
  
 $('input').focus();
  
});

