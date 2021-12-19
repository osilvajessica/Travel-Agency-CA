/* Javascript Calculations for the Traveler Travel Agency Website Homepage
Created By Jessica Oliveira Silva - x20193688*/

//Form Submit Validation function
function contactForm()
{
  var name = document.forms ["contact"]["name"].value;
  var email = document.forms ["contact"]["email"].value;
  var phone = document.forms ["contact"]["phone"].value;
  var message = document.forms ["contact"]["message"].value;

  //Statement to Validate Form Fields are Not Empty

  if (name == "" || name == null || email == "" || email == null || phone == "" || phone == null || message == "" || message == null )
  {
    //Alert Error Message Informing User to Fill All Fields
    alert("Please Fill in All Form fields!");
    return false;
  }

  else
  {
    //Allert Statement Confirming Form is Submited
    alert("We Got You! We'll Get back to You Soon :)");
    return true;
  }
}
