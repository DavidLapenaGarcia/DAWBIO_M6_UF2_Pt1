/*
@name= (document).ready()
@author= David Lapena Garcia
@version= 1.0
@description = Starts the app. First, shows the correct frame and hides the others
Then, makes the logo dance.
@date = 12-12-2018
@params= none
@return = none
*/
$(document).ready(function (){
  FormToChromosomeFrame();
  logoCrazy();
});

/*
@name= FormToChromosomeFrame
@author= David Lapena Garcia
@version= 1.0
@description = Hides the Form-frame and shows the Chromosome-rame
@date = 12-12-2018
@params= none
@return = none
*/
function FormToChromosomeFrame(){
  $("#FormFrame").hide();
  $("#ChromosomeFrame").show();
};
/*
@name= logoCrazy
@author= David Lapena Garcia
@version= 1.0
@description = Makes the logo dance.
@date = 12-12-2018
@params= none
@return = none
*/
function logoCrazy(){
    $("#Logo").animate({height: '100%', opacity: '0.4'}, "slow");
    $("#Logo").animate({width: '100%', opacity: '0.8'}, "slow");
    $("#Logo").animate({height: '300px', opacity: '0.4'}, "slow");
    $("#Logo").animate({width: '300px', opacity: '1'}, "slow");
};

