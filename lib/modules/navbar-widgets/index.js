module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Navbar',        
  addFields: [
    {
      name: 'logo_image',
      type: 'singleton',
      label: 'Navbar Image',
      widgetType: 'apostrophe-images',
      required: true
    }
  ]        
};