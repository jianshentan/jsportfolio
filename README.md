jsportfolio
===========

How to add a project:

1. Decide which category the project belongs to - build, hack or work.

  Adding a project to 'Build':
  
  1. Create a 800 X 250px banner in png format for the project and save it to /public/images/build/. Name the file: "project-name.png"
  2. Create a 300 X 300px tile in png format for the project and save if to /public/images/tiles/
  3. Inside /public/html/build.html, create a new section for the project (reference previous projects for structure)
  4. Inside /public/js/index.js:
       A. add a 'case' statement to the BUILD section of the switch statement
       B. create a method init[+project-name]() with the initShowMore("[projectname]") command in it
       C. add the project-name to the array of projects inside the initShowMore function.
       D. add the project-name/title/path/desc to the hashtable (projectInfo) inside the initShowMore function.
  5. Inside /public/html/, create a file: [project-name].html. This is the file to create the content for the project.
  6. Create a folder inside /public/images/[project-name]/. This is where to put the media for the project.
  7. Inside /public/css/index.css, add the necessary css for the new content.
