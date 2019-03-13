import * as React from 'react';
import {ActionButton, IButtonProps} from 'office-ui-fabric-react/lib/Button';
import styles from './Order.module.scss';
import '../Almuerzo';
import Selector from '../Selector/Selector';
import Selector_menu from '../Selector/Selector_menu';
import Rowgustos from '../Gustos/Gustos';
import Checkbox_ from '../Checkbox/Checkbox';

//importa el archivo json con todos los datos de las comidas
var menujson = require('./lista_menus.json');

var Menus = menujson["menus"];
var Oficinas = menujson["oficinas"];







class Order extends React.Component<{},{}> {

    render() {
    

        return(
            <div>
                <div id="Menu_principal" onFocus={a => this.showme(a)}>
                <Selector_menu label="Menú" menuarr={Menus}/>
                </div>

                <div id="hidden">
                    {console.log("antes de menu")}
                    {Menus.map((el,index)=>

                    <div id={el["Menu"]} className={styles.hidden}> 
                        {this.create_options(el)}
                    </div>)}
                </div>

                <div id="oficinas">
                <Selector label="Enviar pedido a" menuarr={Oficinas}/>
                </div>

                <ActionButton>BOTON</ActionButton>
            </div>
        )
    }


    public create_options(obj){
        {console.log("en create options")}
        let output= [];

        obj["Props"].map((el,i)=>
        {switch (el) {

            case "Gustos":
                output[i] = <Rowgustos  gustos={obj[el]}/>
                break;
                
            case "Gratinada":
                output[i] = <Checkbox_ label={el}/>
                break;

            default:
                output[i] = <Selector label={el} menuarr={obj[el]}/>
                break;           
        }}
    )
        console.log(output);
        
        return output;
    }



    private _log(str: string): () => void {
        return (): void => {
          console.log(str);
        };
      }


      
    
    public showme(a){
        var menu_princ = (document.getElementById("Menu_principal"));
        var menu_name = (menu_princ.getElementsByTagName("span")[0].innerText);//obtiene el nombre del menu seleccionado
        


        for (let i = 0; i < Menus.length; i++) {

            var element = (document.getElementById(Menus[i].text))
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