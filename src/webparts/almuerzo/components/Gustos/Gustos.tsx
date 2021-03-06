import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import styles from './Gustos.module.scss';

export type GustosCallback = (item: any) => void;


export interface ICheckboxParent { //estados de Rowgustos
  cantChecked: number[];
  list_gustos: string[];
}

export interface ICheckboxChildren { //estados de Gustos
  cantChecked: number;
  isCheckedArr: boolean[];
}


//componente que va a retornar una tabla de checkboxes
class Rowgustos extends React.Component<{ gustos: Array<string>,MAX: number, onChange:GustosCallback}, ICheckboxParent>{
  public state: ICheckboxParent = {
    cantChecked: [0,0,0],
    list_gustos: []
  };


  public render(): JSX.Element {

    const length = Math.ceil(this.props.gustos.length / 5);
    var rows = [];


    //crea un React Element dinamico usando las filas de Gustos y lo almacena en rows
    for (var i = 1; i <= length; i++) {
      var gustos_ = this.props.gustos.slice((i - 1) * 5, i * 5);
      rows.push(<Gustos 
                      key_={i-1} //propiedades
                      gustos={gustos_}
                      update={this.update_state.bind(this)} 
                      disabled={this._toDisable()} 
                      list_gustos={this.state.list_gustos}/>)
    }


    //retorna una tabla con el componente
    return (
      <div>
        <p>gustos restantes: {this.props.MAX - this.checks()}</p>
        <table className={styles.output} id="tabla">
            {rows}
        </table>
      </div>
    );
  }

  //actualiza el estado del componente 
  public update_state(num: number, index: number, list: string[]){

    let new_cantChecked: number[];
    new_cantChecked = this.state.cantChecked.slice();
    new_cantChecked[index] = num;
      this.props.onChange(list);
      this.setState({cantChecked: new_cantChecked, list_gustos: list});
  }

  public checks(){
    let total = 0;
    for (let i = 0; i < this.state.cantChecked.length; i++) {
      total += this.state.cantChecked[i];
    }
    return total;
  }

  //le indica al componente Gustos que los checkboxes deben ser desabilitados
  private _toDisable = (): boolean => {
    let total_checks=0;

    for (let i = 0; i < this.state.cantChecked.length; i++) {
      total_checks+=this.state.cantChecked[i];
    }

    if (total_checks >= this.props.MAX) { //si seleccionan mas de MAX checkboxes retorna true
      return true
    }
    else{ 
      return false;
    }

  }
}





//componente que va a retornar una fila de checkboxes
class Gustos extends React.Component<{ gustos: Array<string>, update:Function, key_:number, disabled:boolean, list_gustos: string[]}, ICheckboxChildren> {
  public state: ICheckboxChildren = {
    cantChecked: 0,
    isCheckedArr: [],
  };

  public render(): JSX.Element {
    
    const { cantChecked } = this.state;
    var gustos = this.props.gustos;


    //hace un map de checkboxes dentro de una fila y retorna la fila 
    return (
      <tr>
        {
          gustos.map((el, index) => 
        
            <td><Checkbox className="box" 
                          label={el} 
                          onChange={(a, b) => this._onCheckboxChange(a, b, index, el)} 
                          disabled={this._toDisable(index)} />
           </td>
         )}
      </tr>
    );
  }

  //funcion que maneja un cambio de estado en los checkbox
  private _onCheckboxChange = (ev: React.FormEvent<HTMLElement>, isChecked: boolean, id, gusto) => {
    let newCant = this.state.cantChecked;
    let newGustos = this.props.list_gustos.slice();

    let a = this.state.isCheckedArr.slice();//clona el estado anterior
    a[id] = isChecked;  //almacena el nuevo valor
    this.setState({ isCheckedArr: a }) //actualiza el estado



    if (isChecked) {//si el checkbox cambiado esta checkeado suma 1 a la variable, y agrega el nombre del gusto al array newGustos
      newCant++;
      newGustos.push(gusto);
    }
    else {  //caso contrario resta 1, y remueve el gusto del array newGustos
      newCant--;

      for(let i=0; i<newGustos.length; i++){ 
        if ( newGustos[i] == gusto) {
          newGustos.splice(i, 1); 
        }
     }
    }
    this.setState({ cantChecked: newCant}); //actualiza el estado

    this.props.update(newCant, this.props.key_, newGustos)//le indica al componente Rowgustos que algo cambió, y ejecuta update_state con el nuevo valor
  };

  //desabilita los checkboxes
  private _toDisable = (a: number): boolean => {

    if (this.props.disabled) { //si disabled es verdadero y el componente no está checkeado lo desabilita
      return this.state.isCheckedArr[a] ? false : true;
    }
    return false;


  }

}

export default Rowgustos;
