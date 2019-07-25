module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Bullet List',        
  addFields: [
    {
      name: 'bullets',
      type: 'array',
      label: 'Bullets',
      titleField: 'bullet_items',
      schema: [
        { 
          type: 'string',
          name: 'bullet',
          label: 'Bullet'
        }
      ]
    }
  ]        
};