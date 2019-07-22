module.exports = {        
  extend: 'apostrophe-widgets',
  label: 'Header',
  addFields: [
    {
      name: 'page_name',
      type: 'string',
      label: 'Page Name',
      required: true
    },
    {
      name: 'header_image',
      type: 'singleton',
      label: 'Header Image',
      widgetType: 'apostrophe-images',
      required: true
    }
  ] 
};