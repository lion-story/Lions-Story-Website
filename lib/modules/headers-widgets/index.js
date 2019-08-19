module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Header',
  addFields: [
    {
      name: 'header_image',
      type: 'singleton',
      label: 'Header Image',
      widgetType: 'apostrophe-images',
      required: true
    }
  ]
};