module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Image Over Text',        
  addFields: [
    {
      name: 'iot_text',
      type: 'singleton',
      label: 'Text',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar:['Bold', 'Italic', 'Link', 'Unlink']
      },
      required: true
    },
    {
      name: 'iot_image',
      type: 'singleton',
      label: 'Image',
      widgetType: 'apostrophe-images',
      required: true
    }
  ]        
};