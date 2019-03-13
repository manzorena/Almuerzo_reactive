import * as React from 'react';
import styles from './Almuerzo.module.scss';
import { IAlmuerzoProps } from './IAlmuerzoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Order from './Order/Order';
import Slider from './Slider/Slider';
import * as moment from 'moment';
import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions } from "@microsoft/sp-http";

const httpClientOptions : ISPHttpClientOptions = {};

httpClientOptions.headers = {
    "Accept": "application/json;odata=nometadata",
    "odata-version": ""
};

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

let arr = [];
let legend_arr = [];


export default class Almuerzo extends React.Component<IAlmuerzoProps, {}> {
  public render(): React.ReactElement<IAlmuerzoProps> {

    this.getMenues();

    return (
      <div className={ styles.almuerzo }>
        <Slider image_url_arr={arr} menu_legend_arr={legend_arr}/>
        <Order/>
      </div>
    );
  }




  public getMenues(): Promise<any> {
    console.log("entra");
    return new Promise<any>((resolve: (results: any) => void, reject: (error: any) => void): void => {
      var day = this.getDayOfWeek();
      console.log("antes de llamar");
      this.context.spHttpClient.get(`https://mstech720.sharepoint.com/sites/Dev/_api/Web/lists/GetByTitle('Lista-Menu')/items?`,
      SPHttpClient.configurations.v1,
      httpClientOptions
      )
      .then(
        (response: any) => {
          console.log("llamo correctamente");
            if (response.status >= 200 && response.status < 300) {
              return response.json();
            } else {
                console.log("ERRRRRRRRROR");
                
            }
        })
        .then((data: any) => {
          console.log("encontro datos");
          var htmlDailyMenu = "";      
          if (data.value.length > 0) {
            data.value.forEach((element) => {
              console.log(element);
              console.log("antes de llenar las variables");
  
              if(element.DiaSemana=='Lunes')     {arr[0] = element.imagen.Url ;legend_arr[0] = element.Title;}
         else if(element.DiaSemana=='Martes')    {arr[1] = element.imagen.Url ;legend_arr[1] = element.Title;}
         else if(element.DiaSemana=='Miercoles') {arr[2] = element.imagen.Url ;legend_arr[2] = element.Title;}
         else if(element.DiaSemana=='Jueves')    {arr[3] = element.imagen.Url ;legend_arr[3] = element.Title;}
         else if(element.DiaSemana=='Viernes')   {arr[4] = element.imagen.Url ;legend_arr[4] = element.Title;}
              
  
              console.log("variables llenas");
  
            });
          }
          else {
          
            //completar el else
            console.log("no hay menus para la semana");
  
          } 
        })
        .catch((ex) => {
          console.log("SUPERERROR");
          console.log("readDocumentsFromLibrary > spHttpClient.get()...catch:", ex);
          throw ex;
        });
    });
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

}
