
$(".icon").click(function(){
    var questionDiv = $(this).parent();
    var answer = questionDiv.nextAll(".faq-answer").first();
    answer.toggle();
    
if (answer.is(":visible")){
$(this).attr("src","assets/images/icon-minus.svg");
}
else{
$(this).attr("src","assets/images/icon-plus.svg");}

});





