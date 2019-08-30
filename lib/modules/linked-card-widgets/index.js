module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Linked Card',        
  addFields: [
    {
      name: 'cardImage',
      type: 'singleton',
      label: 'Card Image',
      widgetType: 'apostrophe-images'
    },
    {
      name: 'card_title',
      type: 'singleton',
      label: 'Card Title',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar:['Styles','Bold', 'Italic', 'Link', 'Unlink'],
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
      },
      required: true
    },
    {
      name: 'card_text',
      type: 'singleton',
      label: 'Card Title',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar:['Styles','Bold', 'Italic', 'Link', 'Unlink'],
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
      },
      required: true
    },
    {
      name: 'button_text',
      type: 'string',
      label:' Button Text',
      required: true
    },
    {
      name: 'button_link',
      type: 'url',
      label: 'Button Link',
      required: true
    }
  ]        
};