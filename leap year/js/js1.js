a=parseInt(prompt("enter the year"))
if(a%4==0 && a%100!=0 || a%400==0){
	console.log("it is leap year");
}else{
	console.log("it is not leap year");
}