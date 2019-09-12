module.exports = {        
  extend: 'apostrophe-pieces',        
  name: 'team-member',
  label: 'Team Member',        
  pluralLabel: 'Team Members',
  addFields: [
    {
      name: 'title',
      label: 'Full Name',
      type: 'string',
      required: true
    },
    {
      name: 'position',
      label: 'Position',
      type: 'string',
      required: true
    },
    {
      name: 'headshot',
      label: 'Headshot',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      required: true
    },
    {
        name: 'bio',
        label: 'Biography',
        type: 'singleton',
        widgetType: 'apostrophe-rich-text',
        options: {
            toolbar:['Styles','Bold', 'Italic', 'Link', 'Unlink', 'BulletedList','Underline'],
            styles: [
              {name: 'Paragraph', element: 'p', attributes: {'class':'paragraph'} },
              {name: 'Small Text', element: 'p',attributes: {'class':'small-text'} },
              {name: 'Extra Small Text', element: 'p',attributes: {'class':'extra-small-text'} },
              {name: 'H1', element: 'h1'},
              {name: 'H2', element: 'h2'},
              {name: 'H3', element: 'h3'},
              {name: 'H4', element: 'h4'},
              {name: 'H5', element: 'h5'}
            ]
        }
    },
  ] ,
  arrangeFields: [
    {
      name: 'info',
      label: 'Info',
      fields: [ 'title', 'position', 'headshot']
    },
    {
      name: 'biography',
      label: 'Biography',
      fields: [ 'bio' ]
    }
  ]
};
