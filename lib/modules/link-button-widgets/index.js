module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Link Button',        
  addFields: [
    {
      name: 'button_text',
      type: 'string',
      label:' Button Text',
      required: true
    },
    {
      name: 'button_link',
      type: 'url',
      label: 'Button Link',
      required: true
    }
  ]        
};