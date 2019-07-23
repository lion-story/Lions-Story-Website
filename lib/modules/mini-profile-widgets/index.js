module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Mini Profile',        
  addFields: [
    {
      name: 'mini_name',
      type: 'singleton',
      label: 'Name',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar:['Bold', 'Italic', 'Link', 'Unlink']
      },
      required: true
    },
    {
      name: 'mini_title',
      type: 'singleton',
      label: 'Title',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar:['Bold', 'Italic', 'Link', 'Unlink']
      },
      required: true
    },
    {
      name: 'mini_image',
      type: 'singleton',
      label: 'Team Member Image',
      widgetType: 'apostrophe-images',
      required: true
    }
  ]        
};