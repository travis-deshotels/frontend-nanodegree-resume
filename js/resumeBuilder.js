var bio={
    "name": "TND",
    "role": "ninja",
    "contacts": {
        "email": "me@example.com",
        "twitter": "@tnd"
    },
    "pictureURL": "images/fry.jpg",
    "welcomeMessage": "holla",
    "skills": ["sleeping", "beer"]
} 

var work={
    "jobs": [
    {
        "employer": "ninja inc",
        "title": "ninja",
        "dates": "in progress",
        "description": "ninja stuff",
        "location": "ville platte"
    },
    {
        "employer": "teets",
        "title": "bouncer",
        "dates": "in progress",
        "description": "more ninja stuff",
        "location": "ville platte"
    }
    ]
}

var education={
    "schools": [
    {
        "name": "mySchool",
        "city": "ville platte",
        "minors": ["math", "cmcn"]
    }
 ]}

 if( bio.skills.length > 0){
     $("#header").append(HTMLskillsStart);
     skill1 = HTMLskills.replace("%data%", bio.skills[0]);
     skill2 = HTMLskills.replace("%data%", bio.skills[1]);
     $("#header").append(skill1);
     $("#header").append(skill2);
 }

function displayWork(){
    for (job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var employerTitle = employer + title;
        $(".work-entry:last").append(employerTitle);

        var workDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        
        var more = workDates + workDescription;
        $(".work-entry:last").append(more);
    }
}

displayWork();

$("#main").append(internationalizeButton);

function inName(fullName){
    var names = fullName.split(" ");
    var firstName = names[0];
    var lastName = names[1];
    var out;
    
    firstName = firstName.substring(0, 1).toUpperCase() + firstName.substring(1);
    lastName = lastName.toUpperCase();
    
    return firstName + " " + lastName;
}
console.log(inName("ip freely"));

/*
$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});
*/
 
 /*
$("#main").append(work["position"]);
$("#main").append(education.name);
var headerName = HTMLheaderName.replace("%data%", "TND");
var headerRole = HTMLheaderRole.replace("%data%", "ninja");
$("#header").append(headerName);
$("#header").append(headerRole);
*/