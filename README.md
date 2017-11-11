### What is this repo? ###

This repo contains a boilerplate setup for a WordPress plugin with a Vue.js front-end

### How do I get set up? ###

#### Using your terminal: ####

* cd into the directory inside the plugin which contains the Vue app, ( 'vue-plugin/' ), and run the command 'npm install'. This will install your node dependancies used when compiling the plugin code.

* cd into the 'styles/' directory, and run 'npm install'. This will install the dependancies using for com[iling SCSS into browser-ready CSS.

* Once you've completed the above, cd back to the 'vue-plugin/' directory. Now you will have access to these commands for compiling the app JS:
	* npm run-script build-dev - this command builds the app JS without minification, which makes debugging easier.
	* npm run-script build - this command builds the app JS for production
	* npm run-script watchify - this command watches the app's files and recompiles on change.

