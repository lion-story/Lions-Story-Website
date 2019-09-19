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

    'apostrophe-attachmenets': {
        uploadfs: {
          https: true,
        cdn: {
          enabled: true,
          url:'_8dd68029b0f9d75e51c98fadc22faa7d.olprtlswtu.acm-validations.aws.'
          }
        }
      }
    }
    
    'apostrophe-assets': {
      stylesheets: [
        {
          name: 'bootstrap.min',
          minify:false
        },
        {
          name: 'site'
        },
        {
          scripts: [
            {
              name:'bootstrap.min',
              minify: false
            }
          ]
        }
      ]
    },


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

    //Used to select and place favicons with links
    'favicon-widgets': {},

    //An image with a textbox to the right of it
    'image-left-text-widgets': {},

    //Profiles for trainers, contain an image for a headshot, a textbox for name, and a button for a linkedin link
    'trainer-profile-widgets': {},

    //For the creation of bullet lists
    'bullet-list-widgets': {},

    //The navigation bar of each page
    'navbar-widgets': {},

    //Mainly for the services cards on the home page
    'linked-card-widgets': {},

    //Used for team member cards on the about page
    'team-card-widgets': {},

    //Used to add team members that have a bio page and a card on about
    'team-member': {},

    //Used to display team-member piece
    'team-member-widgets': {
      extend: 'apostrophe-pieces-widgets'
    },

    //Pages for team members
    'team-member-pages': {
      extend: 'apostrophe-pieces-pages'
    },

    //Default text widget
    'text-widgets': {},

    //similar to linked card but lacks an image
    'text-linked-card-widgets': {},

    //Three column area
    'three-column-widgets': {}
  }
});
