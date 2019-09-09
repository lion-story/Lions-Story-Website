module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Team Card',        
  addFields: [
    {
        name: 'memberImage',
        label: 'Team Member Image',
        type: 'singleton',
        widgetType: 'apostrophe-images'
    },
    {
        name: 'memberName',
        label: 'Name',
        type: 'string'
    },
    {
        name: 'memberTitle',
        label: 'Title',
        type: 'string'
    },
    {
        name: 'memberInfo',
        label: 'Bio',
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
    }
  ]        
};
