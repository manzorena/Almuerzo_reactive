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
                        {console.log(Menus[0]["Tipo"])}
                        {console.log(Menus[0]["Guarnición"])}
                        <Selector label="Tipo"       menuarr={Menus[0]["Tipo"]}/>
                        <Selector label="Guarnición" menuarr={Menus[0]["Guarnición"]}/>
                    </div>

                    <div id="Ensalada para armar">
                       {console.log(Menus[1]["Gusto especial"])}
                        <Selector label="Gusto especial" menuarr={Menus[1]["Gusto especial"]}/>
                        <Gustos  gustos={Menus[1]["Gustos"]}/>
                    </div>

                    <div id="Omelette con guarnición">
                        {console.log(Menus[2]["Tipo"])}
                        {console.log(Menus[2]["Guarnición"])}
                        <Selector label="Tipo"       menuarr={Menus[2]["Tipo"]}/>
                        <Selector label="Guarnición" menuarr={Menus[2]["Guarnición"]}/>
                    </div>

                    <div id="Rolls">
                       {console.log(Menus[3]["Tipo"])}

                        <Selector label="Tipo"       menuarr={Menus[3]["Tipo"]}/>
                    </div>

                    <div id="Pizzetas de arroz (para celíacos)">
                    {console.log(Menus[4]["Tipo"])}

                        <Selector label="Tipo"       menuarr={Menus[4]["Tipo"]}/>
                    </div>

                    <div id="Tartas con guarnición">
                        {console.log(Menus[5]["Tipo"])}
                        {console.log(Menus[5]["Guarnición"])}
                        <Selector label="Tipo"       menuarr={Menus[5]["Tipo"]}/>
                        <Selector label="Guarnición" menuarr={Menus[5]["Guarnición"]}/>
                    </div>

                    <div id="Milanesas vegetarianas">
                        {console.log(Menus[6]["Tipo"])}
                        {console.log(Menus[6]["Guarnición"])}
                        <Selector label="Tipo"       menuarr={Menus[6]["Tipo"]}/>
                        <Selector label="Guarnición" menuarr={Menus[6]["Guarnición"]}/>
                        <Checkbox_ label="Gratinada"/>
                    </div>

                    <div id="Sándwich">
                    {console.log(Menus[7]["Tipo"])}

                        <Selector label="Tipo"       menuarr={Menus[7]["Tipo"]}/>
                    </div>

                    <div id="Pasta">
                         {console.log(Menus[8]["Tipo"])}
                         {console.log(Menus[8])}
                         {console.log(Menus[8]["Salsa"])}
                        <Selector label="Tipo"       menuarr={Menus[8]["Tipo"]}/>
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