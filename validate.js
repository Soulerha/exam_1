function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (nid.length != 13) {
    return false;
  } else {
	return true;
  }
}
function checkfname() {
	let text = (document.getElementById("fname").value).trim();
	if (isNaN(text)) {
	  return false;
	} else {
	  return true;
	}
  }

function checkTicketNo() {
  let num = (document.getElementById("ticknum").value).trim();
  if (isNaN(num)) {
    return false;
  } else {
	return true;
  }
}

function validateForm(){
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}else{

		if(!checkfname()){
			alert("Fill FristName!");
			document.getElementById("fname").focus();
			return false;
		}else{
		
		if(!checkTicketNo()){
		  alert("Invalid value for No.of tickets!!");
		  document.getElementById("ticknum").focus();
		  return false;
		}else{

			total = priceCalculate();
			alert("Total price for this booking is "+total+" USD");
			return false;
			//ใช้if else ในการตรวจสอบข้อมูล
			//if(!checkfname()){
			//alert("Fill FristName!");
			//document.getElementById("fname").focus();
			//return false;
		    //}else{
			//if(!checklname()){
			//alert("Fill LastName!");
			//document.getElementById("lname").focus();
			//return false;
			//}else{
		}
	}}}

