module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Section Headers',        
  addFields: [
    {
      name: 'section_title',
      type: 'string',
      label: 'Section Title',
      required: true
    },
    {
      name: 'section_header_text',
      type: 'string',
      label: 'Section Header Text'
    }
  ]        
};