module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Text',        
  addFields: [
    {
      name: 'text',
      type: 'singleton',
      label: 'Text',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar:['Styles','Bold', 'Italic', 'Link', 'Unlink','Underline'],
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
      name:'textJustification',
      type:'select',
      label:'Text Justification',
      def: 'none',
      choices: [
        { label: 'Center', value:'text-center'},
        { label: 'Left', value:'text-left'},
        { label: 'Right', value:'text-right'}
      ]
    },
    {
      name:'textColor',
      type:'select',
      label:'Text Color',
      def: 'none',
      choices: [
        { label: 'Midnight Blue', value:'blue-text'},
        { label: 'Marigold Yellow', value:'yellow-text'},
        { label: 'White', value:'white-text'},
        { label: 'Grey', value:'grey-text'}
      ]
    }
  ]        
};