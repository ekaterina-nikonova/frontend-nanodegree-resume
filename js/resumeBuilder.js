/*
This is empty on purpose! Your code to build the resume will go here.
 */

var firstName = "Ekaterina";
var lastName = "Nikonova";
var age = (new Date).getFullYear() - 1981;

var bio = {
  name : firstName + " " + lastName,
  age: age,
  role: "Web and Android Developer",
  contacts: {
    contactGeneric : null,
    contactMobile : "+47 97 00 32 64",
    contactEmail : "ekaterina.v.nikonova@gmail.com",
    contactTwitter : null,
    contactGithub : "https://github.com/ekaterina-nikonova",
    contactBlog : "https://www.linkedin.com/in/ekaterinanikonova/",
    location : "Fauske, Norway"
  },
  picture: "images/userpic-blue-300.jpg",
  welcome: "Hello! I am seeking full-time employment as a web or Android developer. My core skills are Java development and front-end web technologies.",
  skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  display: function() {
    $("#header").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcome));
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").prepend(HTMLbioPic.replace("%data%", bio.picture));

    if (bio.skills.length !== 0) {
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
      }
    }

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.contactMobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.contactEmail));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.contactGithub));
    $("#footerContacts").append(HTMLblog.replace("%data%", bio.contacts.contactBlog));
  }
};

bio.display();

var work = {
  "jobs" : [
    {
      "title" : "Technical Translator",
      "employer" : "Freelance",
      "dates" : "Feb 2007 &ndash; June 2016",
      "location" : "Astrakhan', Russia",
      "description" : "English-to-Russian translation of help pages, user interfaces, manuals and documentation, mobile apps, marketing materials."
    }
  ],
  "display" : function() {
    work.jobs.forEach(function (job) {
      $("#workExperience").append(HTMLworkStart);
      if (job.hasOwnProperty("employer") && job.hasOwnProperty("title")) {
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer).concat(HTMLworkTitle.replace("%data%", job.title)));
      }
      if (job.hasOwnProperty("location")) {
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
      }
      if (job.hasOwnProperty("dates")) {
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
      }
      if (job.hasOwnProperty("description")) {
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
      }
    });
  }
}

work.display();

var projects = {
  "projects" : [
    {
      "title" : "Mock Paint",
      "dates" : "Jul 2017 - Aug 2017",
      "description" : "Mock Paint is a graphic tool for Android developers. It allows you to create mockup graphic assets, such as icons and images, for your prototypes quickly and easily.",
      "image" : ["images/mobile-mockpaint-300.jpg", "images/icon-mockpaint-200.jpg"]
    },
    {
      "title" : "Career Advisor",
      "dates" : "Aug 2017 - Sep 2017",
      "description" : "Career Advisor scans job descriptions across numerous websites and finds online courses that match your desirable career path.",
      "image" : ["images/mobile-advisor-300.jpg", "images/icon-advisor-200.jpg"]
    },
    {
      "title" : "H&AElig;&AElig;?",
      "dates" : "Jan 2018 - Jun 2018",
      "description" : "This app helps language learners improve their pronunciation. Listen to the audio sample and repeat, and the app will tell you how much your utterance resembles the original.",
      "image" : ["images/mobile-hae-300.jpg", "images/icon-hae-200.jpg"]
    }
  ],
  "display" : function() {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
      project.image.forEach(function(img) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", img));
      })
    });
  }
}

projects.display();

var education = {
  "schools" : [
    {
      "name" : "Astrakhan State Technical University",
      "dates" : "2003 &ndash; 2007",
      "location" : "Astrakhan, Russia",
      "major" : "Telecommunication Networks and Switching Systems"
    }
  ],
  "onlineCourses" : [
    {
      "name" : "Udacity",
      "degree": "Nanodegree",
      "dates" : "2017",
      "location" : "https://www.udacity.com/",
      "major" : "Front-End Web Development"
    },
    {
      "name" : "Coursera",
      "degree" : "Specialization",
      "dates" : "Oct 2016 &ndash; Oct 2017",
      "location" : "https://www.coursera.org/",
      "major" : "Android App Development"
    }
  ],
  "display" : function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {
      if (school.hasOwnProperty("name")) {
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name));
      }
      if (school.hasOwnProperty("degree")) {
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", school.degree));
      }
      if (school.hasOwnProperty("dates")) {
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
      }
      if (school.hasOwnProperty("location")) {
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
      }
      if (school.hasOwnProperty("major")) {
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.major));
      }
    });
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    education.onlineCourses.forEach(function(course) {
      $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", course.name).concat(" &ndash; " + course.major).concat(" (" + course.degree + ")"));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.location));
    });
  }
}

education.display();

/*
* Logging clicks
*/
$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

/*
* Internationalized name
*/
var inName = function() {
  var nameArr = bio.name.split(" ");
  var inName = "";
  inName = inName.concat(nameArr[0].charAt(0).toUpperCase());
  inName = inName.concat(nameArr[0].slice(1).toLowerCase());
  inName = inName.concat(" " + nameArr[1].toUpperCase());
  return inName;
};

$("#name").click(inName);

/*
* Adding a map
*/
$("#mapDiv").append(googleMap);
