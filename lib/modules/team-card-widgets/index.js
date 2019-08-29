module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Team Card',        
  addFields: [
    {
      name: 'memberImage',
      label: 'Team Member Image',
      type: 'singleton',
      widgetType: 'apostrophe-images'
    },
    {
      name: 'memberName',
      label: 'Name',
      type: 'string'
    },
    {
      name: 'memberTitle',
      label: 'Title',
      type: 'string'
    }
  ]        
};