module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Image Left Text',        
  addFields: [
    {
      name: 'ilt_text',
      type: 'singleton',
      label: 'Text',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar:['Bold', 'Italic', 'Link', 'Unlink']
      },
      required: true
    },
    {
      name: 'ilt_image',
      type: 'singleton',
      label: 'Image',
      widgetType: 'apostrophe-images',
      required: true
    }
  ]        
};