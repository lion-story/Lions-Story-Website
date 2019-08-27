module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Linked Card',        
  addFields: [
    {
      name: 'cardImage',
      type: 'singleton',
      label: 'Card Image',
      widgetType: 'apostrophe-images'
    },
    {
      name:'card_title',
      type: 'singleton',
      label: 'Card Title',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar:['Bold', 'Italic', 'Link', 'Unlink']
      },
    },
    {
      name:'card_text',
      type: 'singleton',
      label: 'Card Text',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar:['Bold', 'Italic', 'Link', 'Unlink']
      },
    },
    {
      name:'card_text',
      type: 'singleton',
      label: 'Card Text',
      widgetType: 'apostrophe-rich-text',
      options: {
        toolbar:['Bold', 'Italic', 'Link', 'Unlink']
      },
    },
    {
      name: 'button_text',
      type: 'string',
      label:' Button Text',
      options: {
        toolbar:['Bold', 'Italic', 'Link', 'Unlink']
      },
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