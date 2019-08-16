module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Trainer Profile',        
  addFields: [
    {
      name: 'trainer_profile_name',
      type: 'string',
      label: 'Text',
      required: true
    },
    {
      name: 'trainer_profile_image',
      type: 'singleton',
      label: 'Image',
      widgetType: 'apostrophe-images',
      required: true
    },
    {
      name: 'trainer_profile_link',
      type: 'url',
      label: 'Linkedin Page Link',
    }
  ]        
};