/*
@name        = $(document).ready()
@author      = David Lapena Garcia
@version     = 1.0
@description = Makes changes at the time of loading the page.
@date        = 10-12-2018
@params      = none
@return      = none
*/
$( document ).ready(function() {
    
    /*
    @name        = $("#buttonForm").clik()
    @author      = David Lapena Garcia
    @version     = 1.0
    @description = Prevent the defult values on form tag and call the function
    @date        = 10-12-2018
    @params      = none
    @return      = none
    */
    $("#register").click(function(){
        console.log("ok, register cliked");
        event.preventDefault();
        register( $("#Dna").val().toUpperCase() );
    });
	$("#toChromosome").click(function(){
        console.log("ok, toChromosome cliked");
        event.preventDefault();
        toChromosome();
    })
});


/*
@name= register
@author= David Lapena Garcia
@version= 1.0
@description = First, check if the data given by the user is correct.
If is correct, call to confirm the registraion.
If it is not, notifies the user.
@date = 1-12-2018
@params= none
@return = none
*/
function register(dna){
  if(validateDna(dna) === null){
  	$("#messageToUser").html(dna+" is correct");
  	confirmRegister();
  }else{
	$("#messageToUser").html("This DNA code is no valid: [ "+dna+"]");
  	$("#messageError").html("ERROR: "+validateDna(dna));
  }
};

/*
@name= validateDna
@author= David Lapena Garcia
@version= 1.0
@description = This function validates a correct dna sentence.
Validates a not numeric data, an string data, not empty data, a length enough data, and a correct DNA parameter.
@date = 1-12-2018
@params= dna
@return = null if correct. String wicth the error if not.
*/
function validateDna(dna){
	//dna = dna.toUpperCase();  // why today this breaks? 
	var result=null;
	var adnRegExp = new RegExp("[^ACGT]","i");
	if($.isNumeric(dna)){
		result = "The sentence can not be numeric";
	}else if(typeof dna != 'string'){
		result = "The sentence must be alphabetical";
	}else if(dna.lenght <= 0 || dna === ""){
		result = "The sentence must be longer";
	}else if(dna.match(adnRegExp)){
		result = "The sentence must be a valid dna sentence [A-C-T-G]";
	}else{
		result = null;
	}
	return result;
};

/*
@name= confirmRegister
@author= David Lapena Garcia
@version= 1.0
@description = This function confirms the registration by the user.
@date = 1-12-2018
@params= dna
@return = null if correct. String wicth the error if not.
*/
function confirmRegister() {
	if( validateDna( $("#Dna").val().toUpperCase()==null)){
		if (confirm("Confirm registration?") == true) {
	        window.open("./../pop-Up/popUpWindows.html", "_blank","width=1300px", "height=500px");        
	        return true;
	    } else {
	        alert("Registry Cancelled ");
	        return false;
	    }
	}
};

/*
@name= mayus
@author= David Lapena Garcia
@version= 1.0
@description = Transforms all the given values to upper case.
@date = 1-12-2018
@params = e string
@return = none
*/
function mayus(e) {
    e.value = e.value.toUpperCase();
};

/*
@name= toChromosome
@author= David Lapena Garcia
@version= 1.0
@description = This function resets the page content modified and call a function for return to the frame[0]
@date = 1-12-2018
@params= none
@return = none
*/
function toChromosome(){
	$("#Dna").val("");
	$("#messageToUser").html("");
	$("#messageError").html("");
	formToChromosomeFrame();
};

/*
@name= FormToChromosomeFrame
@author= David Lapena Garcia
@version= 1.0
@description = Hide the Chromosome-frame and shows the Form-frame in the parent window.
@date = 1-12-2018
@params= none
@return = none
*/
function formToChromosomeFrame(){
	window.parent.$("#FormFrame").hide();
  	window.parent.$("#ChromosomeFrame").show();
  
};