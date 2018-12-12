/*
@name= ()
@author= David Lapena Garcia
@version= 1.0
@description = Starts the frame.
@date = 1-12-2018
@params= none
@return = none
*/
$(document).ready(function (){
	$("img").click(function(event){
		chromosomeCliked();
	});
});

/*
@name= chromosomeCliked
@author= David Lapena Garcia
@version= 1.0
@description = Get the cliked crhomosome number by the user and call to redirect to the form-frame.
@date = 1-12-2018
@params= none
@return = none
*/
function chromosomeCliked(){
  var crhomNum = $(this).attr("alt")
	window.parent.frames[1].$("#crhNumber").html(crhomNum);
	ChromosomeToFormFrame();
};

/*
@name= ChromosomeToFormFrame
@author= David Lapena Garcia
@version= 1.0
@description = Hide the Chromosome-frame ans shows the Form-frame.
@date = 1-12-2018
@params= none
@return = none
*/
function ChromosomeToFormFrame(){
  window.parent.$("#ChromosomeFrame").hide();
  window.parent.$("#FormFrame").show();
};
