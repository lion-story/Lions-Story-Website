module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Three Column Layout',        
  contextualOnly: true,
  addFields: [
    {
      name: 'areaLeft',
      label: 'Left Area',
      type: 'area'
    },
    {
      name: 'areaMiddle',
      label: 'Middle Area',
      type: 'area'
    },
    {
      name: 'areaRight',
      label: 'Right Area',
      type: 'area'
    }
  ]        
};
