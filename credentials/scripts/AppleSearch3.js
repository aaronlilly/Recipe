$(document).ready(function () {  
        $('#dynam-now').click(function () {
         let searchString = $('#dynamId').val();

let result = _.filter(fruitChoices, function(object) {

return object.fruit.toLowerCase().indexOf(searchString.toLowerCase()) != -1;

});
        
        $('#ArrayD').html("");
 
for (var i = 0; i < result.length; i++) {
            $('#ArrayD').append(result[i].fruitname + " " + result[i].size + "  " + result[i].color + "<br>")
        };
    });
});   
   

var fruitChoices = [{
    "fruit": "apple",
    "fruitname" : "Apple",
    "size": "Large",
    "color": "Red"
  },
     {
    "fruit": "banana",
    "fruitname" : "Banana",
    "size": "Large",
    "color": "Yellow"
  },
  {
    "fruit": "orange",
    "fruitname" : "Orange",
    "size": "Large",
    "color": "Orange"
  },
    {
    "fruit": "strawberry",
    "fruitname" : "Strawberry",
    "size": "Small",
    "color": "Red"
    }];
