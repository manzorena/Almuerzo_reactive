import * as React from 'react';
import styles from './Almuerzo.module.scss';
import { IAlmuerzoProps } from './IAlmuerzoProps';
import Order from './Order/Order';
import Slider from './Slider/Slider';
import * as moment from 'moment';
import axios from 'axios';
import { Async } from '../../../../node_modules/@uifabric/utilities/lib';
import * as $ from 'jquery';
import swal from 'sweetalert';




var daysOfWeek :DayOfWeek;

export enum DayOfWeek {
  Monday = "Lunes",
  Tuesday = "Martes",
  Wednesday = "Miercoles",
  Thursday = "Jueves",
  Friday = "Viernes",
  Saturday = "Sabado",
  Sunday = "Domingo"
}

export interface IAlmuerzoState { //estados de Almuerzo
      data: any,
      loading: boolean,
      error: any
}




export default class Almuerzo extends React.Component<IAlmuerzoProps, IAlmuerzoState> {
  public state: IAlmuerzoState = {
      data: [],
      loading: true,
      error: null
};

  public render(): React.ReactElement<IAlmuerzoProps> {

    () => this.componentDidMount();

    return (
      <div className={ styles.almuerzo }>
        <div className={styles.cont1}>
          <div className={styles["sandbox-correct-pronounciation"]}>
              <h1 className={styles["heading-correct-pronounciation"]}>
                <em className={styles.titulo}>Menús del día</em>
              </h1>
          </div>

          <Slider data={this.state.data}/>
          <Order onSendMenu={(order,order_det) => this.sendMenu(order,order_det)}/>
        </div>
      </div>
    );
  }
  
  //`https://mstech720.sharepoint.com/sites/Dev/_api/Web/lists/GetByTitle('Lista-Menu')/items?`

  async componentDidMount() {
    try{
      const res = await axios.get(`https://mstech720.sharepoint.com/sites/Dev/_api/Web/lists/GetByTitle('Lista-Menu')/items?`)
      const data = res.data.value

        this.setState({
          data,
          loading: false,
          error: null
        });
    }
    catch (error){      
      console.log(error)
        this.setState({
          loading: false,
          error: error
        });
    }
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return (
      <div>
        Uh oh: {this.state.error.message}
      </div>
    );
  }



  public getDayOfWeek() {
    switch(moment().format('dddd')) {
      case "Monday": {
        return DayOfWeek.Monday;
      }
      case "Tuesday": {
        return DayOfWeek.Tuesday;
      }
      case "Wednesday": {
        return DayOfWeek.Wednesday;
      }
      case "Thursday": {
        return DayOfWeek.Thursday;
      }
      case "Friday": {
        return DayOfWeek.Friday;
      }
      case "Saturday": {
        return DayOfWeek.Saturday;
      }
      case "Sunday": {
        return DayOfWeek.Sunday;
      }
    }    
  }

  public sendMenu (order, order_det){
    $.ajax({ //hace una llamada POST para obtener el TOKEN de login
      url: "https://mstech720.sharepoint.com/sites/Dev/_api/contextinfo",
      method: "POST",
      headers: { "Accept": "application/json; odata=verbose"},
      success: function (data) {
          $('#__REQUESTDIGEST').val(data.d.GetContextWebInformation.FormDigestValue)
      //una vez obtenido hace la segunda llamada a la lista de sharepoint y le pasa los valores

          $.ajax  
        ({  
        url: `https://mstech720.sharepoint.com/sites/Dev/_api/Web/lists/GetByTitle('Pedidos')/items?`,  
        type: "POST",  
        data: JSON.stringify  
        ({  
            __metadata:  
            {  
                type: "SP.Data.PedidosListItem"  
            },  
            
            Detalle: order_det,
            Nota: "adasdsdss",
            Turno: order["turno"],
            Enviar_a: order["oficina"],

        }),  
        headers:  
        {  
            "Accept": "application/json;odata=verbose",  
            "Content-Type": "application/json;odata=verbose",  
            "X-RequestDigest": data.d.GetContextWebInformation.FormDigestValue,  
            "X-HTTP-Method": "POST"  
        },  
        success: function(data, status, xhr)  
        {  
            swal("Listo", "El menú se ha enviado correctamente","success");
             
        },  
        error: function(xhr, status, error)  
        {  
          alert("ERROR: algo salio mal")
        }  
    });
      },
      error: function (data, errorCode, errorMessage) {
          alert(errorMessage)
      }
  });
     
  }

  public makePost(requestDigest){
    
  }
}
