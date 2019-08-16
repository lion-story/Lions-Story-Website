module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Footer',        
  addFields: [
    {
      name: 'copyright_text',
      type: 'singleton',
      label: 'Copyright Text',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar:['Bold', 'Italic']
      },
      required: true
    },
    {
      name: 'newsletter_text_link',
      type: 'singleton',
      label: 'Newsletter Text',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar:['Link', 'Unlink']
      },
      required: true
    },
    {
      name: 'logo',
      type: 'singleton',
      label: 'Logo',
      widgetType: 'apostrophe-images',
      required: true
    },
    {
      name: 'cbk_logo',
      type: 'singleton',
      label: 'CBK Logo',
      widgetType: 'apostrophe-images',
      required: true
    },
    {
      name: 'social_media_fav_one',
      type: 'singleton',
      label: 'Social Media One',
      widgetType: 'favicon'
    },
    {
      name: 'social_media_fav_two',
      type: 'singleton',
      label: 'Social Media Two',
      widgetType: 'favicon'
    },
    {
      name: 'social_media_fav_three',
      type: 'singleton',
      label: 'Social Media Three',
      widgetType: 'favicon'
    },
    {
      name: 'social_media_fav_four',
      type: 'singleton',
      label: 'Social Media Four',
      widgetType: 'favicon'
    },
  ]        
};