import * as React from 'react';
import {ActionButton,DefaultButton, IButtonProps} from 'office-ui-fabric-react/lib/Button';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import styles from './Order.module.scss';
import '../Almuerzo';
import Selector from '../Selector/Selector';
import Selector_menu from '../Selector/Selector_menu';
import Rowgustos from '../Gustos/Gustos';
import Checkbox_ from '../Checkbox/Checkbox';
import data from './lista_menus';
import * as webpack from 'webpack'
import { max } from '../../../../../node_modules/moment';
import axios from 'axios';
import * as $ from 'jquery';
import swal from 'sweetalert';

export type OrderCallback = (pedido: any, str_pedido: string) => void;

export interface OrderState { //estados de Rowgustos
    pedido: object;
    menu_key: number;
  }

class Order extends React.Component<{onSendMenu: OrderCallback},OrderState> {
    public state: OrderState = {
        pedido: {},
        menu_key: undefined
      };

    render() {

        let Menus = this.inmutable(data["menus"])
        let Oficinas = this.inmutable(data["oficinas"])
        let Turnos = this.inmutable(data["turno"])

        return(
            <div className={styles.container}>
                <div id="Menu_principal" onFocus={a => this.showme(a)}>
                <Selector_menu label="Menú" menuarr={Menus} onChange={(e) => this.handleChange_menu(e)}/>
                </div>

                <div id="hidden">
                    {Menus.map((el,index)=>

                    <div id={el["Menu"]} className={styles.hidden}> 
                        {this.create_options(el, index)}
                    </div>)}
                </div>

                <div id="detalle del pedido">
                <TextField label={"Detalle del pedido"} readOnly={true} placeholder={this.order_detail()} multiline autoAdjustHeight />
                </div>

                <div id="oficinas">
                <Selector label="Enviar pedido a" menuarr={Oficinas}  onChange={(e) => this.handleGlobals(e,"oficina")}/>
                </div>

                <div id="turno">
                <Selector label="Turno" menuarr={Turnos}  onChange={(e) => this.handleGlobals(e,"turno")}/>
                </div>

                <div className={styles.botones}>
                <DefaultButton onClick={() => this.props.onSendMenu(this.state.pedido, this.order_detail())}>Enviar pedido</DefaultButton>
                <DefaultButton onClick={() => this.disponibilidad()}>Checkear disponibilidad</DefaultButton>
                </div>
            </div>
        )
    }

        

    public create_options(obj, index){
        
        let output= [];

        obj["Props"].map((el,i)=>
        {switch (el) {

            case "Gustos":
                output[i] = <Rowgustos  gustos={obj[el]} MAX={obj.MAX} onChange={(e)=>this.handleProps(e, el)}/>
                break;
                
            case "Gratinada":
                output[i] = <Checkbox_ label={el} onChange={(e)=>this.handleProps(e, el)}/>
                break;

            default:
                output[i] = <Selector label={el} menuarr={obj[el]} onChange={(e)=>this.handleProps(e, el)}/>
                break;           
        }}
    )
        
        return output;
    }

    
    public handleProps(value, prop){ //HANDLE para los componentes que son DEPENDIENTES del Menu principal
        let obj = this.state.pedido
        let key = this.state.menu_key

        if (obj[key] == undefined){
            obj[key] = {}
        }
        

        obj[key][prop] = value;
        
        this.setState({pedido: obj})
    }

    public handleGlobals(value, prop){ //HANDLE para los componentes que son INDEPENDIENTES del Menu principal
        let obj = this.state.pedido

        obj[prop] = value;
        this.setState({pedido: obj})
    }

    public handleChange_menu (value){
        this.setState({menu_key: value["key"]})
        this.handleGlobals(value["text"],"Menú")
    }

    public inmutable(a:object){
       return JSON.parse(JSON.stringify(a));
    }

    
    public order_detail() {
        let pedido = this.state.pedido[this.state.menu_key]
        let menu = this.state.pedido["Menú"]

        if (menu != undefined){

            let output = "Menú: " + menu + ",  ";

        if (pedido != undefined){

            
            let list = Object.keys(pedido)

            for (let i = 0; i < list.length; i++) {

                output+= list[i] + ": " + pedido[list[i]] + ",  ";
                
            }
      }
      return output;
    }
      else return "Aún no ha seleccionado un Menú";
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

    public async disponibilidad() {
        let _Turnos = this.inmutable(data["turno"])
        try{
          const res = await axios.get(`https://mstech720.sharepoint.com/sites/Dev/_api/Web/lists/GetByTitle('Pedidos')/items?$select=Turno`)
          const data = res.data.value
          let arr_turno = [];

          for (let i = 0; i < data.length; i++) {
              arr_turno[i] = data[i].Turno;
          }
          console.log(arr_turno);

          let counts = {};
            for (var i = 0; i < arr_turno.length; i++) {
            counts[arr_turno[i]] = 1 + (counts[arr_turno[i]] || 0);         
            }

          let str_output = "";
          arr_turno.forEach((e, i) => {
              str_output+= "personas en el "+ e +": "+ counts[e]+"  ";
          });
            swal(str_output,"",)
          
          $.each(counts, function(index, value) {
            console.log(value);
         }); 
          
        }
        catch (error){      
          console.log(error)
        }
      }

}




export default Order;