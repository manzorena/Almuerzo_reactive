import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import styles from './Gustos.module.scss';
  
  class gustos extends React.Component<{gustos:Array<string>},{}>{
   
    public render() {

    var gustos = this.props.gustos;

    var CHECK=0;
    const MAX = 3; //maxima cantidad de casillas checkeadas en el momento

      return (
        //BUSCAR MANERA DE HACERLO DINAMICO (osea que se agreguen checkboxes respecto a la cantidad de elementos del json)
            <table className={styles.output} id="tabla">
            <tr>
                <td><Checkbox id='0' label={gustos[0]} onChange={this.max_check}/></td>
                <td id="td"><Checkbox id="1" label={gustos[1]} onChange={this.max_check}/></td>
                <td><Checkbox id='2' label={gustos[2]} onChange={this.max_check}/></td>
                <td><Checkbox id='3' label={gustos[3]} onChange={this.max_check}/></td>
                <td><Checkbox id='4' label={gustos[4]} onChange={this.max_check}/></td>
            </tr>
            <tr>
                <td><Checkbox id='5' label={gustos[5]} onChange={this.max_check}/></td>
                <td><Checkbox id='6' label={gustos[6]} onChange={this.max_check}/></td>
                <td><Checkbox id='7' label={gustos[7]} onChange={this.max_check}/></td>
                <td><Checkbox id='8' label={gustos[8]} onChange={this.max_check}/></td>
                <td><Checkbox id='9' label={gustos[9]} onChange={this.max_check}/></td>
            </tr>
            <tr>
                <td><Checkbox id='10' label={gustos[10]} onChange={this.max_check}/></td>
                <td><Checkbox id='11' label={gustos[11]} onChange={this.max_check}/></td>
                <td><Checkbox id='12' label={gustos[12]} onChange={this.max_check}/></td>
                <td><Checkbox id='13' label={gustos[13]} onChange={this.max_check}/></td>
                <td><Checkbox id='14' label={gustos[14]} onChange={this.max_check}/></td>
            </tr>
            </table>

      );
  }
  public max_check(){
    // console.log("entra");
    // var che1 = document.getElementById("tabla");

    

    // for (let i = 0; i < gustos.length; i++) {
    //     console.log("vuelta "+i)

    //     var checke = document.getElementById(''+i)
    //     var check1 = document.getElementById('1')

    //     console.log(checke);
    //     console.log(check1);

    // }
    
    
  }
}

export default gustos;
  