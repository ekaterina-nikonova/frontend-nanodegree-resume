var model = {
  firstName: 'Ekaterina',
  lastName: 'Nikonova',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },

  /* In case I need to include age in my CV.
  I don't comment these lines so that the result
  could be tested in the console. */

  /**
  * @description Calculates current age in years
  * @param {Date} birthDate - Date of birth where year, month and day of the month are present
  * @returns {number} Number of full years between the date of birth and today
  **/
  age: function(birthDate) {
    var nowDate = new Date();
    var nowYear = nowDate.getFullYear();
    var nowMonth = nowDate.getMonth();
    var nowDay = nowDate.getDate();
    var years = nowYear - this.birthDate.getFullYear();
    if (nowMonth < this.birthDate.getMonth() || (nowMonth === this.birthDate.getMonth() && nowDay < this.birthDate.getDate())) years--;
    return years;
  },
  birthDate: new Date(1981, 04, 22),
  bio: {
    role: "Web and Android Developer",
    contacts: {
      mobile: "+47 97 00 32 64",
      email: "ekaterina.v.nikonova@gmail.com",
      github: "Ekaterina-Nikonova",
      location: "Fauske, Norway"
    },
    biopic: "images/userpic-blue-300.jpg",
    welcomeMessage: "Hello! I am seeking full-time employment as a web or Android developer. My core skills are Java development and front-end web technologies.",
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
  },
  education: {
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
        // TODO: update the link after finishing the ND
        certificate: "https://www.udacity.com/"
      },
      {
        title: "Android App Development Specialization",
        school: "Coursera",
        dates: "October 2016 &ndash; August 2017",
        url: "https://www.coursera.org/specializations/android-app-development",
        certificate: "https://www.coursera.org/account/accomplishments/records/CVTJSY5W5NUN"
      }
    ]
  },
  jobs: [{
    employer: "Freelance",
    url: "https://www.fl.ru/users/In-visum/",
    title: "Technical Translator",
    location: "Astrakhan, Russia",
    dates: "Feb 2007 &ndash; June 2016",
    description: "English-to-Russian translation of help pages, user interfaces, manuals and documentation, mobile apps, marketing materials."
  }],
  projects: [{
      title: "Mock Paint",
      dates: "July 2017 &ndash; August 2017",
      description: "Mock Paint is a graphic tool for Android developers. It allows you to create mockup graphic assets, such as icons and images, for your prototypes quickly and easily.",
      images: ['images/mobile-mockpaint-300.jpg', 'images/icon-mockpaint-200.jpg'],
      url: "https://github.com/ekaterina-nikonova"
    },
    {
      title: "Career Advisor",
      dates: "August 2017 &ndash; September 2017",
      description: "Career Advisor scans job descriptions across numerous websites and finds online courses that match your desirable career path.",
      images: ['images/mobile-advisor-300.jpg', 'images/icon-advisor-200.jpg'],
      url: "https://github.com/ekaterina-nikonova"
    },
    {
      title: "H&AElig;&AElig;?",
      dates: "January 2018 &ndash; June 2018",
      description: "This app helps language learners improve their pronunciation. Listen to the audio sample and repeat, and the app will tell you how much your utterance resembles the original.",
      images: ['images/mobile-hae-300.jpg', 'images/icon-hae-200.jpg'],
      url: "https://github.com/ekaterina-nikonova"
    }
  ],
};

var octopus = {
  fullName: function() {
    return model.fullName();
  },
  age: function() {
    return model.age();
  },
  bio: model.bio,
  education: model.education,
  jobs: model.jobs,
  projects: model.projects,
  init: function() {
    view.init();
  }
};


