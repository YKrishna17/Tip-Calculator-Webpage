function calculateTip() {
	var billAmount=document.getElementById("bill").value;
	var serviceType=document.getElementById("serviceType").value;
	var people=document.getElementById("people").value;
	if(billAmount===""||isNaN(billAmount)){
		alert("Please Enter Correct values in numbers");
		return;
	}
	if(serviceType<=0){
		alert("Please select any option from the list");
		return;
	}
	if(people<1||people>20){
		alert("Please enter the the value between 1 to 20");
		return;
	}
	var tip=(billAmount*serviceType)/people;
	tip=Math.round(tip);
	if(tip>650) tip=650;
	document.getElementById("tipAmount").innerHTML="  Rs. "+tip;
	document.getElementById("resultBlock").style.display="block";
}
document.getElementById("resultBlock").style.display="none";
document.getElementById("calculate").onclick=function(){
	calculateTip();
};

	