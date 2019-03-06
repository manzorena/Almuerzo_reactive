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


var menujson = require('./lista_menus.json');

var Menus = menujson["menus"];
var Oficinas = menujson["oficinas"];







class Order extends React.Component<{},{}> {

    render() {

        return(
            <div>
                <div id="Menu_principal">
                <Selector_menu label="Menú" menuarr={Menus}/>
                </div>

                <div id="hidden">

                    <div id="carne">
                        <Selector label="Tipo"       menuarr={Menus[0]["Tipo"]}/>
                        <Selector label="Guarnición" menuarr={Menus[0]["Guarnición"]}/>
                    </div>

                    <div id="Ensalada para armar">
                        <Selector label="Gusto especial" menuarr={Menus[1]["Gusto especial"]}/>
                        <Gustos  gustos={Menus[1]["Gustos"]}/>
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
    
    private showme(a){
        var response = a as HTMLInputElement;
        var choise = document.getElementById("menu_princ") as HTMLInputElement;
        var sel_menu = choise.textContent.substr(0,(choise.textContent.length)-1);

        var hidedrop = document.getElementById("hidden");
        console.log(hidedrop);

        // for(var i=0; )
        
        document.getElementsByClassName(sel_menu)


    }
}


export default Order;