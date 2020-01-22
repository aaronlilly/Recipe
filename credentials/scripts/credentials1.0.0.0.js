$(document).ready(function () {  
        $('#dynam-now').click(function () {
         let searchString = $('#dynamId').val();

let result = _.filter(fruitChoices, function(object) {

return object.user.toLowerCase().indexOf(searchString.toLowerCase()) != -1;

});
        
        $('#ArrayD').html("");

 if ($('#dynamId').val().length > 1) 
 { 

for (var i = 0; i < result.length; i++) {

             if ($('#dynanId').val() == result[i].passwordcode ) {
            $('#ArrayD').append(result[i].fruitname + " " + result[i].size + "  " + result[i].color + "<br>")
            } else {$('#ArrayD').append("Invalid Username Or Password <br> Please Try Again...<br>")}



        };
for (var i = 0; i < allData.length; i++) {
  $('#ArrayD').append("<div id='alldata2'> </div>")
   $('#alldata2').append("<h4>" + allData[i].fruitname + " " + allData[i].size + "  " + allData[i].color + "<br> </h4>" )

 }
       }

    });

});   
   

   //||  ($('#dynamId').val() != "" || ($('#dynamId').val() != " "))

   // for (var i = 0; i < allData.length; i++) {
// $('#ArrayD').append(allData[i].fruitname + " " + allData[i].size + "  " + allData[i].color + "<br>")
// }
// if (($('#dynamId').val() != "" || ($('#dynamId').val() != " ")) 

var fruitChoices = [{
    "user": "admin",
    "fruitname" : "Admin informaiton",
    "size": "more info just for admins",
    "color": "even more info for admins",
    "passwordcode":"admin"
  },
     {
    "user": "aaron",
    "fruitname" : "Aaron Information Only",
    "size": "More Aaron Info",
    "color": "even more Aaron Info",
    "passwordcode":"aaroncool"
  },
  {
    "user": "anna",
    "fruitname" : "Anna Information Only",
    "size": "more Anna info",
    "color": "even more Anna Info",
    "passwordcode":"annarox"
  },
    {
    "user": "rodney",
    "fruitname" : "Rodney Information Only",
    "size": "more Rodney Info",
    "color": "even more Rodney Info , and just to make sure you know this is different, heres this :)",
    "passwordcode":"rodeythebomb"
    }];

var allData =

[{
    "user": "anna",
    "fruitname" : "Anna's Open Info",
    "size": "Not secure info, that everyone can see for Anna",
    "color": "Another Line of Open info for Anna"
  },
     {
    "user": "aaron",
    "fruitname" : "Aaron's Open Info",
    "size": "Not secure info, that everyone can see for Aaron",
    "color": "Another Line of Open info for Aaron"
  },
  {
    "user": "rodney",
    "fruitname" : "Rodney's Open Info",
    "size": "Not secure info, that everyone can see for Rodney",
    "color": "Another Line of Open info for Rodney"
  }];
