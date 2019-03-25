import * as React from 'react';
import {ActionButton, IButtonProps} from 'office-ui-fabric-react/lib/Button';
import styles from './Order.module.scss';
import '../Almuerzo';
import Selector from '../Selector/Selector';
import Selector_menu from '../Selector/Selector_menu';
import Rowgustos from '../Gustos/Gustos';
import Checkbox_ from '../Checkbox/Checkbox';
import data from './lista_menus';
import * as webpack from 'webpack'
import { max } from '../../../../../node_modules/moment';

//importa el archivo json con todos los datos de las comidas

export interface OrderState { //estados de Rowgustos
    pedido: object
  }

class Order extends React.Component<{},OrderState> {
    public state: OrderState = {
        pedido: {}
      };

    render() {

        let Menus = this.inmutable(data["menus"])
        let Oficinas = this.inmutable(data["oficinas"])

        return(
            <div className={styles.container}>
                <div id="Menu_principal" onFocus={a => this.showme(a)}>
                <Selector_menu label="Menú" menuarr={Menus} onChange={(e) => this.handleChange(e, "Menú")}/>
                </div>

                <div id="hidden">
                    {Menus.map((el,index)=>

                    <div id={el["Menu"]} className={styles.hidden}> 
                        {this.create_options(el, index)}
                    </div>)}
                </div>

                <div id="oficinas">
                <Selector label="Enviar pedido a" menuarr={Oficinas} onChange={(e) => this.handleChange(e,"oficina")}/>
                </div>

                {/* <ActionButton>BOTON</ActionButton> */}
            </div>
        )
    }

    public create_options(obj, index){
        
        let output= [];

        obj["Props"].map((el,i)=>
        {switch (el) {

            case "Gustos":
                output[i] = <Rowgustos  gustos={obj[el]} MAX={obj.MAX} onChange={(e)=>this.handleChange(e, el)}/>
                break;
                
            case "Gratinada":
                output[i] = <Checkbox_ label={el} onChange={(e)=>this.handleChange(e, el)}/>
                break;

            default:
                output[i] = <Selector label={el} menuarr={obj[el]} onChange={(e)=>this.handleChange(e, el)}/>
                break;           
        }}
    )
        
        return output;
    }

    
    public handleChange(value, prop){
    let Menus = this.inmutable(data["menus"])

        let obj = this.state.pedido
        obj[prop] = value
        this.setState({pedido: obj})




        console.log(obj);
        

    }


    public inmutable(a:object){
       return JSON.parse(JSON.stringify(a));
    }

    private _log(str: string): () => void {
        return (): void => {
        };
      }


      
    
    public showme(a){
        let menu_princ = (document.getElementById("Menu_principal"));
        let menu_name = (menu_princ.getElementsByTagName("span")[0].innerText);//obtiene el nombre del menu seleccionado

        for (let i = 0; i < data.menus.length; i++) {

            let element = (document.getElementById(data.menus[i]["Menu"]))
            if (element.id == menu_name) {
                element.style.display = "block"
                
            }
            else{
                element.style.display = "none"
            }//itera las id de los elementos y si coinciden los muestra en pantalla, caso contrario los oculta

        }
    }
}


export default Order;