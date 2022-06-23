import React from 'react';
import Plot from 'react-plotly.js';

const Barchart1 = ()=> {
  return(
    
      <Plot
        data={[
          {
            x: ['FY19', 'FY20', 'FY21','FY22'],
            y: [2600, 3030,3320,4780],
            type: 'scatter',
            showlegend:false,
            legend:{bgcolor:'green'},
            text:['2,541','2,968','3,259','4,726'],
            textposition:'top',
            mode:'text',
            color:['red','green','red', 'green'],
            marker:{color:'white'}
    
          },
          {type: 'bar', x: ['FY19', 'FY20', 'FY21','FY22'], y: [2541, 2968, 3259,4726]},
        ]}
        layout={ {width: 260, height: 350, title: {text:'EBIDTA', font:{size:15},pad:{t:0}, yanchor:'middle'} ,showlegend:false, paper_bgcolor:'white', margin:{
            b:30, l:30,r:30,t:50
        } } }

      />
    );
  }
  export default Barchart1