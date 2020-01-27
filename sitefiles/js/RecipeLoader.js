const obj = 
{"recipe" :
  [
  {
    "name": "Pancakes",
    "type": "Breakfast",
    "ingred":" ",
    "servings":" ",
    "prep": " ",
    "cook":" "
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
    "name": " ",
    "type": " ",
    "ingred":" ",
    "servings":" ",
    "prep": " ",
    "cook":" "
  },
   {
    "name": " ",
    "type": " ",
    "ingred":" ",
    "servings":" ",
    "prep": " ",
    "cook":" "
  },
   {
    "name": " ",
    "type": " ",
    "ingred":" ",
    "servings":" ",
    "prep": " ",
    "cook":" "
  }

    ]}
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


//on click populate
$(document).ready(function () {  
    // console.log(obj3.recipe.received.enhancedCallLogsExtendedEntry.countryCode.$)
$('#pancakes').click(function () {
    $('#buttnLodr').append(obj.recipe[0].name)

    });
 });
//end on click populate


