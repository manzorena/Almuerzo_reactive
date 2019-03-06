import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import styles from './Gustos.module.scss';
  
  class gustos extends React.Component<{gustos:Array<string>},{}>{
   
    public render() {

    var gustos = this.props.gustos;

      return (
        //BUSCAR MANERA DE HACERLO DINAMICO (osea que se agreguen checkboxes respecto a la cantidad de elementos del json)
            <table className={styles.output}>
            <tr>
                <td><Checkbox label={gustos[0]}/></td>
                <td><Checkbox label={gustos[1]}/></td>
                <td><Checkbox label={gustos[2]}/></td>
                <td><Checkbox label={gustos[3]}/></td>
                <td><Checkbox label={gustos[4]}/></td>
            </tr>
            <tr>
                <td><Checkbox label={gustos[5]}/></td>
                <td><Checkbox label={gustos[6]}/></td>
                <td><Checkbox label={gustos[7]}/></td>
                <td><Checkbox label={gustos[8]}/></td>
                <td><Checkbox label={gustos[9]}/></td>
            </tr>
            <tr>
                <td><Checkbox label={gustos[10]}/></td>
                <td><Checkbox label={gustos[11]}/></td>
                <td><Checkbox label={gustos[12]}/></td>
                <td><Checkbox label={gustos[13]}/></td>
                <td><Checkbox label={gustos[14]}/></td>
            </tr>
            </table>

      );
  }
}

export default gustos;
  