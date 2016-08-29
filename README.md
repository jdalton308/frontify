
#Frontify


###Description
A single-page/prototype for the appearance of a standard website menu, and how the interaction with it might go.


###File Structure
All the source files live in the `/src/` directory, and running a gulp task mainly minifies and concatenates the files into the `/build/` directory.  So all edits would be made to files in the `/src/` directory, with the exception of images and font files, which are added directly to their appropriate folders within `/build/`.


###Development
For a front-end task manager, Gulp is used, which minifies the JavaScript, compiles the Sass (.scss) into CSS, and has a task to minify the HTML as well.  Gulp will also start a local server with live-reload enabled.

To get started:
1. Run `npm i` - All dependencies (basically just gulp-modules and jQuery) are handled with npm
2. Run 'gulp' - This starts a local server, and a runs *watch* task for all HTML, SCSS, and JS files in the `/src/` directory.
That's all


###Feedback and notes
