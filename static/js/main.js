// function calculateDayIndex(day, month, year){
//   let dd = day; // validate day 1<= day <=31
//   let mm = month; // validate month 0 < month <= 12
//   let temp = year.split("")
//   let temp2 = temp.slice()
//   let yy = parseInt("".join(((temp.split("")).slice(0,2)))) // pick first 2 digits from year as century, and convert to integer
//   let cc = parseInt("".join(((temp2.split("")).slice(2,2)))) // pick last 2 digits from year as year - will this work for year 00?, and convert to integer
//   let dayIndex =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7 // substitute values in the formula
//   // return the index
// }
// ​
// function getDayAndName(){
//   // days of the week array
//   // akan male names array
//   // akan female names array
//   let index = calculateDayIndex(); // call our function & pass arguments (input from user), day, month, year
  
//   let day = days[index]  // 
//   let gender = "";  // gender input from user
//   let name = "";   
//   if (gender === "M"){
//       // use male names array
//   } // else use female names array
// ​
//   // return day && name and display it to user
// }

function getAkanName(){

  //get values submitted by the user
  var day = document.getElementById('day').value;
  var month = document.getElementById('month').value;   
  var year = document.getElementById('year').value;
  var gender = document.getElementById('gender').value;

  if(validateUserInput(day,month,year,gender)){
    alert("Valid values enterred");
    var cc = year.slice(0, 2);
    var yy = year.slice(2, 4);
    var day_born = getDayOfWeek(cc,yy,month,day);
    var akan_name = getNameFromDayofWeek(day_born,gender);

    alert("Your Akan name is: " + akan_name);
  }
  
}


function validateUserInput(day,month,year,gender) {
    //validate year
    if(year == "" || year.length !=4 || year>2100 || year <=1900) {
       alert( "Please provide a valid year of birth! eg 2019" );
       document.getElementById('year').focus() ;
       return false;
    }
    //validate month
    else if( month == "" || isNaN( month ) || 
    month.length != 2 || month > 12  || month <= 0){
       alert( "Please provide your month of birth! between 1 and 12" );
       document.getElementById('month').focus() ;
       return false;
    }
    //validate day
    else if( day == "" || isNaN( day ) || 
    day.length != 2|| day > 31 || day <= 0) {
       alert( "Please provide a valid day that you were born in! Two digits e.g. 01" );
       document.getElementById('day').focus() ;
       return false;
    }
    //validate gender
    else if(gender == "" ) {
        alert("You must select male or female");
        return false;
    }   
    else{
      return true ;
    }

   }


   function getDayOfWeek(century,year,month,day){

    CC = parseInt(century);
    YY = parseInt(year);
    MM = parseInt(month);
    DD = parseInt(day);


    //calculate day of the week
    dd =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
   return (Math.floor(dd));
  
  }


  function getNameFromDayofWeek(day,gender){
    //declare an array to store names based on day 0th index represents sunday,6th saturday
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

    //return the name
    if(gender == "female"){
      return femaleNames[day];
    } else{
      return maleNames[day];
    }
    
  }