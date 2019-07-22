module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Link to anywhere',        
  addFields: [
    { 
      name: 'url',
      type: 'url',
      label: 'Motherfucking link',
      required: true
    },
    {
      name: 'label',
      type: 'string',
      label: 'Motherfucking Label',
      required: true
    }
  ]        
};