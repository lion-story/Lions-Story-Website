module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Footer',        
  addFields: [
  {
    name:'contact',
    label:'Contact',
    type:'object',
    titleField:'Contact',
    schema:[ 
        {
          name:'phoneNumber',
          type:'string',
          label:'Phone Number',
        },
        {
          name:'email',
          type:'string',
          label:'Email',
        },
        {
          name:'addressLineOne',
          type:'string',
          label:'Address Line One',
        },
        {
          name:'addressLineTwo',
          type:'string',
          label:'Address Line Two',
        },
      ]
  },
  {
    name:'moreInfo',
    label:'More Info Links',
    type: 'array',
    titleField:'More Info',
    schema:[
      {
        name:'moreInfoItem',
        type:'object',
        label:'More Info',
        schema: [
          {
            name:'moreInfoText',
            label:'Text Displayed',
            type:'string'
          },
          {
            name:'moreInfoLink',
            label:'Link',
            type:'url'
          }
        ]
      },
    ]
  },
  {
    name:'social',
    label:'Social Media Links',
    type: 'array',
    titleField:'Social Media',
    schema:[
      {
        name:'socialMedia',
        type:'object',
        label:'Social Media',
        schema:[
          {
            name:'socialMediaName',
            label:'Social Media Name',
            type:'string'
          },
          {
            name:'socialMediaLink',
            label:'Social Media Link',
            type:'url'
          },
          {
            name:'socialMediaFav',
            label:'Social Media Icon',
            type:'singleton',
            widgetType:'apostrophe-rich-text',
            options:{
              toolbar:['Styles'],
              styles: [
                {name: 'Facebook', element: 'span', attributes:{class:'fa fa-facebook'}},
                {name: 'Twitter', element: 'span', attributes:{'class':'fa fa-twitter'}},
                {name: 'Instagram', element: 'span', attributes:{'class':'fa fa-instagram'}},
                {name: 'LinkedIn', element: 'span', attributes:{'class':'fa fa-linkedin'}},
                {name: 'YouTube', element: 'span', attributes:{'class':'fa fa-youtube'}},
                {name: 'Reddit', element: 'span', attributes:{'class':'fa fa-reddit'}}
              ]
            }
          }
        ]
      }
    ]
  }
  ]        
};