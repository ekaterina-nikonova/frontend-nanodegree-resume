var firstName = 'Ekaterina';
var lastName = 'Nikonova';
var fullName = firstName + ' ' + lastName;

/* In case I need to include age in my CV.
I don't comment these lines so that the result
could be tested in the console. */

/**
 * @description Calculates current age in years
 * @param {Date} birthDate - Date of birth where year, month and day of the month are present
 * @returns {number} Number of full years between the date of birth and today
 **/
function age(birthDate) {
  var nowDate = new Date();
  var nowYear = nowDate.getFullYear();
  var nowMonth = nowDate.getMonth();
  var nowDay = nowDate.getDate();
  var years = nowYear - birthDate.getFullYear();
  if (nowMonth < birthDate.getMonth() || (nowMonth === birthDate.getMonth() && nowDay < birthDate.getDate())) years--;
  return years;
}
var birthDate = new Date(1981, 04, 22);
var myAge = age(birthDate);

var bio = {
  name: fullName,
  role: "Web and Android Developer",
  contacts: {
    mobile: "+47 97 00 32 64",
    email: "ekaterina.v.nikonova@gmail.com",
    github: "Ekaterina-Nikonova",
    location: "Fauske, Norway"
  },
  biopic: "images/userpic-blue-300.jpg",
  welcomeMessage: "Hello! I am seeking full-time employment as a web or Android developer. My core skills are Java development and front-end web technologies.",
  skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
  display: function() {
    $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
    $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
    $('#header').prepend(HTMLbioPic.replace('%data%', bio.biopic));

    $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
    $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
    $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));

    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

    if (bio.skills.length !== 0) {
      $('#header').append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
        $('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
      }
    }

  }
};

bio.display();

var education = {
  schools: [{
    name: "Astrakhan State Technical University",
    location: "Astrakhan, Russia",
    degree: "Undergraduate",
    majors: ['Telecommunication Networks and Switching Systems'],
    dates: "2003 &ndash; 2007",
    url: "http://astu.org/"
  }],
  onlineCourses: [{
      title: "Front-End Web Development Nanodegree",
      school: "Udacity",
      dates: "April &ndash; July 2017",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
      certificate: "#"
    },
    {
      title: "Android App Development Specialization",
      school: "Coursera",
      dates: "October 2016 &ndash; August 2017",
      url: "https://www.coursera.org/specializations/android-app-development",
      certificate: "https://www.coursera.org/account/accomplishments/records/CVTJSY5W5NUN"
    }
  ],
  display: function() {
    $('#education').append(HTMLschoolStart);
    education.schools.forEach(function(school, index) {
      if (school.hasOwnProperty('name')) {
        // I'm sure there's a better way to replace '#' in a string var, but I couldn't find anything that wouldn't require adding a CSS class in helper.js.
        if (school.hasOwnProperty('url')) {
          HTMLschoolName = '<a href = "' + school.url + '">%data%';
        }
        var schoolName = HTMLschoolName.replace('%data%', school.name);
        if (school.hasOwnProperty('degree')) {
          schoolName = schoolName.concat(HTMLschoolDegree.replace('%data%', school.degree));
        }
        $('.education-entry:last').append(schoolName);
      }
      if (school.hasOwnProperty('dates')) {
        $('.education-entry:last').append(HTMLschoolDates.replace('%data%', school.dates));
      }
      if (school.hasOwnProperty('location')) {
        $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', school.location));
      }
      if (school.hasOwnProperty('majors')) {
        school.majors.forEach(function(major) {
          $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', major));
        });
      }
      $('.education-entry:last').append('<hr>');
    });
    $('#education').append(HTMLonlineClasses);
    $('#education').append(HTMLschoolStart);
    education.onlineCourses.forEach(function(course, index) {
      if (course.hasOwnProperty('title')) {
        if (course.hasOwnProperty('url')) {
          HTMLonlineTitle = '<a href="' + course.url + '">%data%';
        }
        var courseName = HTMLonlineTitle.replace('%data%', course.title);
        if (course.hasOwnProperty('school')) {
          courseName = courseName.concat(HTMLonlineSchool.replace('%data%', course.school));
        }
        $('.education-entry:last').append(courseName);
      }
      if (course.hasOwnProperty('dates')) {
        $('.education-entry:last').append(HTMLonlineDates.replace('%data%', course.dates));
      }
      if (course.hasOwnProperty('certificate')) {
        var cert = '<br><a href="' + course.certificate + '">View certificate &#9758;</a>';
        $('.education-entry:last').append(cert);
      }
      if (index !== education.onlineCourses.length - 1) {
        $('.education-entry:last').append('<hr>');
      }
    });
  }
};

