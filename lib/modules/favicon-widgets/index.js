module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Favicon',        
  addFields: [
    {
      name:'favicon',
      label:'Favicon',
      type:'select',
      def: 'none',
      choices:[
        { label: 'None', value: 'none' },
        { label: 'Facebook', value: 'fa fa-facebook' },
        { label: 'Twitter', value: 'fa fa-twitter' },
        { label: 'Instagram', value: 'fa fa-instagram' },
        { label: 'LinkedIn', value: 'fa fa-linkedin' },
        { label: 'YouTube', value: 'fa fa-youtube' },
        { label: 'Reddit', value: 'fa fa-reddit' },
        { label: 'Play Circle', value: 'fa fa-play-circle' },
        { label: 'Arrow', value: 'fas fa-arrow-right' },
      ]
    },
    {
      name:'color',
      type:'select',
      label:'Color',
      def: null,
      choices: [
        { label: 'Midnight Blue', value:'blue-text'},
        { label: 'Marigold Yellow', value:'yellow-text'},
        { label: 'White', value:'white-text'},
        { label: 'Grey', value:'grey-text'}
      ]
    }
  ]        
};