jsportfolio
===========

##How to add a project:

Decide which category the project belongs to - build, hack or work.

###Adding a project to 'Build':
  
   1.  Create a 800 X 250px banner in png format for the project and save it to /public/images/build/. Name the file: __project-name__.png"
   2.  Create a 300 X 300px tile in png format for the project and save if to /public/images/tiles/. Name the file: "__project-name__.png"
   3.  Inside /public/html/build.html, create a new section for the project (reference previous projects for structure)
   4.  Inside /public/js/index.js:
       *  add a 'case' statement to the BUILD section of the switch statement
       *  create a method init__project-name__() [such as "initDogCase()"] with the initShowMore("__projectname__") command in it
       *  add the project-name to the array of projects inside the initShowMore function.
       *  add the name/title/path/desc to the hashtable (projectInfo) inside the initShowMore function.
   5.  Inside /public/html/, create a file: __project-name__.html. This is the file to create the content for the project.
       *  wrap all the html into a div with class="__project-name__"
       *  at the end of the file, add a "showmore-separator" hr and a "showmore" div. Reference the other project html files if needed
   6.  Create a folder inside /public/images/__project-name__/. This is where to put the media for the project.
   7.  Inside /public/css/index.css, add the necessary css for the new content.
   8.  Inside app.js (on the server), add the routing for the project

###Adding a project to 'Hack' or 'Work':

Decide if the project needs its own page or if can be a drop-down tab

####Adding a project with its own page:
  1.  Create a square thumbnail in png format and save it to /public/images/[hack/work]/. Name the file: "__project-name___thumbnail.png"
  2.  Inside /public/html, create a file: __project-name__.html. This is the file to create the content for the project.
      *  wraper all the html into a div with class="__project-name__"
      *  at the beginning and end of the file, add a div with class="hack-back-btn" with a link to either Hack or Work depending on which category the project is it
      *  in the top div you just added, add the class="hack-back-btn-top"
      *  in the bottom div you just added, add the class="hack-back-btn-bottom"
  3.  Create a folder inside /public/images/__project-name__/. This is where to put the media for the project.
  4.  Inside /public/css/index.css, add the necessary css for the new content.
  5.  Inside /public/html/[hack/work].html, add a section for the project [look at 'zobeide' for a reference on how to format a new tab with a project that needs its own page]
      *  do not forever to give the img inside the '.option' div a 'learnmore-btn' instead of a 'dropdown-btn'
  6.  Inside /public/js/index.js:
      *  add a 'case' statement to the HACK/WORK section of the switch statement
  7.  Inside app.js (on the server), add the routing for the project.

####Adding a project with a dropdown-tab:
  1.  Create a square thumbnail in png format and save it to /public/images/[hack/work]/. Name the file: "__project-name___thumbnail.png"
  2.  Save the images of this project in png format inside /public/images/[hack/work]/. Name the files using the convention: "__project-name___desc__#__.png"
  3.  Inside /public/html/[hack/work].html, add a section for the project [look at 'towergame' for a reference on how to format a new tab with a project that needs its own page]
      *  do not forever to give the img inside the '.option' div a 'dropdown-btn' instead of a 'learnmore-btn'
  4.  Inside /public/js/index.js:
      *  add a 'case' statement to the HACK/WORK section of the switch statement
  5.  Inside app.js (on the server), add the routing for the project.
