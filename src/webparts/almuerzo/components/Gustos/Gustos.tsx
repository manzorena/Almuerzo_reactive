import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
  
  class gustos extends React.Component<{gustos:Array<string>},{}>{
   
    public render() {

    var gustos = this.props.gustos;

      return (

            <div id="output" className="out0"/>
      );
      

      window.onload=function(){
          var output = document.getElementById('output');
          var i=0;
          var val="";
          while(i<=gustos.length)
          {
    
                  var ele = document.createElement("Checkbox");
                  ele.setAttribute("label","gustos[1]");
                  output.appendChild(ele);

              i++;
      
      
          }
      };
  }
}
export default gustos;
  