var view = {
  bio: function() {
    $('#header').prepend(HTMLbioPic.replace('%data%', octopus.bio.biopic), HTMLheaderName.replace('%data%', octopus.fullName()), HTMLheaderRole.replace('%data%', octopus.bio.role));
    $('#topContacts, #footerContacts').append(HTMLmobile.replace('%data%', octopus.bio.contacts.mobile), HTMLemail.replace('%data%', octopus.bio.contacts.email), HTMLgithub.replace('%data%', octopus.bio.contacts.github), HTMLlocation.replace('%data%', octopus.bio.contacts.location));

    $('#header').append(HTMLwelcomeMsg.replace('%data%', octopus.bio.welcomeMessage));

    if (octopus.bio.skills.length !== 0) {
      $('#header').append(HTMLskillsStart);
      for (var i = 0; i < octopus.bio.skills.length; i++) {
        $('#skills').append(HTMLskills.replace('%data%', octopus.bio.skills[i]));
      }
    }
  },
  education: function() {
    $('#education').append(HTMLschoolStart);
    octopus.education.schools.forEach(function(school, index) {
      /* Without 'url's the code shouldn't compile, because there'll be misleading "empty" links. */
      if (!school.hasOwnProperty('url')) throw 'School URL not found!';
      if (school.hasOwnProperty('name')) {
        var aSchool = HTMLschoolName.replace('#', school.url).replace('%data%', school.name);
        if (school.hasOwnProperty('degree')) {
          aSchool = aSchool.concat(HTMLschoolDegree.replace('%data%', school.degree));
        }
        $('.education-entry:last').append(aSchool);
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
    octopus.education.onlineCourses.forEach(function(course, index) {
      if (!course.hasOwnProperty('url')) throw 'Course URL not found!';
      if (course.hasOwnProperty('title')) {
        var aCourse = HTMLonlineTitle.replace('#', course.url).replace('%data%', course.title);
        if (course.hasOwnProperty('school')) {
          aCourse = aCourse.concat(HTMLonlineSchool.replace('%data%', course.school));
        }
        $('.education-entry:last').append(aCourse);
      }
      if (course.hasOwnProperty('dates')) {
        $('.education-entry:last').append(HTMLonlineDates.replace('%data%', course.dates));
      }
      if (course.hasOwnProperty('certificate')) {
        var cert = '<br><a href="' + course.certificate + '">View certificate &#9758;</a>';
        $('.education-entry:last').append(cert);
      }
      if (index !== octopus.education.onlineCourses.length - 1) {
        $('.education-entry:last').append('<hr>');
      }
    });
  },
  jobs: function() {
    octopus.jobs.forEach(function(job) {
      $('#workExperience').append(HTMLworkStart);
      if (!job.hasOwnProperty('url')) throw 'Job URL not found!';
      if (job.hasOwnProperty('employer') && job.hasOwnProperty('title')) {
        var jobTitle = HTMLworkEmployer.replace('#', job.url).replace('%data%', job.employer).concat(HTMLworkTitle.replace('%data%', job.title));
        $('.work-entry:last').append(jobTitle);
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
  },
  projects: function() {
    octopus.projects.forEach(function(project) {
      /* Here, too, I made 'url' an obligatory property for objects in 'projects'. */
      if (!project.hasOwnProperty('url')) throw 'Project URL not found!';
      $('#projects').append(HTMLprojectStart);
      if (project.hasOwnProperty('title')) {
        var projTitle = HTMLprojectTitle.replace('#', project.url).replace('%data%', project.title);
        $('.project-entry:last').append(projTitle);
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
  },
  inName: function() {
    var nameArr = octopus.bio.name.split(' ');
    var inName = '';
    inName = inName.concat(nameArr[0].charAt(0).toUpperCase());
    inName = inName.concat(nameArr[0].slice(1).toLowerCase());
    inName = inName.concat(' ' + nameArr[1].toUpperCase());
    return inName;
  },
  init: function() {
    view.bio();
    view.education();
    view.jobs();
    view.projects();
    /*
    * Logging clicks
    */
    // $(document).click(function(loc) {
    //   logClicks(loc.pageX, loc.pageY);
    // });

    /*
    * Internationalized name - activated by clicking the name
    */

    $('#name').click(this.inName);

    /*
    * Adding a map
    */
    $('#mapDiv').append(googleMap);

    /*
    * All links should open in a new tab
    */
    $('a').attr('target', '_blank');
  }
};

octopus.init();
