
#Frontify


###Description
A single-page/prototype for the appearance of a standard website menu, and how the interaction with it might go.


###File Structure
All the source files live in the `/src/` directory, and running a gulp moves and processes them into the `/build/` directory.  So, all edits would be made to files in the `/src/` directory, with the exception of images and font files, which are added directly to their appropriate folders within `/build/`.


###Development and Viewing
For a front-end task manager, Gulp is used, which minifies the JavaScript, compiles the Sass (.scss) into CSS, and has a task to minify the HTML as well.  Gulp will also start a local server with live-reload enabled.

To get started:
1. Download repository
2. Run `npm i` - All dependencies (basically just gulp-modules and jQuery) are handled with npm
3. Run 'gulp' - This starts a local server on port 8000, and a runs *watch* task for all HTML, SCSS, and JS files in the `/src/` directory.
That's all.

The only other tool used was jQuery.


###Browser Support
I didn't check what browsers this needed to support, but at the least viewing it in the latest Chrome should work, though it should work across all modern browsers.


###Interaction Summary
Most of the work went into the timing of the animations, which was fun. The page should be fully responsive, and have a bit of a different interaction on mobile and desktop.

**On mobile**: Clicking the hamburger shows both the user-authorization buttons, as well as the main nav elements. Here all the links are shown immediately, and the nav becomes scrollable, while preventing any scroll of the page behind the menu.

**On desktop:** Here the user-authorization buttons are already displayed, since there is room. When opening the menu, the five 'sub-menus' are displayed, and, like on mobile, the page behind the menu is locked in place. Clicking on any one of the nav items opens the sub-menu below each. Only one sub-menu is allowed to be open at a time, so clicking on a different item causes any open box to close, then the clicked one to open. When closing the top menu, any open sub-menu will be closed as well.


###Design/Exercise Feedback
I was guessing on what the expected user-flow would be, but based on the desktop mock-up having the "X" in the corner of the header and the faded background, I guessed that it was more of a modal-type menu. I know that that might be wrong, but assuming that correct, here are my thoughts:

* **Mobile**: I actually like how this turned out, with every navigation element becoming visible in one click. I'd be interested to hear what a designer would say.

* **Desktop - Top Menu**: If I did the exercise correctly, I think that having a click to show the menu elements might be unnecessary, especially since the nav elements stay connected to the header-bar. I might have suggested the idea of having them always be present, but like small tabs, then clicking on one would expand the sub-menu. This would eliminate a click when trying to go somewhere else.

* **Desktop - Sub-menus**: My only suggestion here would have been that there be some indication that there is even a sub-menu below each top-level nav element, like a small arrow, or something prompting a click. I think a user would have been surprised that there were more links below.


That's all. There is a repository on [GitHub](http://www.github.com/jdalton308/frontify), where all files can also be found, if you aren't already reading this there.
