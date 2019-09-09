module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Section Headers',        
  addFields: [
    {
      name: 'section_title',
      type: 'singleton',
      label: 'Section Title',
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
      name:'titleJustification',
      type:'select',
      label:'Title Justification',
      def: 'none',
      choices: [
        { label: 'Center', value:'text-center'},
        { label: 'Left', value:'text-left'},
        { label: 'Right', value:'text-right'}
      ]
    },
    {
      name:'titleColor',
      type:'select',
      label:'Title Color',
      def: 'none',
      choices: [
        { label: 'Midnight Blue', value:'blue-text'},
        { label: 'Marigold Yellow', value:'yellow-text'},
        { label: 'Grey', value:'grey-text'}
      ]
    },
    {
      name: 'section_header_text',
      type: 'singleton',
      label: 'Section Header Text',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar:['Styles','Bold', 'Italic', 'Link', 'Unlink', 'BulletedList'],
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
        { label: 'Grey', value:'grey-text'}
      ]
    }
  ]        
}