education.display();

var work = {
  jobs: [{
    employer: "Freelance",
    url: "https://www.fl.ru/users/In-visum/",
    title: "Technical Translator",
    location: "Astrakhan, Russia",
    dates: "Feb 2007 &ndash; June 2016",
    description: "English-to-Russian translation of help pages, user interfaces, manuals and documentation, mobile apps, marketing materials."
  }],
  display: function() {
    work.jobs.forEach(function(job) {
      $('#workExperience').append(HTMLworkStart);
      if (job.hasOwnProperty('url')) {
        HTMLworkEmployer = '<a href="' + job.url + '">%data%';
      }
      if (job.hasOwnProperty('employer') && job.hasOwnProperty('title')) {
        $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', job.employer).concat(HTMLworkTitle.replace('%data%', job.title)));
      }
      if (job.hasOwnProperty('location')) {
        $('.work-entry:last').append(HTMLworkLocation.replace('%data%', job.location));
      }
      if (job.hasOwnProperty('dates')) {
        $('.work-entry:last').append(HTMLworkDates.replace('%data%', job.dates));
      }
      if (job.hasOwnProperty('description')) {
        $('.work-entry:last').append(HTMLworkDescription.replace('%data%', job.description));
      }
    });
  }
};

work.display();

var projects = {
  projects: [{
      title: "Mock Paint",
      dates: "July 2017 &ndash; August 2017",
      description: "Mock Paint is a graphic tool for Android developers. It allows you to create mockup graphic assets, such as icons and images, for your prototypes quickly and easily.",
      images: ['images/mobile-mockpaint-300.jpg', 'images/icon-mockpaint-200.jpg']
    },
    {
      title: "Career Advisor",
      dates: "August 2017 &ndash; September 2017",
      description: "Career Advisor scans job descriptions across numerous websites and finds online courses that match your desirable career path.",
      images: ['images/mobile-advisor-300.jpg', 'images/icon-advisor-200.jpg']
    },
    {
      title: "H&AElig;&AElig;?",
      dates: "January 2018 &ndash; June 2018",
      description: "This app helps language learners improve their pronunciation. Listen to the audio sample and repeat, and the app will tell you how much your utterance resembles the original.",
      images: ['images/mobile-hae-300.jpg', 'images/icon-hae-200.jpg']
    }
  ],
  display: function() {
    projects.projects.forEach(function(project) {
      $('#projects').append(HTMLprojectStart);
      if (project.hasOwnProperty('title')) {
        $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', project.title));
      }
      if (project.hasOwnProperty('dates')) {
        $('.project-entry:last').append(HTMLprojectDates.replace('%data%', project.dates));
      }
      if (project.hasOwnProperty('description')) {
        $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', project.description));
      }
      if (project.hasOwnProperty('images')) {
        project.images.forEach(function(img) {
          $('.project-entry:last').append(HTMLprojectImage.replace('%data%', img));
        });
      }
    });
  }
};

projects.display();

/*
 * Logging clicks
 */
// $(document).click(function(loc) {
//   logClicks(loc.pageX, loc.pageY);
// });

/*
 * Internationalized name - activated by clicking the name
 */
var inName = function() {
  var nameArr = bio.name.split(' ');
  var inName = '';
  inName = inName.concat(nameArr[0].charAt(0).toUpperCase());
  inName = inName.concat(nameArr[0].slice(1).toLowerCase());
  inName = inName.concat(' ' + nameArr[1].toUpperCase());
  return inName;
};
$('#name').click(inName);

/*
 * Adding a map
 */
$('#mapDiv').append(googleMap);

/*
 * Footer contacts
 */
$('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
$('#footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
$('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
$('#footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));

/*
 * All links should open in a new tab
 */
$('a').attr('target', '_blank');
