module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Header',        
  addFields: [
    {
      name: 'page',
      type: 'string',
      label: 'Page Name'
    },
    {
      name: 'bg-image',
      type: 'attachment',
      prefix: 'image',
      label: 'Background Image'
    }
  ]        
};