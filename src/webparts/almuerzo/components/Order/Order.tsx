import * as React from 'react';
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import {ActionButton, IButtonProps} from 'office-ui-fabric-react/lib/Button';
import styles from './Order.module.scss';
import '../Almuerzo';
import Selector from '../Selector/Selector';
import Selector_menu from '../Selector/Selector_menu';
import _Checkbox from '../Checkbox/Checkbox';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import Gustos from '../Gustos/Gustos';
import Checkbox_ from '../Checkbox/Checkbox';
import { HtmlAttributes } from '../../../../../node_modules/csstype';


var menujson = require('./lista_menus.json');

var Menus = menujson["menus"];
var Oficinas = menujson["oficinas"];







class Order extends React.Component<{},{}> {

    render() {
        
        var hola = <Checkbox_ label="asd"/>
        return(
            <div>
                <div id="Menu_principal" onFocus={a => this.showme(a)}>
                <Selector_menu label="Menú" menuarr={Menus}/>
                </div>

                <div id="hidden">

                    <div id={Menus[0]["Menu"]} className={styles.hidden}>
                        <Selector label="Tipo"       menuarr={Menus[0]["Tipo"]}/>
                        <Selector label="Guarnición" menuarr={Menus[0]["Guarnición"]}/>
                    </div>

                    <div id={Menus[1]["Menu"]} className={styles.hidden}>
                        <Selector label="Gusto especial" menuarr={Menus[1]["Gusto especial"]}/>
                        <Gustos  gustos={Menus[1]["Gustos"]}/>
                    </div>

                    <div id={Menus[2]["Menu"]} className={styles.hidden}>
                        <Selector label="Tipo"       menuarr={Menus[2]["Tipo"]}/>
                        <Selector label="Guarnición" menuarr={Menus[2]["Guarnición"]}/>
                    </div>

                    <div id={Menus[3]["Menu"]} className={styles.hidden}>
                        <Selector label="Tipo"       menuarr={Menus[3]["Tipo"]}/>
                    </div>

                    <div id={Menus[4]["Menu"]} className={styles.hidden}>
                        <Selector label="Tipo"       menuarr={Menus[4]["Tipo"]}/>
                    </div>

                    <div id={Menus[5]["Menu"]} className={styles.hidden}>
                        <Selector label="Tipo"       menuarr={Menus[5]["Tipo"]}/>
                        <Selector label="Guarnición" menuarr={Menus[5]["Guarnición"]}/>
                    </div>

                    <div id={Menus[6]["Menu"]} className={styles.hidden}>
                        <Selector  label="Tipo"       menuarr={Menus[6]["Tipo"]}/>
                        <Selector  label="Guarnición" menuarr={Menus[6]["Guarnición"]}/>
                        <Checkbox_ label="Gratinada"/>
                    </div>

                    <div id={Menus[7]["Menu"]} className={styles.hidden}>
                        <Selector label="Tipo"       menuarr={Menus[7]["Tipo"]}/>
                    </div>

                    <div id={Menus[8]["Menu"]} className={styles.hidden}>
                        <Selector label="Tipo"       menuarr={Menus[8]["Tipo"]}/>
                        <Selector label="Salsa"      menuarr={Menus[8]["Salsa"]}/>
                    </div>

                    <div id={Menus[9]["Menu"]} className={styles.hidden}>
                    </div>
                </div>

                <ActionButton>BOTON</ActionButton>
            </div>
        )

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