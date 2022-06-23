import React from 'react';
import Plot from 'react-plotly.js';

const Barchart2 = ()=> {
  return(
    
      <Plot
        data={[
          {
            x: ['FY19', 'FY20', 'FY21','FY22'],
            y: [820, 970,1210,810,2000],
            type: 'scatter',
            showlegend:false,
            legend:{bgcolor:'green'},
            text:['784','939','1,182','777'],
            textposition:'top',
            mode:'text',
            color:['red','green','red', 'green'],
            marker:{color:'white'}
    
          },

          {type: 'bar', x: ['FY19', 'FY20', 'FY21','FY22'], y: [784, 939, 1182,777]},
        ]}
        layout={ {width: 260, height: 350, title: {text:'Net Profit to Owners*', font:{size:15},pad:{t:0}, yanchor:'middle'} ,showlegend:false, paper_bgcolor:'white', margin:{
            b:30, l:30,r:30,t:50
        } } }

      />
    );
  }
  export default Barchart2