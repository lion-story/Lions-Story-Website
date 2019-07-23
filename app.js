var path = require('path');

var apos = require('apostrophe')({
  shortName: 'Lion-Story-Website',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    
    //Used for the headers/heros of the page
    //Contains a navbar, bg image, logo image, and text for the page title
    'headers-widgets': {},

    //Used for the footer of every page
    //Contains Logo, newsletter link, social media links, copyright, CBK logo
    'footer-widgets': {},

    //Used for the headers of sections in a page
    //EX: Title - Hear from the village, Text - the text directly below the title but before the images
    'section-headers-widgets': {},

    //An image above a text area
    'image-over-text-widgets': {},

    //A button that links to another page
    'link-button-widgets': {},

    //Used for profiles in the team section of the home page as well as the team page
    'mini-profile-widgets': {},

    'favicon-widgets': {}

  }
});
