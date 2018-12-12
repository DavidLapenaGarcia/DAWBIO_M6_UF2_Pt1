/*
@name= ()
@author= David Lapena Garcia
@version= 1.0
@description = Starts the frame.
 On click an image, it sends the attr("alt") to the #chrNumber in index/frame[1].
 Next, it redirects to the frame [1].
@date = 12-12-2018
@params= none
@return = none
*/
$(document).ready(function (){
	$("img").click(function(event){
		chromosomeCliked( $(this) );
		ChromosomeToFormFrame();
	});
});

/*
@name= chromosomeCliked
@author= David Lapena Garcia
@version= 1.0
@description = Get the cliked crhomosome number by the user, and sends the attr value to the index/frame[1].
@date = 12-12-2018
@params= none
@return = none
*/
function chromosomeCliked(clicked){
  	var crhomNum = clicked.attr("alt");
	window.parent.frames[1].$("#crhNumber").html(crhomNum);
};

/*
@name= ChromosomeToFormFrame
@author= David Lapena Garcia
@version= 1.0
@description = Hide the Chromosome-frame ans shows the Form-frame.
@date = 12-12-2018
@params= none
@return = none
*/
function ChromosomeToFormFrame(){
  window.parent.$("#ChromosomeFrame").hide();
  window.parent.$("#FormFrame").show();
};
