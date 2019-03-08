import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import styles from './Gustos.module.scss';

    var CHECK=0;
    const MAX = 3; //maxima cantidad de casillas checkeadas en el momento
    var dis: boolean;

    export interface ICheckboxBasicExampleState {
        cantChecked: number;
      }
  
  class gustos extends React.Component<{gustos:Array<string>},ICheckboxBasicExampleState> {
    public state: ICheckboxBasicExampleState = {
      cantChecked: 0
    };
  
    public render(): JSX.Element {
      const { cantChecked } = this.state;      

    var gustos = this.props.gustos;



      return (
        //BUSCAR MANERA DE HACERLO DINAMICO (osea que se agreguen checkboxes respecto a la cantidad de elementos del json)
            <table className={styles.output} id="tabla">
            <tr>
                <td><Checkbox id='0' label={gustos[0]} onChange={this._onCheckboxChange} disabled={this._toDisable()}/></td>
                <td><Checkbox id="1" label={gustos[1]} onChange={this._onCheckboxChange} disabled={cantChecked > 2}/></td>
                <td><Checkbox id='2' label={gustos[2]} onChange={this._onCheckboxChange} disabled={cantChecked > 2}/></td>
                <td><Checkbox id='3' label={gustos[3]} onChange={this._onCheckboxChange} disabled={cantChecked > 2}/></td>
                <td><Checkbox id='4' label={gustos[4]} onChange={this._onCheckboxChange} disabled={cantChecked > 2}/></td>
            </tr>
            <tr>
                <td><Checkbox id='5' label={gustos[5]} onChange={this._onCheckboxChange} disabled={cantChecked > 2}/></td>
                <td><Checkbox id='6' label={gustos[6]} onChange={this._onCheckboxChange} disabled={cantChecked > 2}/></td>
                <td><Checkbox id='7' label={gustos[7]} onChange={this._onCheckboxChange} disabled={cantChecked > 2}/></td>
                <td><Checkbox id='8' label={gustos[8]} onChange={this._onCheckboxChange} disabled={cantChecked > 2}/></td>
                <td><Checkbox id='9' label={gustos[9]} onChange={this._onCheckboxChange} disabled={cantChecked > 2}/></td>
            </tr>
            <tr>
                <td><Checkbox id='10' label={gustos[10]} onChange={this._onCheckboxChange} disabled={cantChecked > 2}/></td>
                <td><Checkbox id='11' label={gustos[11]} onChange={this._onCheckboxChange} disabled={cantChecked > 2}/></td>
                <td><Checkbox id='12' label={gustos[12]} onChange={this._onCheckboxChange} disabled={cantChecked > 2}/></td>
                <td><Checkbox id='13' label={gustos[13]} onChange={this._onCheckboxChange} disabled={cantChecked > 2}/></td>
                <td><Checkbox id='14' label={gustos[14]} onChange={this._onCheckboxChange} disabled={cantChecked > 2}/></td>
            </tr>
            </table>

      );
  }
  
  private _onCheckboxChange = (ev: React.FormEvent<HTMLElement>, isChecked: boolean) => {
    let newCant = this.state.cantChecked;

    if(isChecked){
        newCant++;
        this.setState({ cantChecked: newCant });
        console.log(this.state.cantChecked)
        console.log(ev.currentTarget);
        console.log(ev);

        
      }
    else{
        newCant--;
        this.setState({ cantChecked: newCant });
        console.log(this.state.cantChecked)
    }
  };

  private _toDisable = (): boolean => {
    
    return false;

  }
   
}

export default gustos;
  