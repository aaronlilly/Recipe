const obj = 
{"recipe" :
  [
  {
    "name": "Fluffy Pancakes",
    "type": "Breakfast",
    "ingred":"3/4 cup milk <br> 2 tablespoon vinegar <br> 1 cup flour <br> 1 teaspoon baking powder <br> 1/2 teaspoon baking soda <br> 1/2 teaspoon salt <br> 1 banana" ,
    "servings":" ",
    "prep": " ",
    "cook":"add vinegar to milk and set aside, stir dry ingrediants together with banana, then add milk mixture, stir as little as possible as the more you stir the less fluffy the pancakes. then cook on skillet.  "
  },
    {
    "name": "Buffalo Maranade",
    "type": "condiment",
    "ingred":"2/3 cup Franks Red Hot <br> 1/2 Cup Butter <br> 1/8 teaspoon garlic powder <br> 1 1/2 tablespoon white vinegar <br> 1/4 teaspoon worchestershire sause <br> 1/4 teaspoon cayenne pepper " ,
    "servings":" ",
    "prep": "15 mins",
    "cook":"Place butter and franks in sauce pan, heat on low until butter has melted, add other incrediants, stir, add to chickent to maranade overnight."
  },
  {
    "name": "Honey Mustard",
    "type": "condiment",
    "ingred":"1/2 cup mayo <br> 1/4 cup Mustard <br> 1/4 cup Honey <br> cayenne pepper to taste (otpional)",
    "servings":" ",
    "prep": "5 mins",
    "cook":"Stir all items in bowl, serve"
  },
   {
    "name": "Aaron's Jalapeno Sauce",
    "type": "condiment",
    "ingred":"20 Fresh Jalapeno Peppers <br> 1 1/2 cups vinegar <br> 1/2 teaspoon salt <br> 3 teaspoon minced fresh Garlic",
    "servings":" ",
    "prep": "20 mins",
    "cook":"Place All in sauce pan, bring to boil, then simmer for 10 minutes or until Peppers are soft, place in blender and blend to puree, keep in closed container and refidgerated until use. "
  }

    ]}

const lB = "<br>"
const S = " "
const sG ="Servings "
const nM = "Name "
const tP = "Type "
const iG = "Ingrediants "
const pP = "Prep "
const cK = "Instructions "

// ;
// //log,id,presentation number..etc
// const obj2 = 
// {"recipe":
// {"recipeName":{"$":"Pancakes"},
//   "received":
//   {"enhancedCallLogsExtendedEntry":
//     {"countryCode":{"$":"1"},
//     "callLogId":{"$":"A812"},
//     "callId":{"$":"249"},
//     "subscriberType":{"$":"User"},
//     "callingPresentationNumber":{"$":"+1674"},
//     "callingPresentationName":{"$":"LARGE"},
//     "callingPresentationIndicator":{"$":"Public"},
//     "connectedNumber":{"$":"+1ad419"},
//     "connectedNumberSource":{"$":"h7088op8759-ll"},
//     "connectedName":{"$":"Support"},
//     "connectedPresentationIndicator":{"$":"Public"},
//     "basicCallType":{"$":"Group"},
//     "time":{"$":"2020-01-03T17:26:53.058-05:00"},
//     "startTime":{"$":"1578090413058"},
//     "answerTime":{"$":"1578090418986"},
//     "releaseTime":{"$":"1578090643999"},
//     "redirectingNumber":{"$":"+1293"},
//     "redirectingName":{"$":"Support"},
//     "redirectingPresentationIndicator":{"$":"Public"},
//     "redirectingReason":{"$":"call"}}}}}    
// ;

// const obj3 = 
// {"recipe":
// {"recipeName":{"$":"Pancakes"},
//   "received":
//   {"enhancedCallLogsExtendedEntry":
//     {"countryCode":{"$":"1"},
//     "callLogId":{"$":"A812"},
//     "callId":{"$":"249"},
//     "subscriberType":{"$":"User"},
//     "callingPresentationNumber":{"$":"+1674"},
//     "callingPresentationName":{"$":"LARGE"},
//     "callingPresentationIndicator":{"$":"Public"},
//     "connectedNumber":{"$":"+1ad419"},
//     "connectedNumberSource":{"$":"h7088op8759-ll"},
//     "connectedName":{"$":"Support"},
//     "connectedPresentationIndicator":{"$":"Public"},
//     "basicCallType":{"$":"Group"},
//     "time":{"$":"2020-01-03T17:26:53.058-05:00"},
//     "startTime":{"$":"1578090413058"},
//     "answerTime":{"$":"1578090418986"},
//     "releaseTime":{"$":"1578090643999"},
//     "redirectingNumber":{"$":"+1293"},
//     "redirectingName":{"$":"Support"},
//     "redirectingPresentationIndicator":{"$":"Public"},
//     "redirectingReason":{"$":"call"}}}}}    
// ;


$(document).ready(function () {  
    
    $('#import').append('<button class="btn btn-info" caption="Pancakes" id="pancakes">Pancakes</button> ' + '<button class="btn btn-info" caption="Buffalo Maranade" id="buffaloMaranade">Buffalo Maranade</button> ' + '<button class="btn btn-info" caption="Honey Mustard" id="honeyMustard" >Honey Mustard</button> ' + '<button class="btn btn-info" caption="Jalapeno Sauce" id="jalapenoSauce">Aarons Jalapeno Sauce</button> ')

    });



//on click populate
$(document).ready(function () {  
    // console.log(obj3.recipe.received.enhancedCallLogsExtendedEntry.countryCode.$)
$('#pancakes').click(function () {
     $('#buttnLodr').html("")
    $('#buttnLodr').append(obj.recipe[0].name + lB + iG + obj.recipe[0].ingred + lB +  sG + obj.recipe[0].servings + lB + pP + obj.recipe[0].cook)

    });
 });
//end on click populate



$(document).ready(function () {  
$('#buffaloMaranade').click(function () {
$('#buttnLodr').html("")
    $('#buttnLodr').append(obj.recipe[1].name + lB + iG + obj.recipe[1].ingred + lB +  sG + obj.recipe[1].servings + lB + pP + obj.recipe[1].cook)
    });
 });


$(document).ready(function () {  
$('#honeyMustard').click(function () {
$('#buttnLodr').html("")
    $('#buttnLodr').append(obj.recipe[2].name + lB + iG + obj.recipe[2].ingred + lB +  sG + obj.recipe[2].servings + lB + pP + obj.recipe[2].cook)
    });
 });

$(document).ready(function () {  
$('#jalapenoSauce').click(function () {
$('#buttnLodr').html("")
    $('#buttnLodr').append(obj.recipe[3].name + lB + iG + obj.recipe[3].ingred + lB +  sG + obj.recipe[3].servings + lB + pP + obj.recipe[3].cook)
    });
 });

