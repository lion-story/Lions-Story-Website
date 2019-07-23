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
        toolbar:['Bold', 'Italic', 'Link', 'Unlink']
      },
      required: true
    },
    {
      name: 'section_header_text',
      type: 'singleton',
      label: 'Section Header Text',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar:['Bold', 'Italic', 'Link', 'Unlink']
      },
      required: true
    }
  ]        
};