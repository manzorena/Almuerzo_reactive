import * as React from 'react';
import styles from './Almuerzo.module.scss';
import { IAlmuerzoProps } from './IAlmuerzoProps';
import Order from './Order/Order';
import Slider from './Slider/Slider';
import * as moment from 'moment';
import axios from 'axios';



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
        <Slider data={this.state.data}/>
        <Order/>
      </div>
    );
  }
  
  //`https://mstech720.sharepoint.com/sites/Dev/_api/Web/lists/GetByTitle('Lista-Menu')/items?`

  async componentDidMount() {
    // Remove the 'www.' to cause a CORS error (and see the error state)
    try{
      const res = await axios.get(`https://mstech720.sharepoint.com/sites/Dev/_api/Web/lists/GetByTitle('Lista-Menu')/items?`)
      const data = res.data.value
      console.log(data);

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


  // public getMenues(): Promise<any> {
  //   console.log("entra");
  //   return new Promise<any>((resolve: (results: any) => void, reject: (error: any) => void): void => {
  //     var day = this.getDayOfWeek();
  //     console.log("antes de llamar");
  //     this.props.context.spHttpClient.get(`https://mstech720.sharepoint.com/sites/Dev/_api/Web/lists/GetByTitle('Lista-Menu')/items?`,
  //     SPHttpClient.configurations.v1,
  //     httpClientOptions
  //     )
  //     .then(
  //       (response: any) => {
  //         console.log("llamo correctamente");
  //           if (response.status >= 200 && response.status < 300) {
  //             return response.json();
  //           } else {
  //                return Promise.reject(new Error(JSON.stringify(response)));
                
  //           }
  //       })
  //       .then((data: any) => {

  //         let arr=[];
  //         let arr2=[];

  //         console.log("encontro datos");
  //         var htmlDailyMenu = "";      
  //         if (data.value.length > 0) {
  //           data.value.forEach((element) => {
  //             console.log(element);
  //             console.log("antes de llenar las variables");
  
  //             if(element.DiaSemana=='Lunes')     {arr[0] = element.imagen.Url ;arr2[0] = element.Title;}
  //        else if(element.DiaSemana=='Martes')    {arr[1] = element.imagen.Url ;arr2[1] = element.Title;}
  //        else if(element.DiaSemana=='Miercoles') {arr[2] = element.imagen.Url ;arr2[2] = element.Title;}
  //        else if(element.DiaSemana=='Jueves')    {arr[3] = element.imagen.Url ;arr2[3] = element.Title;}
  //        else if(element.DiaSemana=='Viernes')   {arr[4] = element.imagen.Url ;arr2[4] = element.Title;}
              
  
  //             console.log("variables llenas");
  
  //           });
  //         }
  //         else {
          
  //           //completar el else
  //           console.log("no hay menus para la semana");
  
  //         } 
  //       })
  //       .catch((ex) => {
  //         console.log("SUPERERROR");
  //         console.log("readDocumentsFromLibrary > spHttpClient.get()...catch:", ex);
  //         throw ex;
  //       });
  //   });
  // }

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

}
