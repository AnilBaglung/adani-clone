import React from 'react';
import Plot from 'react-plotly.js';

const Barchart = ()=> {
  return(
    
      <Plot
        data={[
          {
            x: ['FY19', 'FY20', 'FY21','FY22'],
            y: [42000, 44000,42000,71000,100000],
            type: 'scatter',
            showlegend:false,
            legend:{bgcolor:'green'},
            text:['40,379','43,403','39,537','69,420'],
            textposition:'top',
            mode:'text',
            color:['red','green','red', 'green'],
            marker:{color:'white'}
    
          },

          {type: 'bar', x: ['FY19', 'FY20', 'FY21','FY22'], y: [40379, 43403, 39537,69420]},
        ]}
        layout={ {width: 260, height: 350, title: {text:'Revenue from operations', font:{size:15},pad:{t:0}, yanchor:'middle'} ,showlegend:false, paper_bgcolor:'white', margin:{
            b:30, l:30,r:30,t:50
        } } }

      />
    );
  }
  export default Barchart


